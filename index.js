const greet = []

function writeCards(name){
    for (let i = 0; i < name.length; i++){
        greet[i] = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    }
    return greet;    
}


function countDown(number){
    for (let i = number; i > -1; i--){
        console.log(i);
    }
}