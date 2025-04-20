function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Один або обидва аргументи не є числом.");
    }

      if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе.");
    }
    return numerator / denominator;
}


try {
    console.log(divide(20, 2));  
} catch (error) {
    console.error(error.message);  
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(20, 0));
} catch (error) {
    console.error(error.message); 
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide(20, "a"));  
} catch (error) {
    console.error(error.message); 
} finally {
    console.log("Робота завершена");
}

try {
    console.log(divide("20", 2)); 
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}