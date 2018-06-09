console.log("main.js running")

window.onload = function () {
  const { protocol, hostname } = window.location
  const endpoint = `${protocol}//${hostname}:${env.API_PORT}/sayhello`
  window.fetch(endpoint)
    .then(res => res.json())
    .then(response => {
      document.getElementById('hello').innerHTML = response.hello
    })
    .catch(error => console.error('Error:', error))
}
