// fetch the database
// let concertSearch = document.querySelector("concert-button")

// name, date, time, arena

document.querySelector("#concert-button").addEventListener("click", function () {
    // concertSearch.innerHTML = "",


fetch(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&apikey=WoH918XzQjQACHV4jJJlI2oUqLqtJXUz`)
//clean json database
.then((response) => response.json())
//print json database
.then((artistChoice) => {
    console.log(artistChoice)
    // get to each artist
    artistChoice._embedded.events.forEach(artist => {
        // console.log(artist.name) //name
        // console.log(artist.dates.start.localDate) //date
        // console.log(artist.dates.start.localTime) //time
        let inputName = document.querySelector("#concert-search").value
        if (artist.name.toLowerCase().includes(inputName)){
            document.querySelector("#search-results").innerHTML += concertResults(artist.name, artist.dates.start.localDate, artist.dates.start.localTime)
        }
    // const genreResults = document.querySelector("#search-results")
    
    // if (event.target.id === "concert-button") {
    //     genreResults = 
    // }
})
})
})