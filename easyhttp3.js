/**
* My library for making HTTP request
* @version 3.0.0
* @author Myself
* @license freedom
**/

class EasyHTTP {
  //Make an Http GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;

  }
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  async put(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  }
  // delete
  async delete(url) {

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const responseData = await 'Resource Deleted...';
    return responseData;
  }
}