const users = [
    { name: "Natali", email: "natali@ex.com", age: 43, city: "Kyiv", country: "Ukraine" },
    { name: "Olya", email: "olya@ex.com", age: 23, city: "Lviv", country: "Ukraine" },
    { name: "Alex", email: "alex@ex.com", age: 56, city: "Kharkiv", country: "Ukraine" },
    { name: "Katya", email: "katya@example.com", age: 31, city: "Odessa", country: "Ukraine" }
  ];
  
    for (const { name, email, age, city, country } of users) {
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`age: ${age}`);
    console.log(`city: ${city}`);
    console.log(`country: ${country}`);
  }