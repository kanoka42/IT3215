let $ = function (id) { return document.getElementById(id); };
let _ = function (name) { return document.getElementsByName(name); };
let stringNumberReg = `^[a-zA-Z0-9-]*$`;
let emailReg = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
let phoneReg = '^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$';
let allErrors = [];

const isEmpty = (userString) => {
    let str = userString.trim().length;
    return !str;
};

const isError = (id, message) => {
    let name = id.replace("Error", "");
    $(id).innerText = `\u26a0 ${message}`;
    allErrors.push(_(name)[0]);
}

const isValid = (id) => {
    let name = id.replace("Error", "");
    let ele = _(name)[0];

    $(id).innerText = "";

    let index = allErrors.indexOf(ele);
    if (index > -1) {
        allErrors.splice(index, 1);
    }

}

const validateUserName = (userName) => {
    if (isEmpty(userName)) {
        isError('userNameError', "You must enter a user name!");
    } else if (!userName.match(stringNumberReg)) {
        isError('userNameError', "A user name can only be letters and numbers!");
    } else {
        isValid("userNameError");
    }
}

const validatePassword = (password) => {
    if (isEmpty(password)) {
        isError('passwordError', "A password is required!");
    } else if (password.length < 8) {
        isError('passwordError', "A password must be greater than 8 characters!");
    } else {
        isValid("passwordError");
    }
}

const validateVerify = (verify, password) => {
    if (isEmpty(verify)) {
        isError('passwordVerifyError', "You must enter a password!");
    }
    else if (verify !== password) {
        isError('passwordVerifyError', "Your passwords do not match!");
    } else {
        isValid('passwordVerifyError');
    }
}

const validateFirstName = (firstName) => {
    if (isEmpty(firstName)) {
        isError('firstNameError', "A first name is required!");
    } else {
        isValid('firstNameError');
    }
}

const validateLastName = (lastName) => {
        if (isEmpty(lastName)) {
            isError('lastNameError', "A last name is required!");
        } else {
            isValid('lastNameError');
        }
}

const validateEmail = (email) => {
    if (isEmpty(email)) {
        isError('emailError', "An email is required!");
    } else if (!email.match(emailReg) ) {
        isError('emailError', 'You must enter a valid email!')

    } else {
        isValid('emailError');
    }
}

const validatePhone = (phone) => {
    if (isEmpty(phone)) {
        isError('phoneNumberError', "A phone number is required!");
    } else if (!phone.match(phoneReg) ) {
        isError('phoneNumberError', 'You must enter a valid phone number!')

    } else {
        isValid('phoneNumberError');
    }
}


function validateFields(form) {

    allErrors = [];

    validateUserName(form.userName.value);
    validatePassword(form.password.value);
    validateVerify(form.passwordVerify.value, form.password.value);
    validateFirstName(form.firstName.value);
    validateLastName(form.lastName.value);
    validateEmail(form.email.value);
    validatePhone(form.phoneNumber.value);

    if (allErrors === []) {
        return true;
    } else {
        allErrors[0].focus();
        return false;
    }
}
