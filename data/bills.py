import datetime
import sqlalchemy
from sqlalchemy import orm

from .db_session import SqlAlchemyBase

'''
Счета - карты, вклады и тд.
'''


class Bill(SqlAlchemyBase):
    __tablename__ = 'bills'

    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    total = sqlalchemy.Column(sqlalchemy.Float, nullable=True)

    # user_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("users.id"))
    # user = orm.relationship('User')
    #
    # transactions = orm.relationship("Transaction", back_populates="bill")
