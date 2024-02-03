import datetime
import sqlalchemy
from sqlalchemy import orm

from .db_session import SqlAlchemyBase

'''
Категория транзакции (продукты, маркетплейсы, одежда и тп)
'''


class Category(SqlAlchemyBase):
    __tablename__ = 'categories'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    name_category = sqlalchemy.Column(sqlalchemy.String, nullable=True)

    user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"))
    user = orm.relationship('User')
