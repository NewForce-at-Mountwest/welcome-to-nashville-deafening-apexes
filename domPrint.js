//an array of Strings, which is filled with search results gathered from the APIs
let stringArray = [];
//another array of Strings, filled with entries the user has clicked Save on
let itineraryArray = [];

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
      //...then we will grab the second half of its ID, which is actually the index that its corresponding search result is in stringArray. We'll grab it from that array, then push it to our itineraryArray
      if (stringArray[splitArray[1]] != undefined) {
        itineraryArray.push(stringArray[splitArray[1]]);
      }
      //Calls a function to print the new itineraryArray
      printItinerary();
    }
  });

//A function for printing the strings in the itineraryArray
const printItinerary = () => {
  //Clears the itinerary field and adds a heading
  document.querySelector("#itinerary").innerHTML = "<h1>Itinerary:</h1>";
  //Prints each item in the itineraryArray beneath the heading
  itineraryArray.forEach((item) => {
    document.querySelector("#itinerary").innerHTML += `${item}<br>`;
  });
};
