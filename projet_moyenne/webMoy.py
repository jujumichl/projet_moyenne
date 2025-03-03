from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from utils import *
# Crée un instance de Flask nommée app
app = Flask(__name__)
# Crée une instance SocketIO
socketio = SocketIO(app)
# Une requête  à l'url / va appeler cette fonction
@app.route("/")
def acceuil():
    # Renvoie le contenu du fichier templates/index.html
    return render_template('index.php')