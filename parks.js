document.querySelector("#park-button").addEventListener("click", function () {
  parkSearchValue = document.querySelector("#park-search").value;
  document.querySelector("#park-search").value = "";

    
    // Fetch parks api
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?`)
    .then(r => r.json())
    .then (parks => {
        // Clear past results button
        clearEntries()
        // Parks loop
        parks.forEach(element => {
        if (element.park_name.includes(parkSearchValue) === true) {
            document.querySelector("#search-results").innerHTML += parkPrinter(element.park_name, element.mapped_location_address)
        } 
        // else if (element.park_name.includes(parkSearchValue) !== true){
        //     document.querySelector("#search-results").innerHTML += `<p>No Results Found</p>`
        // }
    })
            
        });
    })
