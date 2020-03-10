function evensHandler() {
	debugger;
	// write me!
	let TopDiv = document.getElementById('selected');
	let ulElement = document.createElement('ul');
	TopDiv.innerHTML = '';
	let evens = strings.evens;
	for (let item of evens) {
		const liElement = document.createElement('li');
		liElement.textContent = item;
		ulElement.appendChild(liElement);
	}
	let myDiv = document.createElement('div');
	let myH4 = document.createElement('h4');
	myH4.textContent = 'evens';
	myDiv.appendChild(myH4);
	myDiv.appendChild(ulElement);
	TopDiv.appendChild(myDiv);
	// log user interaction: handler name, user input, new state
	log.push({
		handler: 'evens',
		strings: JSON.parse(JSON.stringify(strings))
	});
}
