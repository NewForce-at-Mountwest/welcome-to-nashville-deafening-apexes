// document.querySelector("#park-search").addEventListener("click", function(){
//     document.querySelector("#search-results").innerHTML = " "
// })

document.querySelector("#park-button").addEventListener("click", function () {
  parkSearchValue = document.querySelector("#park-search").value;
  document.querySelector("#park-search").value = "";

    
    // Fetch parks api
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?park_name=${parkSearchValue}`)
    .then(r => r.json())
    .then (parks => {
        parks.forEach(element => {
        // if (parkSearchValue.toLowerCase().includes(element.park_name)) {
            
            // parkSearchValue = element.park_name

            document.querySelector("#search-results").innerHTML += parkPrinter(element.park_name, element.mapped_location_address)

        })
            
        });
    })
    // });

        // Fetch parks api backup
        // fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkSearchValue}=Yes`)
        // .then(r => r.json())
        // .then (parks => {
        //     parks.forEach(element => {
        //     if (parkSearchValue.toLowerCase().includes(element.park_name)) {
                
        //         // parkSearchValue = element.park_name
    
        //         document.querySelector("#search-results").innerHTML += parkPrinter(element.park_name, element.mapped_location_address)
    
        //     }
                
        //     });
        // })
        // });