// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) return callback(data);
  });
};

const printCatBreed = breed => {
  console.log('Return value:', breed);
};

breedDetailsFromFile('Bombay', printCatBreed);
