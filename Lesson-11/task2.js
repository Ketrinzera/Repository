// TODO
function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP помилка (TODO): " + response.status);
        }
        return response.json();
      })
      .then(todo => {
        return todo;
      })
      .catch(error => {
        console.error("Помилка при завантаженні TODO:", error);
      });
  }
  
  // USER
  function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP помилка (USER): " + response.status);
        }
        return response.json();
      })
      .then(user => {
        return user;
      })
      .catch(error => {
        console.error("Помилка при завантаженні USER:", error);
      });
  }
  
  // Promise.all
  Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
      console.log("Результат Promise.all:");
      console.log("TODO:", todo);
      console.log("USER:", user);
    })
    .catch(error => {
      console.error("Помилка в Promise.all:", error);
    });
  
  // Promise.race
  Promise.race([getTodo(), getUser()])
    .then(firstResult => {
      console.log("Результат Promise.race (хто перший):", firstResult);
    })
    .catch(error => {
      console.error("Помилка в Promise.race:", error);
    });
  