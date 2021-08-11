//// require 
const data= require('./date')
const yargs = require("yargs");
//////add
yargs.command({
    command: "add",
    describe: "Add data",
    builder: {
    id: {
        describe: "This is id",
        demandOption: true,
        type: "number",
      },
  
      name: {
        describe: "This is name",
        demandOption: true,
        type: "string",
      },
      grade:
      {
        describe: "This is grade",
        demandOption: true,
        type: "number", 
      },
      comment:{
        describe: "This is comment",
        type:"string",
      }
    },
    handler: (argv) => {
      data.adddata(argv.id,argv.name,argv.grade,argv.comment)
    },
  });
//////// read
yargs.command({
    command: "read",
    describe: "Read data",
    builder: {
      id: {
        describe: "This is id",
        demandOption: true,
        type: "number",
      }
    },
    handler: (argv) => {
      console.log(argv.id);
    },
  });
////////// delete
yargs.command({
    command: "delete",
    describe: "Delete data",
    builder: {
        id: {
            describe: "This is id",
            demandOption: true,
            type: "number",
        }
    },
    handler: (argv) => {
        data.remove(argv.id)
    },
});
//// list
yargs.command({
    command: "list",
    describe: "List data",
    handler: (argv) => {
      console.log(argv.id,argv.name,argv.grade,argv.comment)
    },
  });
yargs.parse()