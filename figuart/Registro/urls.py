from django.urls import path, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import FiguraList,FiguraCreate,FiguraDelete,FiguraUpdate

app_name = "Registro"

urlpatterns =[  path('', views.home, name='home'),
                path("listar_figuras/", FiguraList.as_view(), name="listar_figuras.html"),
                path("crear_figuras/", FiguraCreate.as_view(), name="form_figura.html"),
                path("borrar_figuras/<int:pk>", FiguraDelete.as_view(), name="borrar_figura.html"),
                path("editar_figuras/<int:pk>", FiguraUpdate.as_view(), name="editar_figura.html"),
                
]
    