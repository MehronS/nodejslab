const pwdScript = require(`./pwd.js`);
const lsScript = require(`./ls`);

process.stdout.write(`prompt > `);

process.stdin.on(`data`, (data) => {
  const cmd = data.toString().trim();

  process.stdout.write(`You typed: ` + cmd);

  if (cmd === `pwd`) pwdScript.pwd();
  if (cmd === `ls`) lsScript.ls();

  process.stdout.write(`\nprompt > `);
});
