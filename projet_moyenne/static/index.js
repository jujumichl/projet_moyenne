const envoyerNote = document.getElementById("note");
const nouvelleNote = document.getElementById("nouvelle-note");
const noteSur = document.getElementById("note-sur");
const divNote = document.getElementById("add-note");
//écoute la réponse du formulaire d'envoie des messages
envoyerNote.addEventListener('submit', function(event){
    //empèche le comportement par défaut de l'évènement: rafraichir la page
    event.preventDefault();
    var note = nouvelleNote.value;
    var sur = noteSur.value;
    
    const addNote = document.createElement('p');
    addNote.textContent = note + '/' + sur;

    divNote.append(addNote)


    //vide le formulaire
    nouvelleNote.value = '';
    noteSur.value = '';
});
function runPy() {
    $.ajax({
        type:'POST',
        url:'test.py',
        success: function(data) {                                                     
            console.log(data);
        }
    });
}
runPy()