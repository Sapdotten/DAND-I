import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response, jsonify, Response
import controllers.category_manager as dm
from uuid import uuid4
from datetime import datetime

blueprint = flask.Blueprint(
    'category_controller',
    __name__,
    template_folder='templates'
)


@blueprint.route('/add_category', methods=['POST'])
def add_category():
    data = request.get_json()
    dm.add_category(data['name_category'], data['user_id'])
    return make_response(jsonify({'Message': "Category added"}), 200)


@blueprint.route('/delete_category', methods=['POST'])
def delete_category():
    data = request.get_json()
    dm.delete_category(data['category_id'])
    return make_response(jsonify({'Message': "Category deleted"}), 200)


@blueprint.route('/get_categories', methods=['POST'])
def get_categories():
    data = request.get_json()
    categories = dm.get_categories(data['user_id'])
    return make_response(categories, 200)
