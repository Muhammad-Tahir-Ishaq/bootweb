const signIn = (event) => {
  // event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Email:", email);
  console.log("Password:", password);

  if (email === "" || password === "") {
    console.log("Please fill in all fields");
    alert("Please fill in all fields");
    return;
  }

  // Additional validation or sign-in logic can be added here
  // For simplicity, let's assume a successful sign-in
  console.log("Sign-in successful!");
  alert("Sign-in successful!");
};

document.getElementById("signInForm").addEventListener("submit", signIn);
    