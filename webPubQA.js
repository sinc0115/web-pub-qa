// Grabs the body element
const $textyText = document.querySelector('body')
console.log($textyText)


//Grabs the text content of the body
const $text = $textyText.textContent
console.log($text)

// Finds word in text content
var $makeItBlue = $text.match(/lorem/g)
console.log($makeItBlue)


// Find a way to do this in JS
//// Add highlight
$makeItBlue.innerHTML = '<span style="background-color: blue">' + $makeItBlue + '</span>'
//


// Finds all list elements
$ulList = document.querySelectorAll('ul')
$olList = document.querySelectorAll('ol')
$dlList = document.querySelectorAll('dl')

// Gives them a pink border
for ($ul of $ulList) {
	$ul.style.border = "5px solid pink";
}
for ($ol of $olList) {
	$ol.style.border = "5px solid pink";
}
for ($dl of $dlList) {
	$dl.style.border = "5px solid pink";
}
