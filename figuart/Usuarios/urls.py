from django.urls import path, include
from . import views
from .views import RegistroUsuario, UserList

urlpatterns = [
    path('registrar/', RegistroUsuario.as_view(), name="RegistroUsers.html"),
    path('listar_usuarios/', UserList.as_view(), name="listar_users.html"),
    path('nosotros/', views.nosotros, name='nosotros'),
    path('rickapi/', views.rickapi, name='rickapi'),
    path('concurso/', views.concurso, name='concurso'),
    path('carrito/', views.carrito, name='carrito'),
]