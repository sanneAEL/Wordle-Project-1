var col = 1;
var row = 1;
var word = 'SUPER';
var wordArray = word.split('');
let guessedWord = '';
let guessedArray = [];

function keypress(whichKey) {
	if (col == 6 || row == 7) return;
	if (document.getElementById('key' + whichKey).class == 'greyKey') return;
	document.getElementById('word' + row + col++).innerHTML = whichKey;
}

function enterpress() {
	if (col != 6 || row == 7) return;
	// let guessedWord = '';
	// let guessedArray = [];
	for (let i = 1; i <= 5; i++) {
		let letter = document.getElementById('word' + row + i).innerHTML;
		guessedArray[i - 1] = letter;
		guessedWord += letter;
	}
	if (guessedWord == word) {
		document.getElementById('h1').innerHTML = 'You Won!';
		row = 7;
		return;
	}
	if (row == 6) {
		document.getElementById('h1').innerHTML = 'You lose!';
		row = 7;
		return;
	}
	for (let i = 0; i < 5; i++) {
		if (guessedArray[i] == wordArray[i]) {
			document.getElementById('key' + guessedArray[i]).class = 'greenKey';
			document.getElementById('word' + row + (i + 1)).style.color = 'white';
			document.getElementById('word' + row + (i + 1)).style.backgroundColor =
				'green';
		} else if (wordArray.includes(guessedArray[i])) {
			document.getElementById('key' + guessedArray[i]).class = 'yellowKey';
			document.getElementById('word' + row + (i + 1)).style.color = 'white';
			document.getElementById('word' + row + (i + 1)).style.backgroundColor =
				'yellow';
		} else {
			document.getElementById('key' + guessedArray[i]).class = 'greyKey';
		}
	}
	row++;
	col = 1;
}

function deletepress() {
	if (col == 1) {
		return;
	}
	col--;
	document.getElementById('word' + row + col).innerHTML = ' ';
}
