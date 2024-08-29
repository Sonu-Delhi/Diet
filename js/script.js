function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'none' || formContainer.style.display === '' ? 'block' : 'none';
}

function validateAndSend() {
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        return false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add('is-invalid');
        return false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Redirect to Thank You page
    sendToWhatsApp();
    window.location.href = "thanks.html";
    return false; // Prevent default form submission
}

function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const query = document.getElementById('query').value;

    const message = `*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Query:* ${query}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=9125403859&text=${message}`;

    window.open(whatsappURL, '_blank');
}