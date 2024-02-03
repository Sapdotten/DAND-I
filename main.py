from flask import Flask, make_response, jsonify, render_template, redirect, request, abort, session
from flask_login import LoginManager, login_user, login_required, logout_user
from data import db_session
from controllers import user_controller

app = Flask(__name__)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
app.config['SECRET_KEY'] = 'DAND-I_secret_key'


@app.errorhandler(404)
def not_found(_):
    return make_response(jsonify({'error': 'Not found'}), 404)


def main():
    db_session.global_init("db/database.db")
    app.register_blueprint(user_controller.blueprint)
    app.run()


if __name__ == '__main__':
    main()
