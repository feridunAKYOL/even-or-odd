function evensHandler() {
	debugger;
	// write me!
	let ulElement = document.getElementById('selected');
	ulElement.innerHTML = '';
	let evens = strings.evens;
	for (let item of evens) {
		const liElement = document.createElement('li');
		liElement.textContent = item;
		ulElement.appendChild(liElement);
	}

	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'evens',
		strings: JSON.parse(JSON.stringify(strings))
	});
}
