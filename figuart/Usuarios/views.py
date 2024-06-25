from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.generic import CreateView
from django.urls import reverse_lazy
from django.views.generic import CreateView, ListView
from .forms import RegistroForm
from django.shortcuts import render

class RegistroUsuario(CreateView):
    model = User
    template_name = 'Usuarios/RegistroUsers.html'
    form_class = RegistroForm
    success_url = reverse_lazy('Usuarios:listar_users.html')

class UserList(ListView):
    model = User
    template_name = 'Usuarios/listar_users.html'

def nosotros(request):
    return render(request, 'Plantillas/nosotros.html')

def rickapi(request):
    return render(request, 'Plantillas/RickApi.html')

def concurso(request):
    return render(request, 'Plantillas/Concurso.html')

def carrito(request):
    return render(request, 'Plantillas/Carrito.html')