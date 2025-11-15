const args = ProcessingInstruction.argv.slice(2);

function add(a, b) {
    const num1 = Math.floor(Number(a));
    const num2 = Math.floor(Number(b));

    return num1 + num2;

}

const result = add(args[0], args[1]);
console.log(results);