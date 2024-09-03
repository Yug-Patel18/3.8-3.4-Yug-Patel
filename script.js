console.log("script.js");

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = parseInt(document.getElementById('age').value, 10);
            const careers = [];
            form.querySelectorAll('input[name="careers[]"]:checked').forEach((checkbox) => {
                careers.push(checkbox.value);
            });

            // Validate name and email length
            if (name.length > 30) {
                alert('Name cannot be more than 30 characters.');
                return; // Prevent form submission
            }

            if (email.length > 30) {
                alert('Email cannot be more than 30 characters.');
                return; // Prevent form submission
            }
            // Age validation
            if (age < 15 || age > 90) {
                alert('Please enter an age between 15 and 90.');
                return; // Prevent form submission
            }
            // Validate at least one career selection
            if (careers.length === 0) {
                alert('Please select at least one tech career.');
                return; // Prevent form submission
            }

            // Sanitize the email to use it as a Firebase key
            const sanitizedEmail = email.replace(/[.#$[\]]/g, '');

            // Save data to Firebase
            const formData = {
                name: name,
                email: email, // Original email is saved in the data
                age: age,
                careers: careers
            };

            // Using the sanitized email as the key in the 'users/' node
            database.ref('users/' + sanitizedEmail).set(formData)
            .then(() => {
                alert('Data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
        });
    }
});