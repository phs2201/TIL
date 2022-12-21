from ..db import db
from datetime import datetime
from ..forms import AnswerForm

from flask import Blueprint, render_template, url_for, redirect, request, g

bp = Blueprint('answer', __name__, url_prefix='/answer') 

@bp.route('/create/<int:question_id>', methods=('POST',)) 
def create(question_id):
    if g.user is None:
        return redirect(url_for('auth.login'))
    form = AnswerForm()
    if form.validate_on_submit():
        cursor = db.cursor()
        content = request.form['content']
        sql = "insert into answer (question_id, content, create_date, user_id) values ({}, '{}', '{}',{})".format(question_id, content, datetime.now(), g.user['user_id'])
        cursor.execute(sql)
        db.commit()
        
        return redirect(url_for('question.detail', question_id=question_id))
    
    cursor = db.cursor()
    sql = 'SELECT * FROM question WHERE id={};'.format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()
    
    sql = "SELECT * FROM question WHERE id={};".format(question_id)
    cursor.execute(sql)
    answer_set = cursor.fetchall()    
    
    return render_template('question/question_detail.html', question=question, form=form, answer_set=answer_set)