let artist = document
  .querySelector("#concert-button")
  .addEventListener("click", function () {
    // concertSearch.innerHTML = "",
    let concertSearchBar = document.querySelector("#concert-search").value;
    // fetch the database
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&keyword=${concertSearchBar}&apikey=${apiKey}`
    )
      //clean json database
      .then((response) => response.json())
      //print json database
      .then((artistChoice) => {
        // get to each artist
        if (artistChoice._embedded) {}
        document.querySelector("#search-results").innerHTML =
          "<h1>Results:</h1>";
        artistChoice._embedded.events.forEach((artist) => {
          document.querySelector("#search-results").innerHTML += concertResults(
            artist.name,
            artist.dates.start.localDate,
            artist.dates.start.localTime
          );

          //   else {
          //     console.log("else")
          //     document.querySelector(
          //       "#search-results"
          //     ).innerHTML = `<h2>No results found.</h2>`;
          // }
          // fix results ---> military time and date formats
        });
      });
  });
