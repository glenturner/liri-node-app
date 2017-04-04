var fs = require('fs');
console.log('this is loaded');

exports.twitterKeys = {
  consumer_key: 'O1NVAKVKxcmSgPpgOBHR8i1qE',
  consumer_secret: 'AY4lpkVRF64jgTVFVVrrKF16ETMl1SirqiwEG3Mx87TIwe7Wkt',
  access_token_key: '847093203182538753-LGO4LIRWlT8JsCHpcsRuiOgbN4w5PuN',
  access_token_secret: '1pBOmCjODc6952GNB8mAWd8jDU9LaSYq6ecTb2aqqiUb8',
}

// write to random.txt // 
fs.writeFile("random.txt", "spotify-this-song, I Want it That Way", function (err){
	if(err){
		console.log(err);
	}
});
