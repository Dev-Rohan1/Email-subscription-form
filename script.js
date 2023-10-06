const scriptURL = 'https://script.google.com/macros/s/AKfycbzDQIMRkq8KvnjPIgpWA-UI3xTjOBVomfHPnsfzFGl8c3TTRxx-pO6nsQYAQnvBkiQ_bw/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.querySelector("form p");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       alert("Thanks for subscribe");
       form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})