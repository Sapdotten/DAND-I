import flask
from flask import request, make_response, jsonify, Response
import controllers.bill_manager as dm

blueprint = flask.Blueprint(
    'bill_controller',
    __name__,
    template_folder='templates'
)


@blueprint.route('/create_bill', methods=['POST'])
def create_bill():
    data = request.get_json()
    dm.create_bill(user_id=data['uesr_id'], sum=data['sum'], name=data['name'])
    return make_response(jsonify({"Message": "Bill created"}), 200)


@blueprint.route('/bills', methods=['POST'])
def get_all_bills():
    data = request.get_json()
    bills = dm.get_all_bills(data['user_id'])
    return make_response(bills, 200)


@blueprint.route('/delete_bill', methods=['POST'])
def delete_bill():
    data = request.get_json()
    dm.delete_bill(data['bill_id'])
    return make_response(jsonify({"Message": "Bill deleted"}), 200)


@blueprint.route('/update_bill', methods=['POST'])
def update_bill():
    data = request.get_json()
    dm.update_bill(bill_id=data['bill_id'], sum=data['sum'], name=data['name'])
    return make_response(jsonify({"Message": "Bill changed"}), 200)