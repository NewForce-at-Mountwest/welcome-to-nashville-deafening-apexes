// Fetch
fetch(`https://api.openbrewerydb.org/breweries?by_city=nashville`)
    // Then - clean JSON
    .then((breweries) => breweries.json())
    // Then - Use the info
    .then((parsedBreweries) => {
        parsedBreweries.forEach(element => {
            if(element.state === "Tennessee"){
                console.log(element);
            }
        });
    })