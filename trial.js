//create object 
let student= {
    "id":123456 ,
    "name ":"hagar",
    "grade": 6,
    "comment":"any comment"
};
// convert to json
let studentjson = JSON.stringify(student)
/// write 
const fs = require('fs')
fs.writeFileSync('txt.json', studentjson)
/// read 
console.log(fs.readFileSync('txt.json').toString())
//convert to object
student = JSON.parse(studentjson)
console.log(student)