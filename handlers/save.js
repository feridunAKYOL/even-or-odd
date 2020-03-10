function saveHandler() {
	debugger;
	// write me!
	let input = document.getElementById('input').value;

	if (strings.evens.includes(input) || strings.odds.includes(input) || strings.NaNy.includes(input)) {
		return;
	}
	if (input === '') {
		return;
	}
	if (isNaN(input) === true) {
		strings.NaNy.push(input);
	} else if (Number(input) % 2 === 1) {
		strings.odds.push(input);
	} else {
		strings.evens.push(input);
	}

	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'save',
		newInput,
		strings: JSON.parse(JSON.stringify(strings))
	});
}
