const fs = require("fs");

function catFunc(fullPath, done) {
  const fileName = fullPath[0];
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) throw err;
    done(data);
  });
}

module.exports = {
  cat: catFunc,
};
