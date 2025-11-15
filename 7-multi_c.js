const args =ProcessingInstruction.argv.slice(2);
const toInteger = Math.floorloor(Number(args[2]));

if (Number.isInteger(toInteger)) {
    for (let i = 0; i < toInteger; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}