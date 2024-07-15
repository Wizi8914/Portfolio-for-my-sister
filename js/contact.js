const form = document.querySelector('form');
const postUrl = "https://script.google.com/macros/s/AKfycbx1Yo2Ziv2Lu50bMJ48AQEtmp9Q63s595m3G89_kxAiOpqW5LUewClr_35qqynBFEoTmA/exec";

function validateEmail(email) {
    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return emailRegex.test(email);
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);


    fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(result => {
        alert(result.message);
      })
      .catch(error => {
        console.error('Erreur:', error);
      });
});