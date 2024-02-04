import datetime
import sqlalchemy
from flask_login import UserMixin
from sqlalchemy import orm
from sqlalchemy_serializer import SerializerMixin
from werkzeug.security import generate_password_hash, check_password_hash

from .db_session import SqlAlchemyBase

'''
Описание класса User (сам пользователь)
'''


class User(SqlAlchemyBase, UserMixin, SerializerMixin):
    __tablename__ = 'users'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    last_name = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    first_name = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    password = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    phonenumber = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    pincode = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    email = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    user_busnies_boolean = sqlalchemy.Column(sqlalchemy.Boolean, nullable=True)
    family_group_id = sqlalchemy.Column(sqlalchemy.Integer, nullable=True)
    plans = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    custom_user_category = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    created_date = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.datetime.now)
    balance = sqlalchemy.Column(sqlalchemy.Float, default=0.0)

    transactions = orm.relationship("Transaction", back_populates="user")
    categories = orm.relationship("Category", back_populates="user")

    def __repr__(self):
        return f'<User> {self.id} {self.first_name_user} {self.last_name_user} {self.email}'

    def set_password(self, password):
        self.password = password

    def check_password(self, password):
        return self.password == password
