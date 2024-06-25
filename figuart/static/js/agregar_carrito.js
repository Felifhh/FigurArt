function agregarAlCarrito(figuraId) {
    $.post('/agregar_al_carrito/', {'figura_id': figuraId}, function(data) {

      alert('Producto agregado al carrito');
    });
  }
  