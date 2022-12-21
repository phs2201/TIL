# myproject/pybo/views/question_views.py

from datetime import datetime
from flask import Blueprint, render_template, request, url_for, redirect, g
from ..db import db
from pybo.forms import QuestionForm, AnswerForm

bp = Blueprint('question', __name__, url_prefix='/question') 

@bp.route('/list') 
def _list():
    question_list ={}
    number = 10
    page = request.args.get('page', type=int, default=1)
    cursor = db.cursor()
    
    sql = """
    SELECT T.*, U.username FROM 
    (SELECT Q.*, IFNULL(A.count, 0) AS count
    FROM question AS Q 
    LEFT JOIN (SELECT count(*) AS count, question_id FROM answer GROUP BY question_id) AS A 
    ON Q.id = A.question_id) AS T 
    LEFT JOIN user AS U 
    ON T.user_id = U.id
    ORDER BY Q.id desc LIMIT {} OFFSET {} ;
		""".format(number, number * (page - 1))
    cursor.execute(sql)
    item = cursor.fetchall()
    
    sql = 'SELECT COUNT(*) as count FROM question;'
    cursor.execute(sql)
    get_length = cursor.fetchone()
    print(get_length)
    
    max_page = (get_length['count'] -1 ) // number + 1
    print(max_page)
    question_list['item'] = item
    question_list['page'] = page
    question_list['max_page'] = list(range(1,max_page+1))
    question_list['total'] = get_length['count']
    question_list['number'] = number
    
    
    return render_template('question/question_list.html',question_list=question_list)

@bp.route('detail/<int:question_id>/')
def detail(question_id):
    form = AnswerForm()
    cursor = db.cursor()
    sql = 'SELECT * FROM question WHERE id = {}'.format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()
    
    sql = "SELECT * FROM answer WHERE question_id = {}".format(question_id)
    cursor.execute(sql)
    answer_set = cursor.fetchall()
    
    return render_template('question/question_detail.html', question=question, answer_set=answer_set, form=form)

@bp.route('/create/', methods=('GET','POST'))
def create():
    if g.user is None:
        return redirect(url_for('auth.login'))
    form = QuestionForm()
    if request.method == "POST" and form.validate_on_submit():
        cursor = db.cursor()
        sql = "insert into question (subject, content, create_date, user_id) values ('{}','{}','{}',{})".format(form.subject.data, form.content.data, datetime.now(), g.user['user_id'])
        cursor.execute(sql)
        db.commit()
        return redirect(url_for('main.index'))
    return render_template('question/question_form.html', form=form)