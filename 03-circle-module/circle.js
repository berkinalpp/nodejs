const circleArea = (r) => {
    const PI = Math.PI
    result = PI * r**2
    console.log(`Dairenin alanı : ${result}`)
}

const circleCircumference = (r) => {
    const PI = Math.PI
    result = 2*PI*r 
    console.log(`Dairenin çevresi : ${result}`)   
}

module.exports= {
    circleArea,
    circleCircumference
}