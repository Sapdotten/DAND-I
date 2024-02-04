import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response, jsonify, Response
import controllers.transaction_manager as dm
from uuid import uuid4
from datetime import datetime

blueprint = flask.Blueprint(
    'transaction_controller',
    __name__,
    template_folder='templates'
)


@blueprint.route('/alltime_transactions', methods=['POST'])
def get_all_transactions():
    data = request.get_json()
    trans = dm.get_transactions_with_category(data['user_id'], type=data['type'], category=data['category'])
    return make_response(trans, 200)


@blueprint.route('/transactions', methods=['POST'])
def get_transactions_between_dates():
    data = request.get_json()
    date1 = datetime.strptime(data['date_1'], '%d%m%Y')
    date2 = datetime.strptime(data['date_2'], '%d%m%Y')
    trans = dm.get_transactions_with_date(data['user_id'], date1, date2, data['type'])
    return make_response(trans, 200)


@blueprint.route('/add_transactions', methods=['POST'])
def add_transaction():
    data = request.get_json()
    date = datetime.strptime(data['date'], '%d%m%Y')
    dm.add_transaction(user_id=data['user_id'], type=data['type'], sum=data['sum'], date=date,
                       description=data['description'],
                       picture=data['picture'], category = data['category'])
    return make_response(jsonify({'message': 'transaction_added'}), 200)


@blueprint.route('/delete_transaction', methods=['POST'])
def delete_transaction():
    data = request.get_json()
    dm.delete_transaction(data['transaction_id'])
    return make_response(jsonify({'transactiod delete'}), 200)
