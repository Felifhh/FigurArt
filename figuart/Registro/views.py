from django.shortcuts import render
from django.views.generic import ListView,CreateView,DeleteView,UpdateView
from .models import Figura
from .forms import FiguraForm
from django.urls import reverse_lazy

class FiguraList (ListView):                    
    model = Figura
    template_name = 'Registro/listar_figuras.html'

class FiguraCreate (CreateView):
    model = Figura
    form_class = FiguraForm
    template_name = 'Registro/form_figura.html'
    success_url = reverse_lazy('Registro:listar_figuras.html')

class FiguraDelete(DeleteView):
    model = Figura
    template_name = 'Registro/borrar_figura.html'
    success_url = reverse_lazy('Registro:listar_figuras.html')

class FiguraUpdate(UpdateView):
    model = Figura
    form_class = FiguraForm
    template_name = 'Registro/editar_figura.html'
    success_url = reverse_lazy('Registro:listar_figuras.html')
