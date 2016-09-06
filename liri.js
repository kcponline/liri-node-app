var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
// var keys = require('keys.js');

// var client = new twitter({
// 	consumer_key : keys.twitterKeys.consumer_key,
// 	consumer_secret : keys.twitterKeys.consumer_secret,
// 	access_token_key : keys.twitterKeys.access_token_key,
// 	access_token_secret : keys.twitterKeys.ccess_token_secret
// });

// kcp: hcs check to check twitter callback
// var client = new spotify({
//   consumer_key: '34ec9797abb347ceaa6fa223ce693a8a',
//   consumer_secret: '15c1ff009037447094be0e68af4fe23c'
// });

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
    console.log(data);
});



// var spotifyKey = new spotify( {
// 	consumer_key : key.spotifyKeys.consumer_key,
// 	consumer_secret : key.spotifyKeys.consumer_secret,
// });

// Run the request function... 
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)  
// 3. It provides the actual body text from the website <---- what actually matters. 
// request('https://en.wikipedia.org/wiki/Kudos_(granola_bar)', function (error, response, body) {

// 	// If the request was successful...
// 	if (!error && response.statusCode == 200) {

// 		// Then log the body from the site!
// 		console.log(body) 
// 	}
// });

// var Userwants = process.argv[2];
// var param = process.argv[3];

// twitterKeys.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//    console.log(tweets);
// });

// kcp: hcs check to check twitter callback
// var client = new twitter({
//   consumer_key: 'BMVBIVVTJeQNJFDayMbUzVpgT',
//   consumer_secret: 'uYwjqWXwK1umilaWSFkKSSTumYDCz0yXeKQmuohO4uJgYmrk7l',
//   access_token_key: '754719410745520128-QgluHpjNhW6Eo1q9AJZT4A55kkXWP8U',
//   access_token_secret: 'Uh6R5sbLYeY0zhK7UwrSsZGez8DZ7Weztm6Cbnk6AbmRH'
// });
 
// var params = {screen_name: 'nodejs'};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });