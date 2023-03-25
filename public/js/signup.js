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

// const logout = async () => {
//     const response = await fetch('../signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);
  
const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("signup-username");
const passwordInput = document.getElementById("signup-password");
const errorLabel = document.getElementById("signup-error");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // perform input validation
  if (!username || !password) {
    errorLabel.textContent = "Please enter both username and password.";
    return;
  }

  // perform server-side validation and submit form
  // (you can replace this with your own implementation)
  fetch("/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        errorLabel.textContent = data.error;
      } else {
        alert("Sign up successful!");
        form.reset();
      }
    })
    .catch((error) => {
      console.error(error);
      errorLabel.textContent = "An error occurred, please try again later.";
    });
});


