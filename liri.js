
var keys = require("./keys.js");
var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var spotify = require('spotify');
var omdb = require('omdb');
var request = require('request');
var command = process.argv[2];
// Sanitize the Data coming in
process.argv.shift()  // skip node
process.argv.shift()  // skip file name
process.argv.shift() // skip the command
var commandData = process.argv.join(" ");

//Keep client as variable
var client = new Twitter(keys.twitterKeys);
	var paramsTwitter = {
	screen_name: 'wsj', 
	count: 21
	};

//Switch statement to find the correct command
switch(command) {
	case "my-tweets":
	myTweets();
	break;
	case "spotify-this-song":
	spotifyIt(commandData);
	break;
case "movie-this":
	movie(commandData);
	break;
}

//Function to get the tweets
function myTweets() {
 	client.get('statuses/user_timeline', paramsTwitter, function(error, tweets, response) {
       //If there is no error
       if (!error) {
           //Return 20 of the users most recent tweets
           for(var i = 1; i <= 20; i++){
             console.log('============================');
             console.log('TWEET number ' + i);
             console.log(tweets[i]['text']);
             console.log('============================');
           }
       }
       //Else, display an error
       else {
         console.log(error);
       }

	});
}
//Function for getting spotify songs
function spotifyIt(commandData) {
	if(commandData){  //if a song is put named in 4th paramater go to function
	var songName = commandData;
	} else {  //if blank call it "The Sign" by Ace of Base // 
	songName = "The Sign"; 
	}
	spotify.search({ type: 'track', query: songName}, function(err, data) {
if ( err ) {
	console.log('Error occurred: ' + err);
return;  //from spotify npm docs
}
else{
var songInfo = data.tracks.items[0];
var songResult = console.log(songInfo.artists[0].name)
             console.log(songInfo.name)
             console.log(songInfo.album.name)
             console.log(songInfo.preview_url)
			 /*console.log(songResult);*/
};
	});
}
//
function movie (commandData){
	request('http://www.omdbapi.com/?t=' + commandData, function (error, response, body) {  		
  		if(error){
  			console.log('error:', error); // Print the error if one occurred 
  		}else
  	
  	// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  	// console.log('body:', body);
  	var data = JSON.parse(body);
  	 // Print the HTML for the Google homepage. 
  	console.log("Title: " + data.Title);
  	console.log("Year: " + data.Year);
  	console.log("Rated: " + data.Rated);
  	console.log("Director: " + data.Director);
  	console.log("Released: " + data.Released);
	});
}
   


