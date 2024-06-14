$(document).ready(function () {
    
    $('#Enviar-form').click(function (e) {
        e.preventDefault();
        $('.error-message').text(''); 
        $('#success-message').hide(); 

        var name = $('#name').val();
        var rut = $('#rut').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var tel = $('#tel').val();

 
        if (name.length < 3) {
            $('#error-name').text('El nombre debe tener al menos 3 caracteres.');
            $('#name').val(''); 
            return;
        }

        var rutRegex = /^[0-9]+-[0-9kK]{1}$/;
        if (!rut.match(rutRegex)) {
            $('#error-rut').text('El Rut ingresado no es válido.');
            $('#rut').val('');
            return;
        }

        var emailRegex = /\S+@\S+\.\S+/;
        if (!email.match(emailRegex)) {
            $('#error-email').text('El correo electrónico ingresado no es válido.');
            $('#email').val('');
            return;
        }

        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{5,}$/;
        if (!password.match(passwordRegex)) {
            $('#error-password').text('Debe tener al menos 5 caracteres, una mayúscula y un número.');
            $('#password').val('');
            return;
        }

        var telRegex = /^[0-9]{9}$/;
        if (!tel.match(telRegex)) {
            $('#error-tel').text('El teléfono debe contener 9 números.');
            $('#tel').val('');
            return;
        }

         $('#success-message').show().delay(3000).fadeOut(); 


        $('#success-message').show();

        $('#contact-form').submit();
    });

    $('#show-password').click(function () {
        var passwordField = $('#password');
        var passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).text('Ocultar contraseña');
        } else {
            passwordField.attr('type', 'password');
            $(this).text('Mostrar contraseña');
        }
    });
});