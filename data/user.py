from init_bd import get_connection

db = get_connection()


class User(db.Model):
    username = db.Column(db.String, primary_key=True)
    last_name_user = db.Column(db.String(20), unique=False)
    first_name_user = db.Column(db.String(20), unique=False)
    phone_number = db.Column(db.String(11), unique=True)
    password = db.Column(db.String(200), unique=False)
    email = db.Column(db.String(50), unique=True)
    family_groups_id = db.Column(db.Integer, unique=False)
    session_id = db.Column(db.String(30), unique=True)


def as_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}
