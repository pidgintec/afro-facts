
var allCountries = require('./african-countries.json');
var random = require('unique-random-array');

module.exports = {
    allCountries,
    random: random(allCountries)
}