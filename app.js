const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./note.js");

// Customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// add, remove, read, list

// create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Title: " + argv.title);
  },
});

yargs.parse();
// const command = process.argv[2];
// console.log(yargs.argv);
