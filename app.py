import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    last_name_user = db.Column(db.String(20), unique=False)
    first_name_user = db.Column(db.String(20), unique=False)
    phone_number = db.Column(db.String(11), unique=True)
    password = db.Column(db.String(200), unique=False)
    email = db.Column(db.String(50), unique=True)
    family_groups_id = db.Column(db.Integer, unique=False)
    session_id = db.Column(db.Integer, unique=True)

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


@app.route("/register", methods=('POST',))
def register():
    data = request.get_json()
    hash = generate_password_hash(data['password'], salt_length=50)
    u = Users(email=data['email'], password=hash)
    db.session.add(u)
    db.session.flush()
    resp = make_response(flask.jsonify(u.as_dict()), 200)
    return resp


@app.route('/', methods=['GET', 'POST'])
def index():
    print('OKAY')
    return 'Hello world'


if __name__ == "__main__":
    app.run(debug=True)
