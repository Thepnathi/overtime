from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hellow, World'


@app.route('/graph')
def graph():
    return 'graph object'