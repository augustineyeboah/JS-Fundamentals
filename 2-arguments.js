const nodeArgs = process.argv.slice(2);

if (nodeArgs.length === 0) {
  console.log("No argument");
} else if (nodeArgs.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
 