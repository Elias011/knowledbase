const csvParser = require('csv-parse');

exports.parseCSV = (csvFile) => {
  const parserOptions = {};
  //console.log(csvFile.toString());
  return new Promise((resolve, reject) => {
    csvParser(csvFile.toString(), parserOptions, (err, data) => {
      if (err) {
        reject(err);
      }
      const toArray = data.map(res => res);
      resolve(toArray);
    });
  });
};
