erase=document.getElementById('erase');
tablmg=document.getElementById('tablmg');
url=["http://www.animalstalk2me.com/images/PurpleSquare-1.gif","https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red.svg/2000px-Red.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Solid_yellow.svg/768px-Solid_yellow.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Green_square.svg/2000px-Green_square.svg.png"]
for (var i = 0; i < url.length; i++) {
  tablmg.innerHTML+="<li class='appear'><img src=' "+url[i]+" '></a></li>";
}
for (var i = 0; i < tablmg.children.length; i++) {
  console.log(tablmg.children[i]);
}
erase.onclick=function erase(){
  for (var i = tablmg.children.length-1; i >0 ; i--) {
    if(!tablmg.children[i].classList.contains('erase')){
      tablmg.children[i].classList.remove('appear');
      tablmg.children[i].classList.add('erase');
      break;
    }
  }
}
