let artist = document
  .querySelector("#concert-button")
  .addEventListener("click", function () {
    // concertSearch.innerHTML = "",
    let concertSearchBar = document.querySelector("#concert-search").value;
    // fetch the database
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&keyword=${concertSearchBar}&apikey=${apiToken}`
    )
      //clean json database
      .then((response) => response.json())
      //print json database
      .then((artistChoice) => {
        // get to each artist
        if (artistChoice._embedded) {
          document.querySelector("#search-results").innerHTML =
          "<h1>Results:</h1>";
          let i = 0;
        artistChoice._embedded.events.forEach((artist) => {
          document.querySelector("#search-results").innerHTML += concertResults(
            artist.name,
            artist.dates.start.localDate,
            artist.dates.start.localTime
          );
          stringArray[i] = concertResults(
            artist.name,
            artist.dates.start.localDate,
            artist.dates.start.localTime
          );
          document.querySelector("#search-results").innerHTML += `<button class="save-button" id="save-concert-${i}">Save</button><br>`,
          i++;
        } )
       
          
          // fix results ---> military time and date formats
        } else {
          document.querySelector("#search-results").innerHTML = `<img src="https://media.spokesman.com/photos/2020/01/25/IMG_4140_7hZcQT4.jpg" alt="Cancelled" id="cancel">`
        };
      });
  });
