from urllib import response
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from  .serializers import *
from  .models import *
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser, JSONParser

class AudioViewSet(viewsets.ModelViewSet):
    queryset=Audio.objects.all()
    serializer_class=AudioSerializer
    
@parser_classes([MultiPartParser, JSONParser ])
def create(self, request, *args, **kwargs):
        idivr = kwargs['idivr']
        request.data['ivr'] = idivr
        print(request.data)
        print(idivr)
        return super(AudioViewSet, self).create(request, *args, **kwargs)
       
class IvrViewSet(viewsets.ModelViewSet):
    queryset=Ivr.objects.all()
    serializer_class=IvrSerializer
    
    
class ConsultaViewSet(viewsets.ModelViewSet):
    queryset=Consulta.objects.all()
    serializer_class=ConsultaSerializer



class TextoViewSet(viewsets.ModelViewSet):
    queryset=Texto.objects.all()
    serializer_class=TextoSerializer
    
    
class TransferenciaViewSet(viewsets.ModelViewSet):
    queryset=Transferencia.objects.all()
    serializer_class=TransferenciaSerializer
    
class TiempoEsperaViewSet(viewsets.ModelViewSet):
    queryset=TiempoEspera.objects.all()
    serializer_class=TiempoEsperaSerializer
    
class BienvenidaViewSet(viewsets.ModelViewSet):
    queryset=Bienvenida.objects.all()
    serializer_class=BienvenidaSerializer