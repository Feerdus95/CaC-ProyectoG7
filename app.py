from flask import Flask, jsonify , request, render_template
import mysql.connector
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

headers = ['ID', 'Nombre', 'Apellido', 'e-mail', 'Desde', 'Hasta', 'Actividad', 'Monto', 'Cant. Personas', 'Comentarios', 'Acciones']

@app.route('/ver_actividad', methods=['GET'] )
def ver_actividad():
    db = mysql.connector.connect(
        host='Feerdus95.mysql.pythonanywhere-services.com',
        user='Feerdus95',
        password='17121995y',
        database='Feerdus95$cac_g7'
    )
    
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM turismo")
    
    reservas = cursor.fetchall()
    
    cursor.close()
    return jsonify(reservas)

@app.route('/eliminar_actividad/<int:id>', methods=['DELETE'] )
def eliminar_actividad(id):
    db = mysql.connector.connect(
        host='Feerdus95.mysql.pythonanywhere-services.com',
        user='Feerdus95',
        password='17121995y',
        database='Feerdus95$cac_g7'
    )
    
    cursor = db.cursor()
    cursor.execute("DELETE FROM turismo WHERE id = %s",(id,))
    db.commit() 
    cursor.close()
    return jsonify({"mensaje":"ELIMINADO!"})

@app.route('/agregar_actividad', methods=['POST'] )
def agregar_actividad():
    info = request.json
    db = mysql.connector.connect(
        host='Feerdus95.mysql.pythonanywhere-services.com',
        user='Feerdus95',
        password='17121995y',
        database='Feerdus95$cac_g7'
    )
    
    fecha_desde = datetime.strptime(info['fecha_desde'], '%Y-%m-%d').date()
    fecha_hasta = datetime.strptime(info['fecha_hasta'], '%Y-%m-%d').date()
    
    cursor = db.cursor()
    cursor.execute("INSERT INTO turismo (nombre, apellido, email, fecha_desde, fecha_hasta, actividad, monto, cant_personas, comentarios) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)", (info["nombre"],info["apellido"],info["email"],fecha_desde,fecha_hasta,info["actividad"],info["monto"],info["cant_personas"],info["comentarios"]))
    db.commit() 
    cursor.close()
    return jsonify({"mensaje":"AGREGADO CON EXITO!"})

@app.route('/actualizar_actividad/<int:id>', methods=['PUT'] )
def actualizar_actividad(id):
    info = request.json
    db = mysql.connector.connect(
        host='Feerdus95.mysql.pythonanywhere-services.com',
        user='Feerdus95',
        password='17121995y',
        database='Feerdus95$cac_g7'
    )
    
    fecha_desde = str(datetime.strptime(info['fecha_desde'], '%Y-%m-%d').date())
    fecha_hasta = str(datetime.strptime(info['fecha_hasta'], '%Y-%m-%d').date())
    
    cursor = db.cursor()
    cursor.execute(
        "UPDATE turismo SET "
        "nombre = %s, apellido = %s, email = %s, fecha_desde = %s, fecha_hasta = %s, actividad = %s, monto = %s, cant_personas = %s, comentarios = %s "
        "WHERE id = %s",
        (info["nombre"], info["apellido"], info["email"], info[fecha_desde], info[fecha_hasta], info["actividad"], info["monto"], info["cant_personas"], info["comentarios"], id)
    )
    db.commit() 
    cursor.close()
    return jsonify({"mensaje": "ACTUALIZADO CON ÉXITO!"})

@app.route('/')
def index():
    return render_template('index.html', headers=headers)

if __name__ == '__main__':
    app.run(debug=True)