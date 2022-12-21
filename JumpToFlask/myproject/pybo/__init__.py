# myproject\pybo\__init__.py

import config
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)
    
    # 블루 프린트
    from .views import main_views, question_views, answer_views, auth_views
    app.register_blueprint(main_views.bp)
    app.register_blueprint(question_views.bp)
    app.register_blueprint(answer_views.bp)
    app.register_blueprint(auth_views.bp)
    
    @app.route('/test')
    def test():
        return jsonify('{"result":true, "count":42}')
    
    # 필터
    from .filter import format_datetime
    app.jinja_env.filters['datetime'] = format_datetime
    
    return app
