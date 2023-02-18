let listTests = [
	['Creator of JS - Brendan Eich?', true],
	['President of Ukraine - Joe Biden?', false],
	['Is the planet - round?', true],
];

let startTest;

while (startTest = confirm('Do you want to start the test?')) {
	let totalAnswer = 0;
	for (let i = 0; i < listTests.length; i++) {
		let testQuestion = listTests[i][0];
		let testAnswer = listTests[i][1];
		let userAnswer = confirm(testQuestion);

		if (userAnswer == testAnswer) {
			alert('Right');
			totalAnswer += 1;
		} else {
			alert('Wrong');
		}
	}
	alert('Correct answers: ' + totalAnswer)
}