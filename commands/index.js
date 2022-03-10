const fs = require('fs')
const request = require('request')

const done=(output)=>{
  process.stdout.write(output)
  process.stdout.write("prompt > ")
}

const pwd = (file) => {
  const output = process.cwd();
  done(output)
};
const date = (file) => {
  const output = Date();
  done(output)
};
const ls = (file) => {
  let output= ''
  fs.readdir('.', function (err, files) {
    if(err) throw err
    files.forEach(function (file) {
      output += file.toString() + '\n';
    });
      done(output);
    });
};

const echo=(file)=>{
  const output = file
  done(output)
}
const curl=(file)=>{
  const output = {}
 request(file,(err,res,body)=>{
  done(body)
 })

}
module.exports = {
  pwd,
  date,
  ls,
  echo,
  curl,
};
