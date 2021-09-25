const pwdScript = require(`./pwd`);
const lsScript = require(`./ls`);
const catScript = require(`./cat`);
const curlScript = require(`./curl`);
const dateScript = require(`./date`);

process.stdout.write(`prompt > `);

process.stdin.on(`data`, (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === `pwd`) pwdScript(done);
  if (cmd[0] === `ls`) lsScript(done);
  if (cmd[0] === "cat") {
    catScript.cat(cmd.slice(1), done);
  }
  if (cmd[0] === "curl") {
    curlScript(cmd[1], done);
  }
  if (cmd[0] === "date") dateScript(done);
  else done(`You typed: ` + cmd);
});

function done(output) {
  console.log(output);
  process.stdout.write(`\nprompt > `);
}
