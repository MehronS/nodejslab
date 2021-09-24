const fs = require("fs");

function lsFunc() {
  fs.readdir(`./`, `utf8`, (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join(` `));
      process.stdout.write(`\nprompt > ` );
    }
  });
}

module.exports = {
  ls: lsFunc,
};
