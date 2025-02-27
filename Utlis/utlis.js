const generateRandomNumber = ( min,max ) => {
 
    let randomNum = Math.random() * (max-min) + min;
    return parseInt(randomNum);


}

export { generateRandomNumber }