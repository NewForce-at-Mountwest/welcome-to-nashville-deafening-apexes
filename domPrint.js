concertResults = (name, date, time) => {
    return `
    <div class="row">
  <p><b>${name}</b>, <i>${date}</i>, ${time}</p>
</div>
    `
}
//an array of Strings, which is filled with search results gathered from the APIs
let stringArray = [];
//another array of Strings, filled with entries the user has clicked Save on
let itineraryArray = [];

let itineraryObject = {
};

//Clears the search fields and the search results
const clearEntries = () => {
  document.querySelector("#brewery-search").value = "";
  document.querySelector("#park-search").value = "";
  document.querySelector("#concert-search").value = "";
  document.querySelector("#restaurant-search").value = "";
  document.querySelector("#search-results").innerHTML = "<h1>Results:</h1>";
};

//Adds a click event listener to all Save buttons
document
  .querySelector("#search-results")
  .addEventListener("click", function () {
    //When a button is clicked, it splits the id to see if it's a save button
    let splitArray = event.target.id.split("-");
    //If the clicked button is a save button...
    if ((splitArray[0] = "save")) {
      //...then we will grab the second half of its ID, which is actually the index that its corresponding search result is in stringArray. We'll grab it from that array, then push it to our itineraryObject
      if (stringArray[splitArray[2]] != undefined) {
        itineraryArray.push(stringArray[splitArray[2]]);
        itineraryObject[`${splitArray[1]}`] = stringArray[splitArray[2]];
      }
      //Calls a function to print the new itineraryObject
      printItinerary();
    }
  });

//A function for printing the strings in the itineraryObject
const printItinerary = () => {
  //Clears the itinerary field and adds a heading
  document.querySelector("#itinerary").innerHTML = "<h1>Itinerary:</h1>";

  // //Prints each property of the itineraryObject beneath the heading, as long as they exist
  if (itineraryObject.park != undefined) {
    document.querySelector("#itinerary").innerHTML += `
    <b>Park: </b>${itineraryObject.park}
    `;
  }
  if (itineraryObject.brewery != undefined) {
    document.querySelector("#itinerary").innerHTML += `
    <b>Brewery: </b>${itineraryObject.brewery}
    `;
  }
  if (itineraryObject.restaurant != undefined) {
    document.querySelector("#itinerary").innerHTML += `
    <b>Restaurant: </b>${itineraryObject.restaurant}
    `;
  }
  if (itineraryObject.concert != undefined) {
    document.querySelector("#itinerary").innerHTML += `
    <b>Concert: </b>${itineraryObject.concert}
    `;
  }
};
