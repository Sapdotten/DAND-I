import flask
from flask import request, make_response, jsonify, Response
import controllers.user_manager as dm
from uuid import uuid4

blueprint = flask.Blueprint(
    'user_controller',
    __name__,
    template_folder='templates'
)


@blueprint.route('/register', methods=['POST'])
def create_user():
    data = request.get_json()
    dm.create_user(data['username'], data['email'], data['password'])
    return make_response(jsonify({'message': 'User created successfully'}), 201)


@blueprint.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    user_password = dm.get_user_password(data['username'])
    if user_password is None:
        return make_response(jsonify({'message': 'Bad request'}), 400)

    if data['password'] == user_password:
        session_id = str(uuid4())
        dm.set_session_id(data['username'], session_id)
        resp = Response()
        resp.set_cookie('authorization', session_id)
        return resp
    else:
        return make_response(jsonify({'message': 'Uncorrect passsword'}), 401)


@blueprint.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = dm.get_user(user_id)
    return jsonify(user)


# @blueprint.route('/user/<int:id>', methods=['PUT'])
# def update_user(id):
#     user = User.query.get_or_404(id)
#     data = request.get_json()
#     user.username = data.get('username', user.username)
#     user.email = data.get('email', user.email)
#     db.session.commit()
#     return jsonify({'message': 'User updated successfully'})


@blueprint.route('/user/<int:username>', methods=['DELETE'])
def delete_user(username):
    dm.delete_user(username)
    return jsonify({'message': 'User deleted successfully'})
