from app import app, db

with app.app.app_context():
    db.create_all()
