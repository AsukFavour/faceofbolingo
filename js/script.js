document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form fields
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let age = form.age.value;
    let phone = form.phone.value;
    let address = form.address.value;

    if (name && email && age && phone && address) {
        if (age >= 18 && age <= 65) {
            // Form is valid
            alert("Registration successful!");

            // Redirect to WhatsApp group link page
            window.location.href = "whatsapp-link.html";
        } else {
            // Age is not within the valid range
            alert("Age must be between 18 and 65.");
        }
    } else {
        // Form is not valid
        alert("Please fill in all the fields.");
    }
});
