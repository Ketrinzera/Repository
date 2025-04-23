function handleEven(number) {
    console.log(`${number} is even`);  // число парне
}

// Колбек для непарних чисел
function handleOdd(number) {
    console.log(`${number} is odd`);   // число непарне
}


function handleNum(number, onEven, onOdd) {
    if (number % 2 === 0) {
        onEven(number);  // парні
    } else {
        onOdd(number);   // непарні
    }
}

handleNum(20, handleEven, handleOdd);  // 4 is even
handleNum(13, handleEven, handleOdd);  // 7 is odd