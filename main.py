from blueprints.predmeti.predmet import predmet_blueprint
from blueprints.studenti.student import student_blueprint
from flask import Flask
from database.db import mysql

app = Flask(__name__, static_url_path="")
app.config['MYSQL_DATABASE_USER'] = "root"
app.config['MYSQL_DATABASE_PASSWORD'] = 'Dusktilldawn.123'
app.config['MYSQL_DATABASE_DB'] = 'testovi'
app.config['MYSQL_DATABASE_SOCKET'] = None

mysql.init_app(app)


@app.route("/")
def home():
    return app.send_static_file('index.html')


app.register_blueprint(predmet_blueprint, url_prefix='/api')
app.register_blueprint(student_blueprint, url_prefix="/api")

if __name__ == "__main__":
    app.run('0.0.0.0', 5000, threaded=True, debug=True)
