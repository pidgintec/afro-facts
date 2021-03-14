const { expect } = require('chai');
const afroFacts = require('./index');

const isArrayOfStrings = (array) =>  array.every((country) => country && typeof country === 'string');


describe('Afro-facts', () => {
describe('allCountries', () => {
    it('should return array of strings', () => {
        expect(afroFacts.allCountries).to.satisfy(isArrayOfStrings)
    });

    it('should contain Nigeria', () => {
        expect(afroFacts.allCountries).to.include('Nigeria');
    });
})

describe('random', () => {
    it('should return an item from all African countries', () => {
        const randomCountry = afroFacts.random();

        expect(afroFacts.allCountries).to.include(randomCountry);
    })
})
})