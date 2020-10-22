var divElt = document.getElementsByTagName('carousel'); //sélectionner div
var imageElt = document.createElement('img'); //créer la balise img
imageElt.id = 'imgCarousel'; //donner l'id
imageElt.src = "images/3.jpg";
imageElt.style.width = "100%";

document.getElementById("test").appendChild(imageElt); //rattacher div et img


// function carousel() {
//   //document.getElementById("test").appendChild(imageElt); //rattacher div et img
//   var imageElt = document.getElementById('imgCarousel').getAttribute('src'); //ajouter src
// //console.log(imageElt);
//   switch(imageElt) {
//     case 'images/1.jpg':
//     document.getElementById('imgCarousel').src = 'images/2.jpg';
//     break;
//
//     case 'images/2.jpg':
//     document.getElementById('imgCarousel').src = 'images/3.jpg';
//     break;
//
//     case 'images/3.jpg':
//     document.getElementById('imgCarousel').src = 'images/4.jpg';
//     break;
//
//     case 'images/4.jpg':
//     document.getElementById('imgCarousel').src = 'images/1.jpg';
//     break;
//   }
//
// }
