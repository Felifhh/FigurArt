$('#submit-form-api').click(function (event) {
    event.preventDefault();
    var Episodio = $("#Episodio").val();


    $.ajax({
        url: 'https://rickandmortyapi.com/api/episode/' + Episodio,
        data: {
            format: 'json'
        },
        error: function () {
            $('#info-api').html('<p>No se ha encontrado el episodio</p>');
        },
        dataType: 'Json',
        success: function (data) {
            console.log(data);                                                                                                                                                                  
            var $nombre = $('<h1>').text(data.name);
            var $fecha_emision = $('<p>').text(data.air_date);

            var $personajes = $('<ul>'); 
                data.characters.forEach(function (characterUrl) {
                    $.ajax({
                        url: characterUrl,
                        dataType: 'json',
                        success: function (characterData) {
                            if (characterData && characterData.image) {
                                var $characterImg = $('<img>').attr('src', characterData.image);
                                $personajes.append($('<li>').append($characterImg));
                            }
                        },
                        error: function () {
                            console.log('Error al obtener información del personaje');
                        }
                    });
                });
                $("#info-api").empty();
                $('#info-api')
                .append($nombre)
                .append($fecha_emision)
                .append($personajes);                                   
        },
        type: 'GET'
        });
});
