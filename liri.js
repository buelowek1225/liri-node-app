// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require('fs');
var file = require('file-system');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

function doWhatItSaysThis() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        var action = dataArr[0];
        var searchParam = dataArr[1];
        commandSearch(action, searchParam);
    });
}

function spotifyThis(spotifySong, spotifyArtist) {
    spotify.search({ type: 'track', query: spotifySong }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
            console.log("* Artist(s):" + data.tracks.items[0].artists[i].name);
        } 
        var songName = data.tracks.items[0].name;
        var albumName = data.tracks.items[0].album.name;
        var spotifyLink = data.tracks.items[0].external_urls.spotify;
        // console.log(response.data);
        console.log("* Song Title:" + songName);
        console.log("* Album Name:" + albumName);
        console.log("* Spotify Link:" + spotifyLink);
      });
}


function concertThis(concert) {
    axios.get("https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp").then(
        function(response) {
            // console.log(response.data[0]);
            var name = response.data[0].venue.name;
            var cityLocation = response.data[0].venue.city;
            var regionLocation = response.data[0].venue.region;
            var countryLocation = response.data[0].venue.country;
            var dateTime = response.data[0].datetime;
            var momentDateTime = moment(dateTime).format('MMMM Do YYYY');
            console.log("* Concert Name: " + name);
            console.log("* Location(city): " + cityLocation);
            console.log("* State: " + regionLocation);
            console.log("* Country: " + countryLocation);
            console.log("* Date: " + momentDateTime);

        }
    )
}


function movieThis(movieTitle) {
    // Then run a request with axios to the OMDB API with the movie specified
    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
            // var response = response;
            // console.log(response);
            var movieTitle = response.data.Title;
            var movieYear = response.data.Year;
            var movieRating = response.data.imdbRating;
            var rottenTomatoRating = "Unavailable";
            if (response.data.Ratings[1]) {
               rottenTomatoRating = response.data.Ratings[1].Value;
            }
            var movieCountry = response.data.Country;
            var movieLanguage = response.data.Language;
            var moviePlot = response.data.Plot;
            var movieActors = response.data.Actors;
            console.log("* Movie Title: " + movieTitle);
            console.log("* Movie Year: " + movieYear);
            console.log("* IMDB Rating: " + movieRating);
            console.log("* Rotten Tomatoes Rating of the movie: " + rottenTomatoRating);
            console.log("* Country where movie  was produced: " + movieCountry);
            console.log("* Language of the movie: " + movieLanguage);
            console.log("* Plot of the movie: " + moviePlot);
            console.log("* Actors in the movie: " + movieActors);
        }
    );
}

// Setting up liri.js commmand line arguments
function commandSearch(action, searchParam) {
    if (action === "movie-this") {
        var movieTitle = searchParam;
        if (!movieTitle) {
            movieTitle = "Mr. Nobody";
        }
        movieThis(movieTitle);
    } else if (action === "spotify-this-song") {
        var spotifySong = searchParam;
        if (!spotifySong) {
            spotifySong = "The Sign by Ace of Base";
        }
        spotifyThis(spotifySong);
    } else if (action === "concert-this") {
        var concert = searchParam;
        concertThis(concert);
    } else if (action === "do-what-it-says") {
        var whatitsays = searchParam;
        doWhatItSaysThis(whatitsays);
    }
    
}

commandSearch(process.argv[2], process.argv[3]);

