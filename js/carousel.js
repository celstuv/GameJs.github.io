var questions = [
  {
    titre : "Question n°1 :",
    question : "Je suis toujours devant tout le monde, mais personne ne peut me voir. Qui suis-je ?",
    solution :"avenir"
  },
  {
    titre : "Question n°2 : ",
    question : "je suis noir, je deviens rouge, et je finis blanc...",
    solution : "charbon"
  },
  {
    titre : "Question n°3 : ",
    question : "Trouvez l'errreur : 1 2 3 4 5 6 7 8 9",
    solution : "erreur"
  }
];

var titre1 = document.createElement('h2');
titre1.textContent = "Trouvez les réponses aux devinettes";
document.querySelector('h1').appendChild(titre1);
titre1.style.textAlign = "center";

var listElt = document.createElement('ul'); // création ul
listElt.id = "liste";



questions.forEach(function(question) {
  var titreElt = document.createElement('li');
  titreElt.id = "titre";
  titreElt.textContent = question.titre;
  listElt.appendChild(titreElt); //titre rattaché à ul

  var questionElt = document.createElement("p");
  questionElt.textContent = question.question;
  titreElt.appendChild(questionElt); //titre rattaché à ul

  var inputTitreElt = document.createElement('input');
  inputTitreElt.getAttribute('value');
  questionElt.appendChild(inputTitreElt);


  //document.getElementById('question').appendChild(strongElt);
});

document.querySelector('h2').appendChild(listElt); // ul rattaché à h2
