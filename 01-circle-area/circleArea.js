let arguments = process.argv.slice(2);

const circleArea = (r) => {
    const PI = Math.PI
    const result = PI * r**2;
    console.log(result)
}

circleArea(arguments[0]*1);