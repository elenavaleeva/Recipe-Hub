const source = document.getElementById('login-form-template').innerHTML;
const template = Handlebars.compile(source);

const context = {
    email: 'john.doe@example.com'
};
const html = template(context);
document.getElementById('login-form-container').innerHTML = html;

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.rememberMe.checked);

    if (e.target.email.value === 'john.doe@example.com' && e.target.password.value === '123456') {
        console.log('login successful');
        window.location.href = 'index.html';
        return;
    }
});

