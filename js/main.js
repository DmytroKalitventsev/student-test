let tests = [
	'Creator of JS - Brendan Eich?', true,
	'President of Ukraine - Joe Biden?', false,
	'Is the planet - round?', true,
];

let startTest;

while (startTest = confirm('Do you want to start the test?')) {
	let total = 0;
	for (let i = 0; i < tests.length; i += 2) {
		let testQuestion = tests[i];
		let testAnswer = tests[i + 1];
		let userAnswer = confirm(testQuestion);

		if (userAnswer == true && testAnswer == true || userAnswer == false && testAnswer == false) {
			alert('Right');
			total += 1;
		} else {
			alert('Wrong');
		}
	}
	alert('Correct answers: ' + total)
}
