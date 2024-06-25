// Función para validar el RUT chileno
$.validator.addMethod("rut", function(value, element) {
    // Eliminar puntos y guión del RUT (si los hay)
    value = value.replace(/\./g,'').replace(/\-/g,'');

    // Extraer el dígito verificador
    var dv = value.slice(-1);
    var rut = parseInt(value.slice(0,-1), 10);

    // Calcular el dígito verificador esperado
    var suma = 0;
    var multiplo = 2;
    while (rut > 0) {
        suma += (rut % 10) * multiplo;
        rut = Math.floor(rut / 10);
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }
    var dvEsperado = 11 - (suma % 11);
    dvEsperado = (dvEsperado === 11) ? 0 : ((dvEsperado === 10) ? 'K' : dvEsperado);

    // Comparar el dígito verificador ingresado con el esperado
    return dvEsperado == dv.toUpperCase();
}, "Por favor, ingrese un RUT válido");

$(document).ready(function(){
    $('#form_concurso').validate({
        rules: {
            fullname:{
                required: true,
                minlength: 5
            },
            rut: {
                required: true,
                rut: true
            },
            email:{
                required:true,
                email:true
            },
            comments:{
                required:true
            },
            agree: "required",
            count: "required"
        },
        messages: {           
            fullname: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            rut: {
                required: "Por favor, ingrese su RUT",
                rut: "Por favor, ingrese un RUT válido"
            },
            email: "Por favor ingresa un correo válido",
            comments: "Por favor ingresa un comentario",
            count: "Seleccione una opción",
            agree: "Por favor acepta nuestra política",
        }
    });
});
