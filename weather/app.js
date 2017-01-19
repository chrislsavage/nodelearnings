const request = require('request');
const yargs = require('yargs');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true //makes sure its a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.a)


request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitute: ${body.results[0].geometry.location.lng}`); 

})