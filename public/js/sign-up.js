document.addEventListener('DOMContentLoaded', () => {
    const loginSwitch = document.getElementById('login-switch');
    const registerSwitch = document.getElementById('register-switch');
    const switchSelector = document.getElementById('switch-selector');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginDes = document.getElementsByClassName('login-des');
    const regDes = document.getElementsByClassName('reg-des');

    function hideElements(elements) {
        for (const el of elements) {
            el.classList.add('hide');
        }
    }

    function showElements(elements) {
        for (const el of elements) {
            el.classList.remove('hide');
        }
    }


    // Initialize with login form
    loginSwitch.style.color = '#2e7d32';
    loginSwitch.style.fontWeight = 'bold';
    registerSwitch.style.color = '#757575';
    loginForm.classList.remove('hide');
    registerForm.classList.add('hide');
    hideElements(regDes)
    showElements(loginDes)


    // Switch to login form
    loginSwitch.addEventListener('click', () => {
        switchSelector.style.transform = 'translateX(0)';
        loginSwitch.style.color = '#2e7d32';
        loginSwitch.style.fontWeight = 'bold';
        registerSwitch.style.color = '#757575';
        registerSwitch.style.fontWeight = 'normal';

        loginForm.classList.remove('hide');
        registerForm.classList.add('hide');
        hideElements(regDes)
        showElements(loginDes)



        // Reset animation
        loginForm.style.animation = 'none';
        loginForm.offsetHeight; // Trigger reflow
        loginForm.style.animation = 'fadeIn 0.5s ease-out forwards';
    });

    // Switch to register form
    registerSwitch.addEventListener('click', () => {
        switchSelector.style.transform = 'translateX(100%)';
        registerSwitch.style.color = '#2e7d32';
        registerSwitch.style.fontWeight = 'bold';
        loginSwitch.style.color = '#757575';
        loginSwitch.style.fontWeight = 'normal';

        registerForm.classList.remove('hide');
        loginForm.classList.add('hide');
        hideElements(loginDes)
        showElements(regDes)
        // Reset animation
        registerForm.style.animation = 'none';
        registerForm.offsetHeight; // Trigger reflow
        registerForm.style.animation = 'fadeIn 0.5s ease-out forwards';
    });

    // Form validation - simple example
    const loginFormEl = loginForm.querySelector('form');
    const registerFormEl = registerForm.querySelector('form');

    loginFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would normally send the data to your server
        console.log('Login form submitted', { email, password });

        // Animation feedback
        const btn = loginFormEl.querySelector('button[type="submit"]');
        btn.innerHTML = 'Signing in...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = 'Success! Redirecting...';
            btn.style.backgroundColor = '#60ad5e';

            setTimeout(() => {
                btn.innerHTML = 'Sign in';
                btn.disabled = false;
                btn.style.backgroundColor = '#2e7d32';
            }, 2000);
        }, 1500);
    });

    registerFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!terms) {
            alert('Please agree to the terms');
            return;
        }

        // Here you would normally send the data to your server
        console.log('Register form submitted', {
            firstName, lastName, email, password, terms
        });

        // Animation feedback
        const btn = registerFormEl.querySelector('button[type="submit"]');
        btn.innerHTML = 'Creating account...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = 'Account created!';
            btn.style.backgroundColor = '#60ad5e';

            setTimeout(() => {
                btn.innerHTML = 'Create Account';
                btn.disabled = false;
                btn.style.backgroundColor = '#2e7d32';
            }, 2000);
        }, 1500);
    });

    // Add input focus effects
    const inputs = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            input.style.borderColor = '#60ad5e';
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
            input.style.borderColor = '#e2e8f0';
        });
    });
});
