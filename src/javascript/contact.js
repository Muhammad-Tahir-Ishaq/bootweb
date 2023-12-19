
const submitForm = (event) => {
    const name = document.getElementById('exampleInputName').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const message = document.getElementById('exampleFormControlTextarea1').value;
    const isChecked = document.getElementById('exampleCheck1').checked;
  
    // Perform validation if needed
  
    // Simple validation example (you may want to enhance this)
    if (name && email && message) {
      // Create an object with form data
      const formData = {
        name: name,
        email: email,
        message: message,
        isChecked: isChecked
      };
  
      // You can now send this data to your server using fetch or any other method
      // For demonstration purposes, we'll just log the data
      console.log(formData);
    } else {
      alert('Please fill in all fields.');
    }
};