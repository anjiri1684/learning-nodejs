// console.log("starting");

// setTimeout(() => {
//   console.log("2 seconds Timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 seconds timer");
// }, 0);

// console.log("Stopping");

// const listLocations = (locations) => {
//   locations.map((location) => {
//     console.log(location);
//   });
// };

// const myLocations = ["Vihiga", "Kakamega", "Kisumu", "Nairobi", "Nakuru"];

// listLocations(myLocations);

// f3a8daf622c6a68a764be55df258c987
const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=f3a8daf622c6a68a764be55df258c987&query=-1.292066,36.821945";

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.location);
// });

async function getData() {
  const url =
    "http://api.weatherstack.com/current?access_key=f3a8daf622c6a68a764be55df258c987&query=-1.292066,36.821945";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(
      `It's currently ${json.current.temperature} degress out. It feels like ${json.current.feelslike} degrees out.`
    );
    console.log(
      `It's currently ${json.current.wind_degree} degrees out. There is ${json.current.precip}% chance of rain`
    );
  } catch (error) {
    console.error(error.message);
  }
}

getData();
