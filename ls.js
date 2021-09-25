const fs = require("fs");

// let done = bash.done;

function lsFunc(done) {
  fs.readdir(`./`, `utf8`, (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join(` `));
    }
  });
}

module.exports = lsFunc;

// module.exports = (done) => {
//   fs.readdir(`./`, `utf8`, (err, files) => {
//     if (err) {
//       done(`Something went wrong`);
//     } else {
//       done(files.join(`   `));
//     }
//   });
// };
