const fs = require('fs')
//////add
const adddata = (id, name,grade,comment) => {
    const data = loaddata();
    const duplicate = data.filter((data) => {     
      return data.id === id ;
    });
    console.log(duplicate);
  
    if (duplicate.length === 0) {
      data.push(
        {
         id:id,
         name:name,
         grade:grade,
         comment:comment,
        }
      );
      save(data);
      console.log("data saved ");
    } else {
      console.log("Error");
    }
  };
/////read
const loaddata = () => {
    try {
      const dataBuffer = fs.readFileSync("data.json").toString();
      return JSON.parse(dataBuffer);
    } catch (e) {
      return [];
    }
  };
  const save = (data) => {
    const saveData = JSON.stringify(data);
    fs.writeFileSync("data.json", saveData);
  };
  //// delete
const remove = (id) =>{
    const data = loaddata()
    const dataToKeep = data.filter((data)=>{
        return data.id !== id
    })
    console.log(dataToKeep)
    save(dataToKeep)
   
}
module.exports = {
    remove:remove,
    adddata:adddata
  };
  