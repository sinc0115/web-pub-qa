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
