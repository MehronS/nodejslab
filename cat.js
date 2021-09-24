function catFunc(fullPath) {
  const fileName = fullPath[0];
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    console.log(data);
    done(data);
  });
}

module.exports = {
  cat: catFunc,
};
