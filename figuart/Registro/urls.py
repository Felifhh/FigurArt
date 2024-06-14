from django.urls import path, re_path

from django.conf import settings
from django.conf.urls.static import static
from .views import FiguraList,FiguraCreate,FiguraDelete,FiguraUpdate

app_name = "Registro"

urlpatterns =[  path("listar/", FiguraList.as_view(), name="listar_figuras.html"),
                path("crear/", FiguraCreate.as_view(), name="form_figura.html"),
                path("borrar/<int:pk>", FiguraDelete.as_view(), name="borrar_figura.html"),
                path("editar/<int:pk>", FiguraUpdate.as_view(), name="editar_figura.html"),
]
    