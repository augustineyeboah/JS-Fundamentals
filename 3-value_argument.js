const nodeArgs = process.argv.slice(2);

if (!nodeArgs[0]) {
  console.log("No argument");
} else {
  console.log(nodeArgs[0]);
}