const args = process.argv.slice(2);

function factorial(num) {
    const toNumber = Number(num);

    if (Number.isNaN(toNumber)) return 1;
     if (toNumber === 1) return 1;
     if (toNumber >= 2) {
        return toumber * factorial(toNumber - 1);
     }
    }
    const result = factorial(args[0]);
    console.log(result);
     