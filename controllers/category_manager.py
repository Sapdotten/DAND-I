from datetime import datetime
from flask import jsonify

from data import db_session
from data.categories import Category

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_categories(user_id: str) -> jsonify:
    """Возвращает все категории пользователя по id"""

    categories = db_sess.query(Category).filter(Category.user_id == user_id).all()
    return jsonify({'categories': [item.to_dict(
        only=('id', 'name_category')
    )
        for item in categories]})


def add_category(category_name: str, user_id: int):
    """Добавляет категорию для пользователя"""

    ct = Category()
    ct.name_category = category_name
    ct.user_id = user_id
    db_sess.add(ct)
    db_sess.commit()


def delete_category(category_id: int):
    """Удаляет заданную категорию у пользователя.
    Товарам с данной категорией приссвоить какую-нибудь неопределнную категорию
    """
    ct = db_sess.query(Category).get(category_id)
    db_sess.delete(ct)
    db_sess.commit()
