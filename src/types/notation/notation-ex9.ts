interface User {
    username: string;
    email: string;
    ranks: string[];
  }
  
  const user: User = {
    username: 'Savitar2315',
    email: 'redstreak@katarika.com',
    ranks: ['Platinum 4', 'Diamond 4', 'Gold 1']
  };
  
  function hasProperty(obj: User, prop: string): boolean {
    return prop in obj;
  }
  
  
  console.log(hasProperty(user, 'username')); // true
  console.log(hasProperty(user, 'email')); // true
  console.log(hasProperty(user, 'age')); // false
  