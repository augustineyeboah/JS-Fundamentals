const args = Process.argv.slice(2);
const toInteger = Math.floor(Number(args[0]));
const char = "x";

if (Number.isInteger(toInteger)) {
    for (let i = 0; i < toInteger; i++) {
        console.log(char.repeat(tointeger));
    }
} else {
    console.log("Missing size");
}
