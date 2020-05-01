// fetch the database
// let concertSearch = document.querySelector("concert-button")

// name, date, time, arena

document
  .querySelector("#concert-button")
  .addEventListener("click", function () {
    // concertSearch.innerHTML = "",
    let concertSearchBar = document
    .querySelector("#concert-search").value;

    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?dmaId=343&keyword=${concertSearchBar}&apikey=WoH918XzQjQACHV4jJJlI2oUqLqtJXUz`
    )
      //clean json database
      .then((response) => response.json())
      //print json database
      .then((artistChoice) => {
        console.log(artistChoice._embedded)
        // get to each artist

        if (artistChoice._embedded) {
            console.log("if", artistChoice._embedded)
            // document.querySelector
        } else {
            console.log("else")
        }
        artistChoice._embedded.events.forEach((artist) => {
          // console.log(artist.name) //name
          // console.log(artist.dates.start.localDate) //date
          // console.log(artist.dates.start.localTime) //time
        //   let inputName = document.querySelector("#concert-search").value;
        //   console.log(inputName)
          // can search any part of artist and get results

          console.log(artist)
        //   if (artist) {
        //       console.log("hit the if")
        //     document.querySelector(
        //       "#search-results"
        //     ).innerHTML += concertResults(
        //       artist.name,
        //       artist.dates.start.localDate,
        //       artist.dates.start.localTime
        //     );
        //   } 
        //   else {
        //       console.log("Hit the else")
        //     document.querySelector(
        //       "#search-results"
        //     ).innerHTML = `<h2>No results found.</h2>`;
        //   }
          // fix results ---> military time and date formats
        });
      });
  });
