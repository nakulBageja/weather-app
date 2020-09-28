const request = require("request");

module.exports = forecast = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=38293458468752e34f629ed348da21ff&query=${address}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("No Internet Connectivity");
    } else if (response.body.error) {
      callback("Unable to find location, please try another search");
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        humidity: response.body.current.humidity,
        feelsLike: response.body.current.feelslike,
        location: response.body.location.name
      });
    }
  });
};
