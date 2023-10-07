document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successNotification = document.querySelector('.notification.is-success');
    const errorNotification = document.querySelector('.notification.is-error');
    const deleteButtons = document.querySelectorAll('.delete');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Send POST request using fetch()
        fetch('https://eox49ed2rdqqviy.m.pipedream.net', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Show success notification
                successNotification.style.display = 'block';
            } else {
                // Show error notification
                errorNotification.style.display = 'block';
            }
            // Clear the form fields after submission
            form.reset();
        })
        .catch(error => {
            // Show error notification if there is a network error
            errorNotification.style.display = 'block';
            // Handle other errors here
            console.error('Error:', error);
        });

        // Hide notifications when delete button is clicked
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                successNotification.style.display = 'none';
                errorNotification.style.display = 'none';
            });
        });
    });
});