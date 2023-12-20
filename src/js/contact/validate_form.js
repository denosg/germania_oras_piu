function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Te rugăm să completezi toate câmpurile.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Te rugăm să introduci o adresă de email validă.');
        return false;
    }

    alert("Formular trimis cu succes!");
    return true;
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}