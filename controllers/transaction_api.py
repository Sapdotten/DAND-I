import flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, request, make_response, jsonify, Response
import data.data_manager as dm
from uuid import uuid4

blueprint = flask.Blueprint(
    'transaction_controller',
    __name__,
    template_folder='templates'
)