from .models import Figura
from django import forms

class FiguraForm(forms.ModelForm):
    class Meta:
        model = Figura
        fields = (
            'imagen',
            'nombre',
            'precio',
            'descripcion',
            'proveedor',
            'estado'
        )
        labels = {
            'imagen':'imagen de la Figura',
            'nombre':'Nombre de la Figura',
            'precio':'Precio de la Figura',
            'descripcion':'Descripcion breve de la Figura',
            'proveedor': 'Proveedor de la Figura',
            'estado':'Estado de la Figura'
        }
        widgets = {
            #'imagen':forms.FileInput(attrs={'class':'form-control','type':'file'}),
            'nombre':forms.TextInput(attrs={'class':'form-control'}),
            'precio':forms.NumberInput(attrs={'class':'form-control'}),
            'descripcion':forms.TextInput(attrs={'class':'form-control'}),
            'proveedor':forms.TextInput(attrs={'class':'form-control'}),
            'estado':forms.Select(choices="ESTADO_FIGURA", attrs={'class':'form-control'}),
        }
