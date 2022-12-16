# myproject/pybo/views/main_views.py

from flask import Blueprint

bp = Blueprint('main', __name__, url_prefix='/') 
# main은 블루프린트의 이름 url_prefix='/' 는 5000뒤에 붙는 기본주소

@bp.route('/') # http://127.0.0.1:5000
def hello_pybo():
    return 'Hello, Pybo!'
@bp.route('/a') # http://127.0.0.1:5000/a
def hello_a():
    return 'Hello,aa'