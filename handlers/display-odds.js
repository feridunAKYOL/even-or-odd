function oddsHandler() {
	debugger;
	// write me!
	let ulElement = document.getElementById('selected');
	ulElement.innerHTML = '';
	let odds = strings.odds;
	for (let item of odds) {
		const liElement = document.createElement('li');
		liElement.textContent = item;
		ulElement.appendChild(liElement);
	}
	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'odds',
		strings: JSON.parse(JSON.stringify(strings))
	});
}
