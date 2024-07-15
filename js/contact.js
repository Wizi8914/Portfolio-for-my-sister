const form = document.querySelector('form');
const serviceID = "service_2r8tr7f";
const templateID = "template_fslpaxf";


function validateEmail(email) {
    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return emailRegex.test(email);
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    sendEmail();
});


function sendEmail() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var object = document.getElementById('object').value;
    var message = document.getElementById('message').value;

    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    var params = {
        fname: firstName,
        lname: lastName,
        email: email,
        object: object,
        message: message
    };

    console.log(params);

    emailjs.send(serviceID, templateID, params).then(function(response) {
        alert(`Votre message a bien été envoyé`);
        form.reset();
    }, function(error) {
        alert('Erreur lors de l\'envoi du message');
    });
};