from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    # index.html をレンダリングする
    return render_template('index.html')

if __name__ == '__main__':
    # 作成したappを起動
    # ここでflaskの起動が始まる
    app.run()
