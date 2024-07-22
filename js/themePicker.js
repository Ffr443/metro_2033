"use strict"


let pickers = document.querySelectorAll('.day__night')

if (pickers.length > 0) {
    for (let i = 0; i < pickers.length; i++) {
        const picker = pickers[i];

        picker.addEventListener('click', function (e) {
            document.body.classList.toggle('_night');
        });
    }

}