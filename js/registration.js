 document.getElementById("myForm").addEventListener("submit", function(event) {
    var form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault(); // Prevent form submission if validation fails
      alert("Please fill in all required fields.");
    }
  });