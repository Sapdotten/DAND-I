from typing import Union


def get_user_password(username: str) -> Union[None, str]:
    """Должен возвращать пароль юзера по его имени, если пароля нет, то пусть возвращает None"""


def create_user(username: str, email: str, password: str):
    """Создает юзера в бд"""


def get_user(usesrname: str) -> Union[None, dict]:
    """
    Пусть возвращает пользователя полностью со всеми полями
    :param usesrname: юзернаме
    :return: None, если юзера нет, словарь, если юзер есть
    """


def set_session_id(username: str, session_id: str):
    """Пусть устанваливает session_id юзеру"""
    pass


def delete_user(username: str):
    """Пусть удалаяет юзера нахой"""

