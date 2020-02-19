pinkIt = false

// Variables
const $ulList = document.querySelectorAll('ul')
const $olList = document.querySelectorAll('ol')
const $dlList = document.querySelectorAll('dl')

function launchExt() {
	if (pinkIt == false) {
		// Gives them a pink border
		for (let $ul of $ulList) {
			$ul.style.border = "5px solid pink"
		}
		for (let $ol of $olList) {
			$ol.style.border = "5px solid pink"
		}
		for (let $dl of $dlList) {
			$dl.style.border = "5px solid hotpink"
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
		return $totalListsLength
		
		//Resets values
		pinkIt = true
		console.log('Please work!')
				
	} else {
		// Removes border
		for (let $ul of $ulList) {
			$ul.style.border = none
		}
		for (let $ol of $olList) {
			$ol.style.border = none
		}
		for (let $dl of $dlList) {
			$dl.style.border = none
		}

		// Removes length of all lists
		var $ulListLength = 0
		var $olListLength = 0
		var $dlListLength = 0

		// The total number of lists on the page
		$totalListsLength = 0
		return $totalListsLength
		
		// Resets values 
		pinkIt = false
		console.log('Big nope.')
		}
	}
	
browser.runtime.onConnect.addListener(launchExt)


