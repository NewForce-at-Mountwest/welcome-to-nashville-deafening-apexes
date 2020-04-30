fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`), 
  "$$app_token": yourToken


.then{(parks) => (parks.json)}

.then{(parsedParks) => {
parsedParks.forEach(element => {
    if (element.park_name === "Potters Field") {
        console.log(element)
    }
)}