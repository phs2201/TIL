# myproject/pybo/views/sub_views.py

from flask import Blueprint

bp = Blueprint('sub', __name__, url_prefix='/admin') 
# sub는 블루프린트의 이름 url_prefix='/' 는 http://127.0.0.1:5000/ 뒤에 붙는 기본주소

@bp.route('/') # http://127.0.0.1:5000/admin
def admin():
    return 'Hellow'

@bp.route('/aaa') # http://127.0.0.1:5000/admin/aaa
def admin_aaa():
    return 'This is aaa'

@bp.route('/bbb') # http://127.0.0.1:5000/admin/bbb
def admin_bbb():
    return 'This is bbb'