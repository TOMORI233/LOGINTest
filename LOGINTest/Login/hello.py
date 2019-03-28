from flask import Flask, request

app = Flask(__name__)

@app.route("/login")
def hello():
    username = request.args.get('username', 'username')
    password = request.args.get('password', 'password')
    if username == 'admin' and password == 'admin':
        return 'Success'
    else:
        return 'Failed'


if __name__ == '__main__':
    app.debug = False
    app.run()