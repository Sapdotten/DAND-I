


@app.route("/register", methods=('POST',))
def register():
    data = request.get_json()
    hash = generate_password_hash(data['password'], salt_length=50)
    u = Users(email=data['email'], password=hash)
    db.session.add(u)
    db.session.flush()
    resp = make_response(flask.jsonify(u.as_dict()), 200)
    return resp


@app.route('/', methods=['GET', 'POST'])
def index():
    print('OKAY')
    return 'Hello world'
