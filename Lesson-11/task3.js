// TODO async/await
async function getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error("HTTP помилка (TODO): " + response.status);
      }
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error("Помилка при завантаженні TODO:", error);
    }
  }
  
  // USER async/await
  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error("HTTP помилка (USER): " + response.status);
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Помилка при завантаженні USER:", error);
    }
  }
  
  async function run() {
    try {
         const [todo, user] = await Promise.all([getTodo(), getUser()]);
      console.log("Результат Promise.all:");
      console.log("TODO:", todo);
      console.log("USER:", user);
  
      const firstResult = await Promise.race([getTodo(), getUser()]);
      console.log("Результат Promise.race (хто перший):", firstResult);
    } catch (error) {
      console.error("Помилка в run():", error);
    }
  }
  run();
  