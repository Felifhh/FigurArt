from django.db import models

# crearemos los modelos que al final 
# serán tablas en la base de datos

ESTADO_FIGURA = (
    ('EnStock','EnStock'),
    ('Agotado','Agotado'),
)


class Figura(models.Model):

    nombre = models.CharField(max_length=30)
    imagen = models.ImageField(upload_to='nuevasfiguras',default='default_image.jpg')
    precio = models.IntegerField()
    descripcion = models.CharField(max_length=100)
    proveedor = models.CharField(max_length=30)
    estado = models.CharField(max_length=50,choices=ESTADO_FIGURA, default='Agotado')


def __str__(self) -> str:
        return str(self.nombre)