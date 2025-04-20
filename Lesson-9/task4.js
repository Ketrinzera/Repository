const person = {
    firstName: "Dmytro",  
    lastName: "Inanuk", 
    age:45            
  };
 
  person.email = "dmytro.ivanuk@ex.com";
  
  delete person.age;
  
   console.log(person);