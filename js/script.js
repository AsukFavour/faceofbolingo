document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let dob = new Date(form.dob.value);
    let phone = form.phone.value;
    let address = form.address.value;
    let ageConfirm = form.ageConfirm.checked;
    let image = form.image.files[0];

    // Calculate age from date of birth
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (name && email && dob && phone && address && ageConfirm && image) {
        if (age >= 18 && age <= 39) {
            // Form is valid
            // Show success modal
            let modal = document.getElementById('successModal');
            modal.style.display = 'block';

            // Close modal on clicking the close button
            document.getElementsByClassName('close')[0].onclick = function() {
                modal.style.display = 'none';
            };

            // Close modal on clicking anywhere outside the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            };

            // Redirect to payment gateway
            document.getElementById('continuePayment').onclick = function() {
                window.location.href = "https://flutterwave.com/pay"; // Replace with actual Flutterwave payment link
            };
        } else {
            // Age is not within the valid range
            alert("Age must be between 18 and 39.");
        }
    } else {
        // Form is not valid
        alert("Please fill in all the fields.");
    }
});
