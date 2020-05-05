// Declaring a variable to store user input
let breweryUserInput = '';

// Creating a function to be called inside the event listener for the fetch
function fetchBreweries() {
	// Fetch
	fetch(`https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=nashville`)
		// Then - clean JSON
		.then((breweries) => breweries.json())
		// Then - Use the info
		.then((parsedBreweries) => {
			parsedBreweries.forEach((element) => {
				if (breweryUserInput != '') {
					if (element.name.toLowerCase().includes(breweryUserInput.toLowerCase())) {
						//Checking for state of TN and user search value && lower casing everything for the compare
						document.querySelector(
							`#search-results`
						).innerHTML += `<h3>${element.name}</h3><p>${element.street}</p> <p>Phone: ${element.phone}</p><p><a href="${element.website_url}" target="_blank">${element.website_url}</a></p>`;
					} else {
						console.log('testing');
					}
				} else if (element.name != 'Brewery In Planning - Nashville') {
					//Filtering removing in planning results as they are not yet available
					document.querySelector(
						`#search-results`
					).innerHTML += `<h3>${element.name}</h3><p>${element.street}</p> <p>Phone: ${element.phone}</p><p><a href="${element.website_url}" target="_blank">${element.website_url}</a></p>`;
				}
			});
		});
}

// Creating a function to check to see if the user entered anythin in the input box. If not then I want it to show all breweries in Nashville
function checkBreweryInput() {
	let breweryInput = document.querySelector(`#brewery-search`).value;
	if (breweryInput != '') {
		//Checking that input is not blank
		breweryUserInput = breweryInput;
	}
}

// Testing a function to clear the variable
function clearBreweryVar() {
	breweryUserInput = '';
	document.querySelector(`#search-results`).innerHTML = ''; //Clearing the inner HTML when the button is pressedd
}

// Creating a function to combine the other functions in use for the click event
function breweryClickEvent() {
	clearBreweryVar();
	checkBreweryInput();
	fetchBreweries();
	document.querySelector(`#brewery-search`).value = ''; //Cearing the value from the input field when the users request has been ran
}

// Creating event listener for the brewery-button
document.querySelector(`#brewery-button`).addEventListener('click', breweryClickEvent);
