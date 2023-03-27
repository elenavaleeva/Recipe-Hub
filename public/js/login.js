const loginForm = document.querySelector('#login-form');


async function handleLogin(event) {
  console.log('login button?');
  event.preventDefault();

  const emailValue = document.querySelector('#email').value.trim();
  const passwordValue = document.querySelector('#password').value.trim();

  const loginUser = {
    email: emailValue,
    password: passwordValue,
  };

  const response = await fetch('/api/users/login', {
    body: JSON.stringify(loginUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('IT WORKED!');
    document.location.replace('/home');
  } else {
    console.log('It wasnt me');
  }

  loginForm.reset();
}


loginForm.addEventListener('submit', handleLogin);