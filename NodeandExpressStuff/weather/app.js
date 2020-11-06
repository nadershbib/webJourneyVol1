const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/w", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post("/w", (req, res) => {
  let cityName = req.body.city;
  console.log(cityName);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=24a378814964ff5a443bd3fd609a3e0c&units=metric";
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const weather = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const weatherIcon = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

      res.write("The temperature in " + cityName + " is " + weather+" degree celsius");
      res.write("<img src="+ weatherIcon+" >");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
