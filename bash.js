const pwdScript = require(`./pwd`);
const lsScript = require(`./ls`);
const catScript = require(`./cat`);
const curlScript = require(`./curl`)


process.stdout.write(`prompt > `);

process.stdin.on(`data`, (data) => {
  const cmd = data.toString().trim().split(" ");

  process.stdout.write(`You typed: ` + cmd);

  if (cmd[0] === `pwd`) pwdScript.pwd();
  if (cmd[0] === `ls`) lsScript.ls();
  if (cmd[0] === 'cat') {catScript.cat(cmd.slice(1))}
  if (cmd[0] === 'curl') {curlScript.request(cmd[1])}

  process.stdout.write(`\nprompt > `);
});
