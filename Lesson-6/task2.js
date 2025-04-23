function isAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  const result1 = isAdult(25);
  const result2 = isAdult(15);
  
  console.log("25 років — повнолітній?", result1);
  console.log("15 років — повнолітній?", result2); 