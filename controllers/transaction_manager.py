from typing import Union
from datetime import datetime
from flask import jsonify

from data import db_session
from data.users import User

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_transactions_with_date(session_id: str, date1: datetime, date2: datetime, type: str) -> jsonify:
    """Пусть возвращает списсок транзакций пользователя с заданным session_id с первой даты по вторую включительно
    type: 'all' - все транзакции
            'income' - доходы
            'outcome' - расходы"""


def get_transactions_with_category(session_id: str, category: str) -> jsonify:
    """Пусть возвращает список транзакций с заданной категорией за все время"""


def add_transaction(session_id: str, type: str, sum: float, date: datetime, description: str, picture: str):
    """
    Пусть добавляет транзакцию
    :param session_id: session_id
    :param type: 'income' или 'outcome'
    :param sum: сумма транзакции
    :param date: дата транзакции
    :param description: комментарий к транзакции
    :param picture: ссылка на изображение
    """


def delete_transaction(session_id: str, transaction_id: int):
    """
    Удаляет транзакции
    :param session_id: session id
    :param transaction_id: айди транзакции
    """
