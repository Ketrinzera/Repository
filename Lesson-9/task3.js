const car1 = {
    brand: "BMW", 
    model: "XS",
    year: 2019   
  };

  const car2 = {
    brand: "Opel", 
    model: "Astra",
    owner: 2021  
  };

  const car3 = {
    ...car1,  
    ...car2  
  };
  console.log(car3);