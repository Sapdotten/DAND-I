from typing import Union
import user


def get_user_password(username: str) -> Union[None, str]:
    """Должен возвращать пароль юзера по его имени, если пароля нет, то пусть возвращает None"""
