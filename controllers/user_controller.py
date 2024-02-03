import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response, jsonify
from data.user import User
from uuid import uuid4


def init(app_: Flask, db_):
    global app, db
    app = app_
    db = db_

    @app.route('/register', methods=['POST'])
    def create_user():
        data = request.get_json()
        new_user = User(username=data['username'], email=data['email'], password=data['password'], session_id=uuid4())
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'User created successfully'}), 201

    @app.route('/login', methods = ['POST'])
    def login_user():
        data = request.get_json()


    @app.route('/user/<int:id>', methods=['GET'])
    def get_user(id):
        user = User.query.get_or_404(id)
        return jsonify({'username': user.username, 'email': user.email})

    @app.route('/user/<int:id>', methods=['PUT'])
    def update_user(id):
        user = User.query.get_or_404(id)
        data = request.get_json()
        user.username = data.get('username', user.username)
        user.email = data.get('email', user.email)
        db.session.commit()
        return jsonify({'message': 'User updated successfully'})

    @app.route('/user/<int:id>', methods=['DELETE'])
    def delete_user(id):
        user = User.query.get_or_404(id)
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'})
