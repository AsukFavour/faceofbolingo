document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate form fields
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let age = form.age.value;
    let phone = form.phone.value;
    let address = form.address.value;
    let photo = form.photo.files[0];

    if (name && email && age && phone && address && photo) {
        // Form is valid
        alert("Registration successful!");

        // Redirect to WhatsApp group link page
        window.location.href = "whatsapp-link.html";
    } else {
        // Form is not valid
        alert("Please fill in all the fields.");
    }
});
