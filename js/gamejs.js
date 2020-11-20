const canvasJeux = document.getElementById('canvas1');
const ctx2 = canvasJeux.getContext('2d');
canvasJeux.width = 800;
canvasJeux.height = 500;
console.log(canvas1);

const keys = [];

//Définir le sprite
/*chewie = (40,72), hansolo = (32,48), ryuk = (48,64)*/
const player = {
  x : 200,
  y : 300,
  width : 40, /*longeur sprite / nombre d'image*/
  height : 72, /*hauteur sprite divisé par nombre image*/
  frameX : 0,
  frameY : 0,/*dans le sprite, il s'agit de l'image dotn els coordonnée sont (x=0,y=1)*/
  speed : 9,
  moving : false
};

const playerSprite = new Image();
playerSprite.src = "images/chewie.png";
const background =  new Image();
background.src = "images/background.png";

// const playerSprite = document.getElementById('chewie');
// playerSprite.src = "images/chewie.png";

//Dessiner Chewie
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx2.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
  player.moving = true;
});
window.addEventListener("keyup", function(e){
  delete keys[e.keyCode];
  player.moving = false;
});

//Déplacement de Chewie
function movePlayer() {
  if(keys[38/*keyCode ArrowUp*/] && player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3;
    player.moving = true;
  }
  if(keys[37/*keyCode ArrowLeft*/] && player.x > 0) {
    player.x -= player.speed;
    player.frameY = 1;
    player.moving = true;
  }
  if(keys[40/*keyCode ArrowDown*/] && player.y < canvasJeux.height - player.height) {
    player.y += player.speed;
    player.frameY = 0;
    player.moving = true;
  }
  if(keys[39/*keyCode ArrowRight*/] && player.x < canvasJeux.width - player.width) {
    player.x += player.speed;
    player.frameY = 2;
    player.moving = true;
  }
}

//Animation des pas de Chewie
function handlePlayerFrame() {
  if(player.frameX < 3 && player.moving){
    player.frameX++
  } else {
    player.frameX = 0;
    }
}


//Dessiner le décor et Animer le personnage n°1
// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//   drawSprite(playerSprite, player.width * player.frameX/*1ere image haut gauche du sprite*/, player.height * player.frameY /*2eme image à partir du haut-bas gauche*/,
//     player.width, player.height, player.x/*coordonnées X*/, player.y /*coordonnées Y*/, player.width, player.height);
//   movePlayer();
//   handlePlayerFrame();
//   requestAnimationFrame(animate);
// }
// animate();

//Animation déplacement de Chewie n° 2
setInterval(function() {
  ctx2.clearRect(0, 0, canvasJeux.width, canvasJeux.height);
  ctx2.drawImage(background, 0, 0, canvasJeux.width, canvasJeux.height);
  drawSprite(playerSprite, player.width * player.frameX/*1ere image haut gauche du sprite*/, player.height * player.frameY /*2eme image à partir du haut-bas gauche*/,
    player.width, player.height, player.x/*coordonnées X*/, player.y /*coordonnées Y*/, player.width, player.height);
  movePlayer();
  handlePlayerFrame();
},50);

//Animation déplacement de Chewie n° 3
// let fps, fpsInterval, startTime, now, then, elapsed;
//
// function startAnimating(fps) {
//   fpsInterval = 1000/fps;
//   then = Date.now();
//   startTime = then;
//   animate();
// }
//
// function animate() {
//   requestAnimationFrame(animate);
//   now = Date.now();
//   elapsed = now - then;
//   if(elapsed > fpsInterval) {
//     then = now - (elapsed % fpsInterval);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     drawSprite(playerSprite, player.width * player.frameX/*1ere image haut gauche du sprite*/, player.height * player.frameY /*2eme image à partir du haut-bas gauche*/,
//       player.width, player.height, player.x/*coordonnées X*/, player.y /*coordonnées Y*/, player.width, player.height);
//     movePlayer();
//     handlePlayerFrame();
//   }
// }
// startAnimating(30);
