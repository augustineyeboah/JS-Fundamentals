const args =process.argv.slice(2);
const toInteger = Math.floor(Number(args[0]));

if (Number.isInteger(toInteger)) {
    for (let i = 0; i < toInteger; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}