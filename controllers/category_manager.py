from typing import Union
from datetime import datetime
from flask import jsonify

from data import db_session

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_categories(session_id: str) -> jsonify:
    """Возвращает все категории пользователя с заданным сессион_айди"""


def add_category(session_id: str, category_name: str):
    """Добавляет категорию для пользователя"""


def delete_category(session_id: str, category_id: int):
    """Удаляет заданную категорию у пользователя.
    Товарам с данной категорией приссвоить какую-нибудь неопределнную категорию
    """
