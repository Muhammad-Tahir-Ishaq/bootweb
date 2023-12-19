const signUp = (event) => {
  // event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  if (username === "" || email === "" || password === "") {
    console.log("Please fill in all fields");
    alert("Please fill in all fields");
    return;
  }

  // Additional validation or sign-up logic can be added here
  // For simplicity, let's assume a successful sign-up
  console.log("Sign-up successful!");
  alert("Sign-up successful!");
};

document.getElementById("signUpForm").addEventListener("submit", signUp);



