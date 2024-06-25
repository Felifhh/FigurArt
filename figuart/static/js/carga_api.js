$('#submit-form-api').click(function (event) {
    event.preventDefault();
    var episodio = $("#Episodio").val();

    if (episodio) {
        $.ajax({
            url: 'https://rickandmortyapi.com/api/episode/' + episodio,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var $nombre = $('<h1>').text(data.name);
                var $fechaEmision = $('<p>').text(data.air_date);
                var $personajes = $('<ul>');

                var characterPromises = data.characters.map(function (characterUrl) {
                    return $.ajax({
                        url: characterUrl,
                        dataType: 'json'
                    });
                });

                $.when.apply($, characterPromises).then(function () {
                    for (var i = 0; i < arguments.length; i++) {
                        var characterData = arguments[i][0];
                        if (characterData && characterData.image) {
                            var $characterImg = $('<img>').attr('src', characterData.image);
                            $personajes.append($('<li>').append($characterImg));
                        }
                    }
                    $("#info-api").empty();
                    $('#info-api')
                        .append($nombre)
                        .append($fechaEmision)
                        .append($personajes);
                }).fail(function () {
                    console.log('Error al obtener información de los personajes');
                });
            },
            error: function () {
                $('#info-api').html('<p>No se ha encontrado el episodio</p>');
            }
        });
    } else {
        $('#info-api').html('<p>Por favor, ingrese un número de episodio.</p>');
    }
});

