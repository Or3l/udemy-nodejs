// var obj = {
//     name : 'orel'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(typeof obj);


// var personString = '{"name": "orel", "age" : "30"}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');
var originalNode = {title: "hello", body: "some body"};

var string = JSON.stringify(originalNode);
fs.writeFileSync("note.json",string, (err) => {
if(err){
    console.log('An error occured');
}
});


var fromFile = fs.readFileSync("note.json");
console.log(fromFile);
var obj = JSON.parse(fromFile);

console.log(obj.body);


