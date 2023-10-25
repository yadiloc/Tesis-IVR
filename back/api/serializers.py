from rest_framework import serializers
from  .models import *



class IvrSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ivr
        fields="__all__"
        
class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Servicio
        fields="__all__"
        
class  ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Consulta
        fields="__all__"
        

     