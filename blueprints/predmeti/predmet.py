import flask
from flask.blueprints import Blueprint
from database.db import mysql


predmet_blueprint = Blueprint('predmet_blueprint', __name__)

# APPLICATION PROGRAMMING INTERFACE
@predmet_blueprint.route("/dobaviPredmete", methods=['GET'])
def dobavi_predmete():
    cursor = mysql.get_db().cursor()
    cursor.execute('SELECT * FROM predmet')
    svi_predmeti = cursor.fetchall()
    return flask.jsonify(svi_predmeti), 200


@predmet_blueprint.route("/dobaviJedanPredmet/<int:id_predmeta>", methods=['GET'])
def dobavi_jedan_predmet(id_predmeta):
    cursor = mysql.get_db().cursor()
    cursor.execute('SELECT * FROM predmet WHERE id= %s', (id_predmeta))
    jedan_predmet = cursor.fetchone()
    return flask.jsonify(jedan_predmet), 200

#   TODO Srediti brisanje foreign keyova.
@predmet_blueprint.route("/obrisiJedanPredmet/<int:id_predmeta>", methods=['DELETE'])
def obrisi_jedan_predmet(id_predmeta):
    db = mysql.get_db()
    cursor = mysql.get_db().cursor()
    cursor.execute('DELETE FROM predmet WHERE id= %s', (id_predmeta))
    db.commit()
    return flask.jsonify({'status': 'ok'}), 204


@predmet_blueprint.route("/updatePredmet/<int:id_predmeta>", methods=['PUT'])
def izmeni_jedan_predmet(id_predmeta):
    data = flask.request.get_json()
    data["id"] = id_predmeta
    print(data)
    db = mysql.get_db()
    cursor = mysql.get_db().cursor()
    cursor.execute(
        "UPDATE predmet SET naziv= %(naziv)s, skracenica= %(skracenica)s WHERE id=%(id)s", data)
    db.commit()
    return flask.jsonify({'status': 'ok'}), 200


@predmet_blueprint.route("/dodajPredmet", methods=["POST"])
def dodaj_predmet():
    data = flask.request.json
    db = mysql.get_db()
    cursor = db.cursor()
    print(flask.request.json)
    cursor.execute(
        "INSERT INTO predmet(naziv, skracenica) VALUES(%(naziv)s, %(skracenica)s)", data)
    db.commit()
    return flask.jsonify({"status": "Resource created."}), 204

