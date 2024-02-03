from flask import Flask, make_response, jsonify, render_template, redirect, request, abort, session
from flask_login import LoginManager, login_user, login_required, logout_user
from data import db_session
from data.users import User

app = Flask(__name__)
login_manager = LoginManager()
login_manager.init_app(app)
app.config['SECRET_KEY'] = 'DAND-I_secret_key'


@app.errorhandler(404)
def not_found(_):
    return make_response(jsonify({'error': 'Not found'}), 404)


@login_manager.user_loader
def load_user(user_id):
    db_sess = db_session.create_session()
    return db_sess.query(User).get(user_id)


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect("/")


@app.route("/")
def session_test():
    visits_count = session.get('visits_count', 0)
    session['visits_count'] = visits_count + 1
    return make_response(f"Вы пришли на эту страницу {visits_count + 1} раз")


def main():
    db_session.global_init("db/database.db")
    app.run()


if __name__ == '__main__':
    main()
