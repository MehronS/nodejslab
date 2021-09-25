function date(done) {
  const newDate = new Date();
  const today =
    newDate.getFullYear() +
    "-" +
    (newDate.getMonth() + 1) +
    "-" +
    newDate.getDate();

  const time =
    newDate.getHours() +
    ":" +
    newDate.getMinutes() +
    ":" +
    newDate.getSeconds();

  done(today + ` ` + time);
}

module.exports = date;
