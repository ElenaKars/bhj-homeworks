const hole = getHole(index);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

hole.onclick = checkHole;

function checkHole () {
	for (let i = 1; i < 10, i++){
		getHole[i].onclick;
	}
	if(getHole[i].classList.contains('hole_has-mole') = true){
		dead.textContent++;
		}
		else {
		lost.textContent++;
		}
	}

getHole = index => document.getElementById(`hole${index}`);

// deactivateHole = index =>
//       getHole( index ).className = 'hole',
//     activateHole = index =>
//       getHole( index ).className = 'hole hole_has-mole'