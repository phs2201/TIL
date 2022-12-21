# myproject/pybo/views/main_views.py
from ..db import db
from flask import Blueprint, url_for, redirect

bp = Blueprint('main', __name__, url_prefix='/') 
# main은 블루프린트의 이름 url_prefix='/' 는 5000뒤에 붙는 기본주소

@bp.route('/hello') # http://127.0.0.1:5000
def helloe_pybo():
    return 'Hello, Pybo'

@bp.route('/')
def index():
    return redirect(url_for('question._list')) # url_for 함수에 전달 된 question._list는 question 이라는 별명을 가진 bp를 찾고
# 그 안에 _list르 등록된 함수명을 찾는다. question._list는 question 별칭으로 등록한 question_views.py 파일에서 _list함수를 의미한다.
# _list함수에 등록된 URL 매핑 규칙은 @bp.route(’/list’)이므로 url_for(’question._list’)는 /question/list/ URL 주소를 반환한다.
    