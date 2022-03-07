const fs = require('fs')
const pwd = (cmd) => {
  process.stdout.write(process.cwd());
};
const date = (cmd) => {
  process.stdout.write(Date());
};
const ls = (cmd) => {
  fs.readdir(".", (err, files)=> {
    if (err) throw err;
    files.forEach((file)=> {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
};

 
module.exports = {
  pwd,
  date,
  ls,
};
