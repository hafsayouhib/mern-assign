 $(document).ready(function() {
            $('#myForm').submit(function(event) {
                event.preventDefault();

         var name = $('#name').val().trim();
            var email = $('#email').val().trim();
     var lastname = $('#phone').val().trim();
                var appointmentDate = $('#appointmentDate').val().trim();
                var password = $('#quantity').val();
				 var message= $('#message').val();
             

                if (name === '' || email === '' || lastname === '' || appointmentDate === ''  || quantity === '' ) {
                    alert('Please fill out all fields.');
                    return;
                }
				   
	var selectedDate = new Date(appointmentDate);

        // Define the allowed date range
        var startDate = new Date('1990-01-01'); // January 1, 1990
        var endDate = new Date('2023-12-31');   
		// December 31, 2023
		if (selectedDate < startDate || selectedDate > endDate) {
            alert('Please enter a date between 1990 and 2023.');
            return;
        }

				
        


          var formData = $(this).serialize();
          $.ajax({
             type: 'POST',
               url: 'https://reqres.in/api/users', 
              data: formData,
                })
                .done(function(response) {
                    console.log(response);
            
            $('#formDataDisplay').html('<p>Serialized DATA OF YOUR RESERVATION:</p><pre>' + formData +  '</pre>');
            
            // Show the success message
            $('#successMessage').show();
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    alert('An error occurred while creating the user.');
                });
            });
        });