const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
image.onclick = afterClick; 
// function() {
	// count();
	// changeSizes();
// };
function count() {
	counter.textContent++;
}
function changeSizes() {
	if(counter.textContent % 2 === 0){
		image.width = 300;
	}
	else {
		image.width = 200;
	}
};

function afterClick(){
	count();
	changeSizes();
}