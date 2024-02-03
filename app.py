import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
