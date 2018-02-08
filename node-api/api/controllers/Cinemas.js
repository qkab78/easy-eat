const request = require('request');
const rp = require('request-promise');
const apiUrl = "\"https://maps.googleapis.com/maps/api/place/nearbysearch/json\"";
const apiKey = 'AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M';
{/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M&libraries=places"></script> */}

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?alocation=48.856614,2.3522219000000177&radius=106&type=restaurant&key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M

const output = 'json';
//const radius = 106000; // Zone couverte en mètres
const radius = 106000; // Zone couverte en mètres
const type = "restaurant";
let latitude = 48.856614;
let longitude = 2.3522219000000177;
const urlGlobale = apiUrl + "nearbysearch/" + output + '?location=' + latitude + ',' + longitude + '&radius=' + radius + '&type=' + type + '&key=' + apiKey;

let cinemas = [];

let Cinemas = {
  getCinemas: (req,res) => {
    rp('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+','+longitude+'&radius='+radius+'&type=movie_theater&key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M', (error, response, body) => {
        body = JSON.parse(body);
      }).then((result) => {
        result = JSON.parse(result);
        //console.log(result);
        for(let i=0; i<result.results.length; i++){
          cinemas.push(result.results[i]);
        }
        rp('https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=CsQDvgEAAKxMemr7uNcs3QnmbgHZSTFuGR4K2GjMx-oEInKHs--okzLl5KYJmuPx_I0X94v6fEeS_2eEJk_XNI4awhHx0tGApH-XoN_Rtf_M8IgfU58ly6eKueV6jNnWcrfaa4CtKhGeFeBE1iOnsSDhmWb6zE3BEfbqusGFueXmuL_oB3UFu_tfdS38MIk_Lx-9nI3DqCr6sj6QiJooR-V9lzmAQ4EotypJls0qC9lnauDWB7tZwts3cXc5puPJVi4d7y3Y49KKoug3oykvJrQJa_rc5P6z6QlUweWKHMIsDi7I3rpWh__D1iCQyE-n4Rv6N2ay97DjLQceKLekBInN0ZYVDSNgq879lsmX7JlaisdrQfj8jqU-VYKu1YFCjQBKY1fNx-jFyRahMqzEhcQKoZPbaxWkb8qFtjvGrhXs1YKKYxezn88K7ZNZ7biYhMAwRa1DrpHOb6BMxqkmiDHCSEObc31otxE-s8ylHacf7V_FGtFrc6dtluE3fsYy4W9Ap2veJpEpoRCOJi2ktsF33NLlXJugIELRyQPgefUy5LSihpkloYodEB5UpERRK2yvjQ5VqttlFTqhgBmtqI0BVwAlgCASEEtmkNzu-pzrdiLYe5te5YMaFOiGU2rENq-HYw0dIGkcWRqhfUED&key=AIzaSyD6Fbh72tdLpaGsMJHWTKh4Chk7PTG2v6M', (error, response, body) => {
        //console.log(body);  
        body = JSON.parse(body);
        }).then((nextResult) => {
          nextResult = JSON.parse(nextResult);
          for(let i=0; i<nextResult.results.length; i++){
            cinemas.push(nextResult.results[i]);
          }
          console.log(cinemas.length + "cinémas");
          res.send(cinemas);
        }); 
      });   
  },
  getCinemaInfo: (req, res) => {
    let id_test = "ChIJzycLcBZu5kcRHU7kgLKo29Y";
    rp('https://maps.googleapis.com/maps/api/place/details/json?place_id='+req.params.id+'&key='+apiKey, (error, response, body) => {
        console.log(body);  
        body = JSON.parse(body);
        }).then((result) => {
          result = JSON.parse(result);
          res.send(result.result);
        }); 
  }
}
module.exports = Cinemas;