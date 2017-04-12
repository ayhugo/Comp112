/**
 *Scrolls through images a-b using the arrow buttons
 *@author Hugo
 */

var images = new Array("imageA.jpg", "imageB.jpg", "imageC.jpg", "imageD.jpg");
var index = 0;

function goLeft() {
var img= document.getElementById("picture");
	
	if (index > 0){
		index = index - 1;
	} else {
		index = index + 3;
	}
	
	img.src = images[index];
}

function goRight() {
	var img= document.getElementById("picture");
	index = index + 1;
	if (index == images.length){
		index = 0;
	}
	
	img.src = images[index];

}

function setup(){
	var leftArrow = document.getElementById("leftArrow");
	var rightArrow = document.getElementById("rightArrow");
	
	leftArrow.onclick = goLeft;
	rightArrow.onclick = goRight;
}

if (document.getElementById) {
	window.onload = setup;
}