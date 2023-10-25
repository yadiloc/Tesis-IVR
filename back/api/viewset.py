from urllib import response
from rest_framework import viewsets, status
from rest_framework.response import Response

from  .serializers import *
from  .models import *


class IvrViewSet(viewsets.ModelViewSet):
    queryset=Ivr.objects.all()
    serializer_class=IvrSerializer
    
         
class ServicioViewSet(viewsets.ModelViewSet):
     queryset=Servicio.objects.all()
     serializer_class=ServicioSerializer

class ConsultaViewSet(viewsets.ModelViewSet):
    queryset=Consulta.objects.all()
    serializer_class=ConsultaSerializer
