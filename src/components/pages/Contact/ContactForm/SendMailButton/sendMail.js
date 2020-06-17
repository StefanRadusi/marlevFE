import axios from 'axios';

export function sendMail(mailData, changeMessage) {
    axios.post('/mail', mailData)
        .then(function () {
            changeMessage({text: "Mail-ul a fost trimis cu succes", type: "success"});
        })
        .catch(function (error) {
            console.log('Sending mail failed ', error);
            changeMessage({text: "Trimiterea mail-ului a esuat", type: "failed"});
        })
}