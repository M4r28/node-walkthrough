//Load external resources
const { prepareString } = require ('./formatting');
const {showHelp} = require("./messaging");

//handle input
let result = "";
const args = process.argv.slice(2);

if(args.includes('--help')){
showHelp();

}

// console.log(args);


//input goes to fimatting.js then gets return back here
result = prepareString(args[0])
//we want to cl results
console.log(result)


