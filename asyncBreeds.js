// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      return callback(data);
    } else {
      return callback();
    }
  });
};

// const printCatBreed = breed => {
//   console.log('Return value:', breed);
// };

// breedDetailsFromFile('Bombay', printCatBreed);

module.exports = breedDetailsFromFile;