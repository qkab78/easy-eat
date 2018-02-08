const request = require('ajax-request');

const apiUrl = "https://maps.googleapis.com/maps/api/place/";
const apiKey = 'AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M';
{/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M&libraries=places"></script> */}

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?alocation=48.856614,2.3522219000000177&radius=106&type=restaurant&key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M

const output = 'json';
const radius = 106; // Zone couverte en mètres
const type = "restaurant";
const urlGlobale = apiUrl + "nearbysearch/" + output + '?location=' + latitude + ',' + longitude + '&radius=' + radius + '&type=' + type + '&key=' + apiKey;

var latitude = 48.856614;
var longitude = 2.3522219000000177;

var Restaurants = {
  getRestaurants: (req,res) => {
    request({
      // url: apiUrl + "nearbysearch/" + output,
      url: '\https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      method: 'GET',
      data: {
        location: latitude + ',' + longitude,
        radius: radius,
        type: type,
        key: apiKey
      }
    },
    function(err, res, body)  {
      console.log(body);
    });

  }
}

module.exports = Restaurants;