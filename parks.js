document.querySelector("#park-button").addEventListener("click", function () {
  parkSearchValue = document.querySelector("#park-search").value;
//   document.querySelector("#park-search").value = "";
    // Clear past results button
    clearEntries()

    
    // Fetch parks api
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?`)
    .then(r => r.json())
    .then (parks => {
        // parks loop
        parks.forEach(element => {
        if (element.park_name.toLowerCase().includes
        // Filter for user input to match park name
        (parkSearchValue.toLowerCase()) === true) {
            document.querySelector("#search-results").innerHTML += parkPrinter(element.park_name, element.mapped_location_address)
        }})
    });
})


    // 