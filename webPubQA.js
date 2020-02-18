// Variables
const $ulList = document.querySelectorAll('ul')
const $olList = document.querySelectorAll('ol')
const $dlList = document.querySelectorAll('dl')

// Finds all list elements
function findLists($ulList, $olList, $dlList) {

	// Gives them a pink border
	for (const $ul of $ulList) {
		$ul.style.border = "5px solid pink";
	}
	for (const $ol of $olList) {
		$ol.style.border = "5px solid pink";
	}
	for (const $dl of $dlList) {
		$dl.style.border = "5px solid hotpink";
	}
}

// Records length of all lists
var $ulListLength = $ulList.length
console.log('ul Lists: ' + $ulListLength)
var $olListLength = $olList.length
console.log('ol Lists: ' + $olListLength)
var $dlListLength = $dlList.length
console.log('dl Lists: ' + $dlListLength)

// The total number of lists on the page
$totalListsLength = $ulListLength + $olListLength + $dlListLength
console.log('Total lists: ' + $totalListsLength)
