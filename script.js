// Add JavaScript functionality if needed
console.log("Website loaded successfully!");
// Register function
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Save the user data to localStorage
    const user = {
      username: username,
      email: email,
      password: password
    };
    
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    
    // Redirect to login page
    window.location.href = 'login.html';
  });
}

// Login function
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    
    // Retrieve the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    // Check if the username and password match
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
      alert('Login successful!');
      
      // Redirect to the portfolio home page
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials, please try again.');
    }
  });
}
