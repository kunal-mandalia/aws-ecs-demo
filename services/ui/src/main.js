console.log("main.js running")

window.onload = function () {
  const endpoint = env.endpoint === 'API_ENDPOINT'
    ? 'http://localhost:5000/sayhello'
    : env.endpoint
  
  window.fetch(endpoint)
    .then(res => res.json())
    .then(response => {
      document.getElementById('hello').innerHTML = response.hello
    })
    .catch(error => console.error('Error:', error))
}
