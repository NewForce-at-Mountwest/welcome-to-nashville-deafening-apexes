let searchField = "";

//Adds an event listener to the Search Restaurants button
document
  .querySelector("#restaurant-button")
  .addEventListener("click", function () {
    searchField = document.querySelector("#restaurant-search").value;
    clearEntries();
    //Fetches data from the Zomato API for Nashville (entity id 1138) according to the user input ${searchField}
    //Needs the const token as the API key
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${searchField}`,
      {
        headers: {
          "user-key": zomatoToken,
        },
      }
    )
      .then((r) => r.json())
      .then((responseArray) => {
        //Puts the API response in an array, then calls a method to print part of it to the DOM
        renderRestaurantEntries(responseArray);
      });
  });

//A function for printing the first 10 search results for restaurants to the DOM
const renderRestaurantEntries = (entriesArray) => {
  for (let i = 0; i < 10; i++) {
    //Adds the restaurant name and address to an array of Strings. If the user clicks "Save", the id of the save button will be grabbed. This ID is also the entry's index in this String array. The entry will be copied from the string array and into the itinerary array.
    if (entriesArray.restaurants[i] != undefined) {
      stringArray[
        i
      ] = `<b>${entriesArray.restaurants[i].restaurant.name}</b>: ${entriesArray.restaurants[i].restaurant.location.address}`;
      //Prints to the DOM- a number for a list, and the name and address that we just saved
      document.querySelector("#search-results").innerHTML += `${i + 1}. ${
        stringArray[i]
      } <button class="save-button" id="save-restaurant-${i}">Save</button><br>`;
    }
  }
};
