$(document).ready(function() {

  getLocation();
  var appId = "01ffc2b8227e5302ffa7f8555ba7738e";
  
  function getLocation() {
    $.get("http://ipinfo.io", function(location) {
      //console.log(location);
      
      $('.location')
        .append("ip -> " + location.ip + ", ")
        .append("city -> " + location.city + ", ")
        .append("region -> " + location.region + ", ")
        .append("country -> " + location.country + ", ")
      .append("lat,lon -> " + location.loc);

      var units = getUnits(location.country);
      getWeather(location.loc, units);

      //return weather;

    }, "jsonp");

  }

 function getWeather(loc, units) {
    lat = loc.split(",")[0] //.toString();
    lon = loc.split(",")[1] //.toString();

    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units + "&APPID=" + appId;

    //console.log(weatherApiUrl);

    $.get(weatherApiUrl, function(weather) {
      var windDir = convertWindDirection(weather.wind.deg);
      var temperature = weather.main.temp;
      var unitLabel;

      //label based in imperial vs metric units
      if (units === "imperial") {
        unitLabel = "F";
      } else {
        unitLabel = "C";
      }

      temperature = parseFloat((temperature).toFixed(2));

      //console.log(weather);

      $('#icon')
        .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");

      $('#temp').append(temperature + " °" + unitLabel);
     //degree alt + 248
      $('#conditions').append(weather.weather[0].description);
      $('#wind').append(windDir + " " + weather.wind.speed + " knots");
      //$('#postal').append(postal);

    }, "jsonp");

  };

  function convertWindDirection(dir) {
    var rose = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    var eightPoint = Math.floor(dir / 45);
    return rose[eightPoint];
  }

  function getUnits(country) {
    var imperialCountries = ['US', 'BS', 'BZ', 'KY', 'PW'];

    if (imperialCountries.indexOf(country) === -1) {
      var units = 'metric';
    } else {
      units = 'imperial';
    }

    //console.log(country, units);
    return units;
  }

});
