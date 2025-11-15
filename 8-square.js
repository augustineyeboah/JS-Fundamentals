const args = process.argv.slice(2);
const toInteger = Math.floor(Number(args[0]));
const char = "X";

if (Number.isInteger(toInteger)) {
    for (let i = 0; i < toInteger; i++) {
        console.log(char.repeat(toInteger));
    }
} else {
    console.log("Missing size");
}