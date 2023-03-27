const signupForm = document.querySelector('.signup-form');
async function handleSignup(event) {
  console.log('signup button');
  event.preventDefault();

  const userNameValue = document.querySelector('#username-signup').value.trim();
  const passwordValue = document.querySelector('#password-signup').value.trim();
  const emailValue = document.querySelector('#email-signup').value.trim();

  const newUser = {
    username: userNameValue,
    email: emailValue,
    password: passwordValue,
  };

  const response = await fetch('/api/users/signup', {
    body: JSON.stringify(newUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('IT WORKED!');
    document.location.replace('/dashboard');
  } else {
    console.log('Dan, you screwed it up again');
  }

  signupForm.reset();
}

signupForm.addEventListener('submit', handleSignup);
