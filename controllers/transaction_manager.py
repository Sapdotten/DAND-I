from typing import Union
from datetime import datetime
from flask import jsonify
from sqlalchemy import and_

from data import db_session
from data.transactions import Transaction
from data.categories import Category
from data.bills import Bill

db_session.global_init("db/database.db")
db_sess = db_session.create_session()


def get_transactions_with_date(user_id: int, date1: datetime, date2: datetime, type: str) -> jsonify:
    """Пусть возвращает списсок транзакций пользователя с заданным session_id с первой даты по вторую включительно
    type: 'all' - все транзакции
            'income' - доходы
            'outcome' - расходы"""

    if type == 'income':
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id,
            Transaction.type_operation == 'income')).all()
    elif type == 'outcome':
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id,
            Transaction.type_operation == 'income')).all()
    else:
        trs = db_sess.query(Transaction).filter(and_(
            date1 <= Transaction.date_time_operation <= date2, Transaction.user_id == user_id)
        ).all()

    return jsonify({'transactions': [item.to_dict(
        only=('id', 'sum_operation', 'type_operation', 'date_time_operation', 'message_operation',
              'pictures_str_operation', 'category_operation_id')
    )
        for item in trs]})


def get_transactions_with_category(user_id: int, category: str) -> jsonify:
    """Пусть возвращает список транзакций с заданной категорией за все время
    'all' = записи по всем категориям """

    if category == 'all':
        trs = db_sess.query(Transaction).filter(Transaction.user_id == user_id).all()
    else:
        category_id = db_sess.query(Category).filter(Category.name_category == category)
        trs = db_sess.query(Transaction).filter(and_(
            Transaction.user_id == user_id, Transaction.category_operation_id == category_id)).all()

    return jsonify({'transactions': [item.to_dict(
        only=('id', 'sum_operation', 'type_operation', 'date_time_operation', 'message_operation',
              'pictures_str_operation', 'category_operation_id')
    )
        for item in trs]})


def add_transaction(bill_id: str, type: str, sum: float, date: datetime, description: str, picture: str):
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

    bill = db_sess.query(Bill).get(bill_id)
    tr = Transaction()
    tr.bill_id = bill_id
    tr.type_operation = type
    tr.sum_operation = sum
    tr.date_time_operation = date
    tr.message_operation = description
    tr.pictures_str_operation = picture
    tr.user_id = bill.user_id
    db_sess.add(tr)
    db_sess.commit()


def delete_transaction(transaction_id: int):
    """
    Удаляет транзакции и меняет сумму счета
    :param session_id: session id
    :param transaction_id: айди транзакции
    """
