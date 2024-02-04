from datetime import datetime
from flask import jsonify
from sqlalchemy import and_

from data import db_session
from data.transactions import Transaction
from data.categories import Category

from controllers import user_manager as ur_mg

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_transactions_with_date(user_id: int, date1: datetime, date2: datetime, type: str) -> jsonify:
    """Пусть возвращает списсок транзакций пользователя с заданным session_id с первой даты по вторую включительно
    type: 'all' - все транзакции
            'incoming' - доходы
            'outcoming' - расходы"""

    if type == 'incoming':
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id,
            Transaction.type_operation == 'incoming')).all()
    elif type == 'outcoming':
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id,
            Transaction.type_operation == 'outcoming')).all()
    else:
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id)
        ).all()

    return jsonify({'transactions': [item.to_dict(
        only=('id', 'sum_operation', 'type_operation', 'date_time_operation', 'message_operation',
              'pictures_str_operation', 'category_operation_id')
    )
        for item in trs]})


def get_transactions_with_category(email: str, category: str, type: str) -> jsonify:
    """Пусть возвращает список транзакций с заданной категорией за все время
    'all' = записи по всем категориям """

    user_id = ur_mg.get_user_id(email)

    if category == 'all':
        trs = db_sess.query(Transaction).filter(Transaction.user_id == user_id)
    else:
        ct = db_sess.query(Category).filter(Category.name_category == category).first()
        trs = db_sess.query(Transaction).filter(and_(
            Transaction.user_id == user_id, Transaction.category_operation_id == ct.id))

    if type != 'all':
        trs = trs.filter(Transaction.type_operation == type)

    return jsonify({'transactions': [item.to_dict(
        only=('id', 'sum_operation', 'type_operation', 'date_time_operation', 'message_operation',
              'pictures_str_operation', 'category_operation_id')
    )
        for item in trs.all()]})


def add_transaction(user_id: str, type: str, sum: float, date: datetime, description: str, picture: str, category: str):
    """
    Пусть добавляет транзакцию и меняет сумму счета.
    :param session_id: session_id
    :param bill: счет транзакции
    :param type: 'income' или 'outcome'
    :param sum: сумма транзакции
    :param date: дата транзакции
    :param description: комментарий к транзакции
    :param picture: ссылка на изображение
    """
    ct = db_sess.query(Category).filter(Category.name_category == category).first()

    tr = Transaction()
    tr.user_id = user_id
    tr.type_operation = type
    tr.sum_operation = sum
    tr.date_time_operation = date
    tr.message_operation = description
    tr.pictures_str_operation = picture
    tr.category_operation_id = ct.id
    db_sess.add(tr)
    db_sess.commit()


def delete_transaction(transaction_id: int):
    """
    Удаляет транзакции и изменяет баланс
    :param transaction_id: айди транзакции
    """

    tr = db_sess.query(Transaction).get(transaction_id)

    new_balance = ur_mg.get_balance(tr.user_id) - tr.sum_operation
    ur_mg.set_balance(tr.user_id, new_balance)
    ur_mg.set_balance(tr.user_id)

    db_sess.delete(tr)
    db_sess.commit()
