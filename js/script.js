console.log('Arrays class works');

/*
* Array is a data doctype
* Arrays are used to strore many relevant information under the same name
*/

var names = ['Lucy' , 'Peter' , 'Antony' , 'Yuli', 'Julie' , 'Chelsea' , 'Candy' , 'Mohammed' , 'Rico'];

var age = [12, 25, 30, 24, 43, 23, 90, 40, 550];
// variables can not be stored as negatives. So if you want to give a variable the lowest possible figure, it will be a 0
var highestAge = 0;

document.getElementById('result').innerHTML = names [3];

document.getElementById('result').innerHTML += ', ' + names [1];

document.getElementById('result').innerHTML += ', ' + names [2] + ' and ' + names [0];

// Calling the 'names' variable results in all of the names being shown
document.getElementById('result').innerHTML += '<br>' + names;

// Loop to repeat a certain number of times until it finds 'Peter' 
for (var i=0; i<8; i++) {
	// Searching for Peter
	if (names[i] === 'Peter') {
		document.getElementById('namesLoop').innerHTML = 'Yes, ' + names[i] + ' is found in the list' ;
		break;
	} else {
	document.getElementById('namesLoop').innerHTML = 'No ' + [i] + ' ' +  'is not found';
	}
}


for (var i=0; i<9; i++) {
	if(highestAge < age[i]) {
		highestAge = age[i];
		console.log(i);
		var listIndex = i;
	}
	document.getElementById('ageLoop').innerHTML = highestAge + ' years old';
}

for (var j=0; j<9; j++) {
	if (j === listIndex) {
		document.getElementById('ageLoop').innerHTML += ' ' + names[j];
	}
}

switch (listIndex) {
	case 0:
	document.getElementById('ageLoop').innerHTML += '<br>' + 'Lucy is the oldest';
	break;

	case 1:
	document.getElementById('ageLoop').innerHTML += '<br>' + 'Peter is the oldest';
	break;

	case 2:
	document.getElementById('ageLoop').innerHTML += '<br>' + 'Antony is the oldest';
	break;

	case 3:
	document.getElementById('ageLoop').innerHTML += '<br>' + 'Yuli is the oldest';
	break;
}