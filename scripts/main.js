var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/img2.jpg');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}

}

var myButton = document.querySelector('button');
myButton.onclick = function(){
	setUseName();
}

function setUseName(){
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUseName();
} else {
	var stordName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + stordName;
}
