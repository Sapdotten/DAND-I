from typing import Union

from flask import jsonify

from data import db_session
from data.users import User

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_user_password(username: str) -> Union[None, str]:
    """Должен возвращать пароль юзера по его имени, если пароля нет, то пусть возвращает None"""


def create_user(user_name: str, email: str, password: str):
    """Создает юзера в бд"""
    user = User()
    user.name = user_name
    user.email = email
    user.set_password(password)
    db_sess.add(user)
    db_sess.commit()


def get_user(user_id: int) -> Union[None, jsonify]:
    """
    Пусть возвращает пользователя полностью со всеми полями
    :param usesrname: юзернаме
    :return: None, если юзера нет, словарь, если юзер есть
    """
    user = db_sess.query(User).get(user_id)
    if not user:
        return jsonify({'error': 'Not found'})
    return jsonify({'user': user.to_dict(
        only=('id', 'first_name', 'email', 'password', 'pincode')
    )})


def set_session_id(username: str, session_id: str):
    """Пусть устанваливает session_id юзеру"""
    pass


def delete_user(user_id: int):
    """Пусть удалаяет юзера нахой"""
    user = db_sess.query(User).get(user_id)
    db_sess.delete(user)
    db_sess.commit()


def get_balance(user_id: int):
    user = db_sess.query(User).get(user_id)
    return jsonify({'balance': user.to_dict(only=('balance',))})


def set_balance(user_id: int, sum: float):
    user = db_sess.query(User).get(user_id)
    """Прописать установление баланса"""
