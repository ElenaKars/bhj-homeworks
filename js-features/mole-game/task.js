const deadEl = document.getElementById("dead");
const lostEl = document.getElementById("lost");

function getHole(index){
  return document.getElementById(`hole${index}`);;
}

for (let index = 1; index < 10; index++){
	getHole(index).onclick = onHoleClick;
}

function onHoleClick(){
  if(this.className.includes('hole_has-mole')){
    deadEl.textContent = +deadEl.textContent + 1;
  }
  else{
    lostEl.textContent = +lostEl.textContent + 1;
  }
  if (+deadEl.textContent === 10 ){
    alert("Вы победили!");
    deadEl.textContent = 0;
    lostEl.textContent = 0;
  } 
  else if(+lostEl.textContent === 5){
    alert("Вы проиграли!");
    deadEl.textContent = 0;
    lostEl.textContent = 0;
  }
}