const fnameInput = document.querySelector('#fname');//.addEventListener('change', isAlphabetic);
//const lnameInput = document.querySelector('#fname');//.addEventListener('change', isCorrectLength);
const lnameInput = document.querySelector('#lname');//.addEventListener('change', isAlphabetic);
//document.querySelector('#lname');//.addEventListener('change', isCorrectLength);
const emailInput = document.querySelector('#email');//.addEventListener('change', emailCorrectFormat);

let fNameError = document.querySelector('#fnameerror');
let lNameError = document.querySelector('#lnameerror');
let emailError = document.querySelector('#emailerror');
let phoneError = document.querySelector('#phoneerror');

let fnameValid = false;
let lnameValid = false;
let emailValid = false;

fnameInput.addEventListener(`change`, e => {
    if (isAlphabetic(e.target.value)) {
        //Make it not invalid
    } else {
        fNameError.textContent = `Only lower and upper case letters are allowed`;
        //Make it invalid
    }

    if (isCorrectLength(e.target.value)) {
        //Make it not invalid
    } else {
        console.log(`fnameInput.textContent: ${fnameInput.textContent}`)
        fNameError.textContent = `The First Name entered is either too short or too long`;
        //Make it invalid
    }

    fnameValid = isAlphabetic(fnameInput) && isCorrectLength(fnameInput);
}, false);

lnameInput.addEventListener(`change`, e => {
    if (isAlphabetic(e.target.value)) {
        //Make it not invalid
    } else {
        lNameError.textContent = `Only lower and upper case letters are allowed`;
        //Make it invalid
    }

    if (isCorrectLength(e.target.value)) {
        //Make it not invalid
    } else {
        lNameError.textContent = `The Last Name entered is either too short or too long`;
        //Make it invalid
    }

    lnameValid = isAlphabetic(lnameInput) && isCorrectLength(lnameInput);
}, false);

emailInput.addEventListener(`change`, e => {
    if (emailCorrectFormat(e.target.value)) {
        //Make not invalid
    } else {
        emailError.textContent = `Email address not valid`;
    }

    emailValid = emailCorrectFormat(emailInput);
}, false);


function isAlphabetic(stringToParse) {

    if (stringToParse./*toLowerCase().*/includes == 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        return true;
    } else {
        console.log('Only lower and upper case letters are allowed')
        return false;
    };

};



function isCorrectLength(stringToParse) {
    if (stringToParse.length > 1 && stringToParse.length < 15) {
        return true;
    } else {
        console.log('The First Name entered is either too short or too long.');
        return false;
    };
};


// function isCorrectLength2() {

//     if (lastName.length > 1 && lastName.length < 15) {

//     } else {
//         console.log('The Last Name entered is either too short or too long.');
//     };
// };



function emailCorrectFormat(stringToParse) {
    if (stringToParse.length > 1 && stringToParse.includes('@')) {
        return true;
    } else {
        console.log('Email address not valid')
        return false;
    }
};





function submitButton() {
    if (fNameError === true) {
        return true
    } else {
        return false
    }


}
