import axios from 'axios';

export function trimiteOferta(oferta) {
    // For local 'http://localhost:5000/mail'
    const contact = JSON.parse(localStorage.getItem("contactData"));
    contact.oferta = oferta;
    axios.post('/oferta', contact)
        .then(function () {
            localStorage.removeItem("cart-items");
            window.location.href = "/oferte-salvate/success";
        })
        .catch(function (error) {
            console.log('Sending mail failed ', error);
        })
}
