
function getFormData(formName) {
    let formEl = document.forms[formName];
    const formData = new FormData(formEl);

    for (let key of formData.keys()) {
        document.cookie = `${key}=${formData.get(key)}`;
    }

    window.location.href = '/confirm.html';

}