// bash.js
const commands = require('./commands/index.js');

const cmd = 'pwd';
commands[cmd](); // la función dentro de la propiedad pwd

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', (data)=> {
  const cmd = data.toString().trim(); // remueve la nueva línea
  if(cmd === 'date') {
    commands[cmd]();
  }
  if(cmd === 'pwd') {
    commands[cmd]();
  }
  if(cmd === 'ls'){
    commands[cmd]();
  }
  
  process.stdout.write('\nprompt > ');
});
// Output un prompt
// process.stdout.write('prompt > ');
// // El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   const cmd = data.toString().trim(); // remueve la nueva línea
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

// const commands = require('./commands');


// console.log(Object.keys(process));