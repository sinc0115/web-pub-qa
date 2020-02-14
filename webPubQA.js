// Grabs the body element
var text = document.body.textContent
console.log(text)

// Finds word in text content
var $makeItBlue = text.match(/lorem/g)
console.log('Heres your lorems: ' + $makeItBlue)


// Highlights all instances of 'lorem'
//// BROKEN captures '&' in HTML as well, breaking page
highlight();
function highlight(){
    if (document.readyState === "complete") {
        document.body.innerHTML = document.body.innerHTML.replace(/\&amp;/g, '<span class="highlight">&</span>');
    } else {
        setTimeout('highlight();', 500)
    }
}



// Finds all list elements
const $ulList = document.querySelectorAll('ul')
const $olList = document.querySelectorAll('ol')
const $dlList = document.querySelectorAll('dl')

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



// To display number of "lorems" on page, in popup
/// Needs to be connected to popup, only displays in console right now
var $loremCount = document.querySelector('.lorem-count')
// var $loremCount.textContent = document.querySelector('.lorem-count')

$loremCount = $makeItBlue.length
console.log('Lorem Count: ' + $loremCount)
