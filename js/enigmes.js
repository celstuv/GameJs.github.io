var titreh1 = document.querySelector('h1');
titreh1.textContent = "1 - ENIGMES";

var para = document.createElement('p');
para.id = "instructions";
para.style.marginTop = "10px";
//para.style.display = "none";
para.textContent ="Tentez de découvrir les réponses aux enigmes suivantes. Mettre le mot sans articles (le, la , un, etc)";
document.querySelector('h1').appendChild(para);

var question1 = document.getElementById('q1');
var question2 = document.getElementById('q2');
var question3 = document.getElementById('q3');
var divElt = document.getElementById('bravo');

var form1 = document.getElementById('devinette1');
var form2 = document.getElementById('devinette2');
var form3 = document.getElementById('devinette3');


document.getElementById("devinette2").style.display="none";
document.getElementById("devinette3").style.display="none";
document.getElementById("bravo").style.display="none";

document.getElementById('bravo').style.alignItems = "center";

var score = 0;

form1.addEventListener("submit", function (e) {
    var questionElt = form1.elements.q1.value;
    //console.log(questionElt);
    switch (questionElt) {
    case "avenir":
        //alert("Bravo !! Vous avez trouvé la bonne réponse");
        document.getElementById('aideReponse').textContent = "Bravo ! Vous avez trouvé la bonne réponse";
        document.getElementById("devinette2").style.display="block";
        document.getElementById("devinette3").style.display="none";
        document.getElementById("bravo").style.display="none";
        score++;
        console.log(score);
        break;
    default:
        document.getElementById('aideReponse').textContent = "Vous n'avez pas trouvé la bonne réponse :()";
        document.getElementById("devinette2").style.display="none";
        document.getElementById("devinette3").style.display="none";
        document.getElementById("bravo").style.display="none";
    }
    e.preventDefault(); // Annulation de l'envoi des données
});


form2.addEventListener("submit", function (e) {
    var questionElt2 = form2.elements.q2.value;
    //console.log(questionElt2);
    switch (questionElt2) {
    case "charbon":
        document.getElementById('aideReponse1').textContent = "Bravo ! Vous avez trouvé la bonne réponse";
        question1.value = "avenir";
        document.getElementById("devinette3").style.display="block";
        document.getElementById("bravo").style.display="none";
        score++;
        console.log(score);
        break;
    default:
        document.getElementById('aideReponse1').textContent = "Vous n'avez pas trouvé la bonne réponse";
        question1.value = "avenir";
        document.getElementById("devinette3").style.display="none";
        document.getElementById("bravo").style.display="none";
    }
    e.preventDefault(); // Annulation de l'envoi des données
});

//METTRE UN COMPTEUR DE REPONSE

form3.addEventListener("submit", function (e) {
    var questionElt3 = form3.elements.q3.value;
    //console.log(questionElt2);
    switch (questionElt3) {
    case "errreur":
        document.getElementById('aideReponse2').textContent = "Bravo ! Vous avez trouvé la bonne réponse";
        question1.value = "avenir";
        question2.value = "charbon";
        //document.getElementById("bravo").style.display="block";
        score++;
        console.log(score);
        break;
    default:
        document.getElementById('aideReponse2').textContent = "Vous n'avez pas trouvé la bonne réponse";
        question1.value = "avenir";
        question2.value = "charbon";
        document.getElementById("devinette3").style.display="none";
        document.getElementById("bravo").style.display="none";
    }
      e.preventDefault(); // Annulation de l'envoi des données
      if (score == 3) {
        document.getElementById("bravo").style.display="block";
        document.getElementById('score').textContent = "Vous avez obtenu : " + score + " points";
    }
});



//METTRE UN COMPTEUR DE REPONSE
