let lieu = document.getElementsByClassName('lieu');
let description = document.getElementsByClassName('description');
let objet = document.getElementsByClassName('objet');
let dsicover = document.getElementsByClassName('discover');
let un = document.getElementById('un');
let deux = document.getElementById('deux');
let trois = document.getElementById('trois');
let quatre = document.getElementById('quatre');
let cinq = document.getElementById('cinq');
let a = document.getElementsByClassName('a');
let b = document.getElementsByClassName('b');
let barre_de_progression = document.getElementsByClassName('barre_de_progression');
let numerotation = document.getElementsByClassName('numerotation');
let body = document.querySelector('body');
let img = document.querySelector('.img1');
let droite = document.querySelector('.droite');
let voiture = document.querySelector('#voiture');
let boite_deux = document.querySelector('#boite_deux');

let func = function(){
   body.style.background = 'url(../img/Mercedes1.jpg)' 
   body.style.backgroundColor = 'rgba(68, 114, 112, 0.836)';
   body.style.transition = 'all 1.5s ease';
   body.style.backgroundSize = 'cover';
   body.style.overflow = 'hiden';
   body.style.height = '100vh';
   img.style.animation = 'anim linear ';
   img.style.animationDuration = '10s';
   un.style.display = 'none';
   deux.style.display = 'inline-block';
   trois.style.display = 'inline-block';
   quatre.style.display = 'inline-block';
   cinq.style.display = 'inline-block';
}
let fonc = function(){
   body.style.background = 'url(../img/Mercedes2.jpg)'
   body.style.backgroundColor = 'rgba(124, 243, 203, 0.836)'
   body.style.transition = '1s';
   body.style.backgroundSize = 'cover';
   body.style.overflow = 'hiden';
   body.style.height = '100vh';
   deux.style.display = 'none';
   un.style.display = 'inline-block';
   trois.style.display = 'inline-block';
   quatre.style.display = 'inline-block';
   cinq.style.display = 'inline-block';
}
let fonct = function(){
   body.style.background = 'url(../img/Mercedes3.jpg)'
   body.style.backgroundColor = 'rgba(87, 165, 238, 0.705)'
   body.style.transition = '1s';
   body.style.backgroundSize = 'cover';
   body.style.overflow = 'hiden';
   body.style.height = '100vh';
   trois.style.display = 'none';
   deux.style.display = 'inline-block';
   un.style.display = 'inline-block';
   quatre.style.display = 'inline-block';
   cinq.style.display = 'inline-block';
}
let funct = function(){
   body.style.background = 'url(../img/Essaie2.jpg)'
   body.style.backgroundColor = 'rgba(87, 165, 238, 0.705)'
   body.style.transition = '1s';
   body.style.backgroundSize = 'cover';
   body.style.overflow = 'hiden';
   body.style.height = '100vh';
   quatre.style.display = 'none';
   trois.style.display = 'inline-block';
   un.style.display = 'inline-block';
   deux.style.display = 'inline-block';
   cinq.style.display = 'inline-block';
}
let fct = function(){
   body.style.background = 'url(../img/unknow.jpg)'
   body.style.backgroundColor = 'rgba(87, 165, 238, 0.705)'
   body.style.transition = '1s';
   body.style.backgroundSize = 'cover';
   body.style.overflow = 'hiden';
   body.style.height = '100vh';
   cinq.style.display = 'none';
   quatre.style.display = 'inline-block';
   un.style.display = 'inline-block';
   deux.style.display = 'inline-block';
   trois.style.display = 'inline-block';
}

un.addEventListener('click',func);
deux.addEventListener('click',fonc);
trois.addEventListener('click',fonct);
quatre.addEventListener('click', funct);
cinq.addEventListener('click', fct);
