function nanyHandler() {
	debugger;
	// write me!
	let ulElement = document.getElementById('selected');
	ulElement.innerHTML = '';
	let NaNy = strings.NaNy;
	for (let item of NaNy) {
		const liElement = document.createElement('li');
		liElement.textContent = item;
		ulElement.appendChild(liElement);
	}

	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'NaNy',
		strings: JSON.parse(JSON.stringify(strings))
	});
}
