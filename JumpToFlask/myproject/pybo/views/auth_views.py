# myproject/pybo/views/auth_views.py

from flask import Blueprint, url_for, render_template, flash, request, session, g
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import redirect

import functools
from ..db import db
from pybo.forms import UserCreateForm, UserLoginForm

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/signup/', methods=('GET', 'POST'))
def signup():
    form = UserCreateForm()
    cursor = db.cursor()
    if request.method == 'POST' and form.validate_on_submit():
        sql = "select * from user where username='{}'".format(form.username.data) # 사용자가 입력한 값을 db에서 조회함 id를 기준으로
        cursor.execute(sql)
        user = cursor.fetchone() # 결과가 있는지 받아옴 
        if not user: # user가 없으면 회원가입 로직 실행
            sql = "insert into user (username, password, email) values ('{}','{}','{}');".format(form.username.data,
            generate_password_hash(form.password1.data), form.email.data) # 비밀번호는 hash형태로 저장해야함 > db에 넣음
            cursor.execute(sql)
            db.commit() # insert 할 떄는 db.commit 해야 함
            return redirect(url_for('main.index')) # 메인페이지로 돌아가게 함
        else:
            flash('이미 존재하는 사용자입니다.') # form_errors 에 flash를 에러메시지로 
    return render_template('auth/signup.html', form=form)

@bp.route('/login/', methods=('GET', 'POST')) # get과  post 두 가지 방식
def login():
    form = UserLoginForm()
    cursor = db.cursor()
    if request.method == 'POST' and form.validate_on_submit(): # get으로 오면 if문 건너띔
        error = None
        sql = "select * from user where username='{}'".format(form.username.data)
        cursor.execute(sql)
        user = cursor.fetchone()
        if not user:  # user에 아무것도 없으면 실행되는 if문
            error = "존재하지 않는 사용자입니다." # 사용자가 없으면 error에 문자열을 담아둔다
        elif not check_password_hash(user['password'], form.password.data):
            error = "비밀번호가 올바르지 않습니다."
        if error is None: # 에러에 아무것도 없으면 실핸
            session.clear() # session 은 일정시간 지나면 파기해버림
            session['user_id'] = user['id']
            session['username'] = user['username']
            return redirect(url_for('main.index'))
        flash(error)
    return render_template('auth/login.html', form=form)

@bp.before_app_request # 애너테이션이 적용된 함수는 라우팅 함수보다 항상 먼저 실해된다 각 라우팅 함수가 실행되기 전에 로그인 여부를 확인하는 라우팅으로 사용할 수 있다.
def load_logged_in_user():
    user_id = session.get('user_id')
    if user_id is None :
        g.user = None
    else :
        g.user = {'user_id' : session.get('user_id'), 'username': session['username']}
        
@bp.route('/logout/')
def logout():
    session.clear() # session을 지우면 로그아웃 되는게 그 기능을 함수로 만듦
    return redirect(url_for('main.index'))