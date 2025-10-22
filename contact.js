document.getElementById('current-year').textContent = new Date().getFullYear()

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const subjectInput = document.getElementById('contact-subject');
const messageInput = document.getElementById('contact-message');
const successMessage = document.getElementById('success-message');

const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const subjectError = document.getElementById('error-subject');
const messageError = document.getElementById('error-message');

const validateName = () => {
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.textContent = 'Full name is required';
        nameInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    nameError.textContent = '';
    nameInput.setAttribute('aria-invalid', 'false');
    return true;
};

const validateEmail = () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        emailError.textContent = 'Email address is required';
        emailInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address (e.g., name@example.com)';
        emailInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    emailError.textContent = '';
    emailInput.setAttribute('aria-invalid', 'false');
    return true;
};

const validateSubject = () => {
    const subject = subjectInput.value.trim();
    if (subject === '') {
        subjectError.textContent = 'Subject is required';
        subjectInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    subjectError.textContent = '';
    subjectInput.setAttribute('aria-invalid', 'false');
    return true;
};

const validateMessage = () => {
    const message = messageInput.value.trim();
    
    if (message === '') {
        messageError.textContent = 'Message is required';
        messageInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        messageInput.setAttribute('aria-invalid', 'true');
        return false;
    }
    
    messageError.textContent = '';
    messageInput.setAttribute('aria-invalid', 'false');
    return true;
};

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        nameError.textContent = '';
        nameInput.setAttribute('aria-invalid', 'false');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        emailError.textContent = '';
        emailInput.setAttribute('aria-invalid', 'false');
    }
});

subjectInput.addEventListener('input', () => {
    if (subjectInput.value.trim() !== '') {
        subjectError.textContent = '';
        subjectInput.setAttribute('aria-invalid', 'false');
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        messageError.textContent = '';
        messageInput.setAttribute('aria-invalid', 'false');
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    successMessage.style.display = 'none';
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        successMessage.style.display = 'flex';
        
        contactForm.reset();
        
        nameInput.setAttribute('aria-invalid', 'false');
        emailInput.setAttribute('aria-invalid', 'false');
        subjectInput.setAttribute('aria-invalid', 'false');
        messageInput.setAttribute('aria-invalid', 'false');
        
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        successMessage.focus();
    } else {
        if (!isNameValid) {
            nameInput.focus();
        } else if (!isEmailValid) {
            emailInput.focus();
        } else if (!isSubjectValid) {
            subjectInput.focus();
        } else if (!isMessageValid) {
            messageInput.focus();
        }
    }
});