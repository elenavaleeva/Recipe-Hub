// const source = document.getElementById('signup-form').innerHTML;
// const template = Handlebars.compile(source);


// const context = {
//     name: 'John Doe',
//     email: 'john.doe@example.com'
// };
// const html = template(context);
// document.getElementById('signup-form-container').innerHTML = html;

// const signupForm = document.getElementById('signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(signupForm);
//     const email = formData.get('email');
//     const password = formData.get('password');
//     const name = formData.get('name');
//     if (!email || !password || !name) {
//         return;
//     }
// });

const logout = async () => {
    const response = await fetch('../signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  

