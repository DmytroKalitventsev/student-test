let tests = [
	{qst: 'Creator of JS - Brendan Eich?', ans: true},
	{qst: 'President of Ukraine - Joe Biden?', ans: false},
	{qst: 'Is the planet - round?', ans: true},
];

let startTest;

while (startTest = confirm('Do you want to start the test?')) {
	let totalAnswer = 0;
	for (let key in tests) {
		let testQuestion = tests[key].qst;
		let testAnswer = tests[key].ans;
		let userAnswer = confirm(testQuestion);

		if (userAnswer == testAnswer) {
			alert('Right');
			totalAnswer++;
		} else {
			alert('Wrong');
		}
	}
	alert('Correct answers: ' + totalAnswer)
}