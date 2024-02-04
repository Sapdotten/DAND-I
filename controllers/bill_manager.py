from typing import Union
from datetime import datetime
from flask import jsonify
from sqlalchemy import and_

from data import db_session

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def create_bill(user_id: int, sum: int, name: str):
    """Создает счет для юзера с некоторой стартовой суммой и именем"""


def get_all_bills(user_id: int) -> jsonify:
    """Возвращает список всех счетов пользователя"""


def delete_bill(bill_id: int):
    """Удаляет счет"""


def update_bill(bill_id: int, sum: int, name: str):
    """Обновляет данные счета"""
