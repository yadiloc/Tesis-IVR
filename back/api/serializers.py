from rest_framework import serializers
from  .models import *


class  AudioSerializer (serializers.ModelSerializer):
    class Meta:
        model=Audio
        fields="__all__"
        
class IvrSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ivr
        fields = '__all__'
        

        
class  ConsultaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Consulta
        fields="__all__"



class TextoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Texto
        fields="__all__"

class  TransferenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Transferencia
        fields="__all__"

class  TiempoEsperaSerializer(serializers.ModelSerializer):
    class Meta:
        model=TiempoEspera
        fields="__all__"
        
        
class BienvenidaSerializer( serializers.ModelSerializer):
    class Meta:
        model=Bienvenida
        fields="__all__"
        

     