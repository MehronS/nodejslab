const fs = require('fs')
function catFunc(fullPath) {
  const fileName = fullPath[0];
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    process.stdout.write(`\nprompt > `);
    //done(data);
  });
}

module.exports = {
  cat: catFunc,
};
