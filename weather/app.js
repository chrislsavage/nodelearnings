const request = require('request');

request({
    url: "http://maps.googleapis.com/maps/api/geocode/json?address=%2053%20W%2036th%20St,%20New%20York,%20NY%2010018",
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2)); //pretty prints the JSON
})