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
    if (loginSwitch) {
        loginSwitch.style.color = '#2e7d32';
        loginSwitch.style.fontWeight = 'bold';
    }
    if (registerSwitch) {
        registerSwitch.style.color = '#757575';
    }
    if (loginForm) {
        loginForm.classList.remove('hide');
    }
    if (registerForm) {
        registerForm.classList.add('hide');
    }
    hideElements(regDes);
    showElements(loginDes);

    // Switch to login form
    if (loginSwitch) {
        loginSwitch.addEventListener('click', () => {
            switchSelector.style.transform = 'translateX(0)';
            loginSwitch.style.color = '#2e7d32';
            loginSwitch.style.fontWeight = 'bold';
            registerSwitch.style.color = '#757575';
            registerSwitch.style.fontWeight = 'normal';

            loginForm.classList.remove('hide');
            registerForm.classList.add('hide');
            hideElements(regDes);
            showElements(loginDes);

            // Reset animation
            loginForm.style.animation = 'none';
            loginForm.offsetHeight; // Trigger reflow
            loginForm.style.animation = 'fadeIn 0.5s ease-out forwards';
        });
    }

    // Switch to register form
    if (registerSwitch) {
        registerSwitch.addEventListener('click', () => {
            switchSelector.style.transform = 'translateX(100%)';
            registerSwitch.style.color = '#2e7d32';
            registerSwitch.style.fontWeight = 'bold';
            loginSwitch.style.color = '#757575';
            loginSwitch.style.fontWeight = 'normal';

            registerForm.classList.remove('hide');
            loginForm.classList.add('hide');
            hideElements(loginDes);
            showElements(regDes);
            // Reset animation
            registerForm.style.animation = 'none';
            registerForm.offsetHeight; // Trigger reflow
            registerForm.style.animation = 'fadeIn 0.5s ease-out forwards';
        });
    }

    // Form validations
    if (loginForm) {
        const loginFormEl = loginForm.querySelector('form');
        loginFormEl.addEventListener('submit', (e) => {
            // Allow the normal form submission to proceed
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (!email || !password) {
                e.preventDefault(); // Only prevent if validation fails
                alert('Please fill in all fields');
                return;
            }

            // Visual feedback only - don't prevent default
            const btn = loginFormEl.querySelector('button[type="submit"]');
            btn.innerHTML = 'Signing in...';
            // Don't disable the button or it won't submit
        });
    }

    if (registerForm) {
        const registerFormEl = registerForm.querySelector('form');
        registerFormEl.addEventListener('submit', (e) => {
            const firstName = document.getElementById('firstname').value;
            const lastName = document.getElementById('lastname').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const terms = document.getElementById('terms').checked;

            // Validation
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match');
                return;
            }

            if (!terms) {
                e.preventDefault();
                alert('Please agree to the terms');
                return;
            }

            // Visual feedback only - don't prevent default if validation passes
            const btn = registerFormEl.querySelector('button[type="submit"]');
            btn.innerHTML = 'Creating account...';
            // Don't disable the button or it won't submit
        });
    }

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