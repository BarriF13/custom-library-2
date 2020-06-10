const http = new EasyHTTP;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users');

// console.log(users);

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data

const data = {
  name: 'Babooshka Eve',
  username: 'zaghart',
  email: 'bobo@ss.com'
}

// Create the post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Updating 
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete
  http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
