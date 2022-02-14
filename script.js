const fnameInput = document.querySelector('#fname');//.addEventListener('change', isAlphabetic);
//const lnameInput = document.querySelector('#fname');//.addEventListener('change', isCorrectLength);
const lnameInput = document.querySelector('#lname');//.addEventListener('change', isAlphabetic);
//document.querySelector('#lname');//.addEventListener('change', isCorrectLength);
const emailInput = document.querySelector('#email');//.addEventListener('change', emailCorrectFormat);
const signupButton = document.querySelector(`#signup`)

let fNameError = document.querySelector('#fnameerror');
let lNameError = document.querySelector('#lnameerror');
let emailError = document.querySelector('#emailerror');
let signupError = document.querySelector('#signuperror');

let fnameValid = false;
let lnameValid = false;
let emailValid = false;

fnameInput.addEventListener(`change`, e => {
    fnameValid = true;
    fNameError.textContent = ``;
    if (isAlphabetic(e.target.value)) {
        //Make it not invalid
    } else {
        fNameError.textContent = `Only lower and upper case letters are allowed`;
        fnameValid = false;
    }

    if (isCorrectLength(e.target.value)) {
        //Make it not invalid
    } else {
        // console.log(`fnameInput.textContent: ${fnameInput.textContent}`)
        fNameError.textContent = `The First Name entered is either too short or too long`;
        fnameValid = false;
    }

    checkIfAllIsValid();

}, false);

lnameInput.addEventListener(`change`, e => {
    lnameValid = true;
    lNameError.textContent = ``;
    if (isAlphabetic(e.target.value)) {
        //Make it not invalid
    } else {
        lNameError.textContent = `Only lower and upper case letters are allowed`;
        lnameValid = false;
    }

    if (isCorrectLength(e.target.value)) {
        //Make it not invalid
    } else {
        lNameError.textContent = `The Last Name entered is either too short or too long`;
        lnameValid = false;
    }

    checkIfAllIsValid();

}, false);

emailInput.addEventListener(`change`, e => {
    emailValid = true;
    emailError.textContent = ``
    if (emailCorrectFormat(e.target.value)) {
        //Make not invalid
    } else {
        emailError.textContent = `Email address not valid`;
        emailValid = false;
    }

    checkIfAllIsValid();
}, false);


// signupButton.addEventListener(`click`, e => {
//     signupError.textContent = ``;
//     if (checkIfAllIsValid()) {

//     } else {

//         signupError.textContent = `One or more required elements are not valid, please try again`;
//     }

// }, false);


function isAlphabetic(stringToParse) {

    // if (stringToParse./*toLowerCase().*/includes == 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    if (/^[a-zA-Z]+$/.test(stringToParse)) {
        return true;
    } else {
        // console.log('Only lower and upper case letters are allowed')
        return false;
    };

};



function isCorrectLength(stringToParse) {
    if (stringToParse.length > 1 && stringToParse.length < 15) {
        return true;
    } else {
        // console.log('The First Name entered is either too short or too long.');
        return false;
    };
};


// function isCorrectLength2() {

//     if (lastName.length > 1 && lastName.length < 15) {

//     } else {
//         console.log('The Last Name entered is either too short or too long.');
//     };
// };



// function emailCorrectFormat(stringToParse) {
//     if (stringToParse.length > 1 && stringToParse.includes('@') && stringToParse.includes('.')) {
//         return true;
//     } else {
//         console.log('Email address not valid')
//         return false;
//     }
// };

function emailCorrectFormat(stringToParse) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringToParse)) {
        return true;
    }
    // console.log("You have entered an invalid email address!")
    return false;
}



function checkIfAllIsValid() {
    // console.log(`fnameValid: ${fnameValid}, lnameValid: ${lnameValid}, emailValid: ${emailValid}`);
    if (fnameValid && lnameValid && emailValid) {
        signupButton.disabled = false;
        return true
    } else {
        signupError.textContent = `One or more required elements are not valid`;
        signupButton.disabled = true;
        return false
    }


}
