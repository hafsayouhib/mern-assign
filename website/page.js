// script.js
$(document).ready(function() {
    $('#delivery-form').submit(function(event) {
        event.preventDefault();
        
        // Collect form data
        const name = $('#name').val();
        const address = $('#address').val();
        const phone = $('#phone').val();
        
        // Perform some validation here if needed
        
        // Display delivery status
        const deliveryStatus = `Delivery request for ${name} at ${address} (${phone}) has been submitted.`;
        $('#delivery-status').html(deliveryStatus);
        
        // You can also send this information to your server for processing here
    });
});
