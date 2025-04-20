function handleNum(number, onEven, onOdd) {
    if (number % 2 === 0) {
        onEven(number);  // парні
    } else {
        onOdd(number);   // непарні
    }
}


const evenCallback = (num) => {
    console.log(`${num} - це парне число!`);
};

const oddCallback = (num) => {
    console.log(`${num} - це непарне число!`);
};


handleNum(20, evenCallback, oddCallback);  // 20 - це парне число
handleNum(13, evenCallback, oddCallback);  // 13 - це непарне число


