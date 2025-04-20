function handleEven(number) {
    console.log(`${number} is even`); 
}

function handleOdd(number) {
    console.log(`${number} is odd`); 
}


function handleNum(number, onEven, onOdd) {
    if (number % 2 === 0) {
        onEven(number);  
    } else {
        onOdd(number);  
    }
}


handleNum(26, handleEven, handleOdd);  