const envoyerNote = document.getElementById("note");
const nouvelleNote = document.getElementById("nouvelle-note");
const noteSur = document.getElementById("note-sur");
const divNote = document.getElementById("add-note");

// Initialise la connexion socketIO
const socket = io();

/**
 * Ajoute une note a la page HTML
 * @param {note obtenue} note 
 * @param {Sur combien est la note} sur 
 */
function addNote(note, sur){
    const addNote = document.createElement('p');
    addNote.textContent = note + '/' + sur;

    divNote.append(addNote)
}

//écoute la réponse du formulaire d'envoie des messages
envoyerNote.addEventListener('submit', function(event){

    //empèche le comportement par défaut de l'évènement: rafraichir la page
    event.preventDefault();

    //Récupère la valeur de la note et sur combien elle est
    const note = [nouvelleNote.value, noteSur.value];

    // Envoie de la note sur le serveur
    socket.emit('nouvelle-note', note);

    //vide le formulaire
    nouvelleNote.value = '';
    noteSur.value = '';
})