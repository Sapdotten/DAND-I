import datetime
import sqlalchemy
from sqlalchemy import orm

from .db_session import SqlAlchemyBase

'''
Описание класса Transaction
Транзакция = поступление и расход
'''


class Transaction(SqlAlchemyBase):
    __tablename__ = 'transactions'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    sum_operation = sqlalchemy.Column(sqlalchemy.Float, nullable=True)
    type_operation = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    date_time_operation = sqlalchemy.Column(sqlalchemy.DateTime, default=datetime.datetime.now)
    message_operation = sqlalchemy.Column(sqlalchemy.String, nullable=True)
    pictures_str_operation = sqlalchemy.Column(sqlalchemy.String, nullable=True)

    user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"))
    category_operation_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("categories.id"))
    # bill_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("bill.id"))

    user = orm.relationship('User', foreign_keys=[user_id], back_populates='transactions')
    category = orm.relationship('Category')
    # bill = orm.relationship('Bill')
