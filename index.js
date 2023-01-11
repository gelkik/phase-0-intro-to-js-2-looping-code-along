// Code your solutions in this file
const writeCards = e => {
    const newArray = [];
    for (let i in e){
        newArray[i] = `Thank you, ${e[i]}, for the wonderful surprise gift!`
    }
    return newArray;
}

const countDown = e => {
    while (e > -1){
        console.log(e--);
    }
}