from urllib import response
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from  .serializers import *
from  .models import *


class AudioViewSet(viewsets.ModelViewSet):
    queryset=Audio.objects.all()
    serializer_class=AudioSerializer
    parser_classes = [MultiPartParser, FormParser]

def create(self,request ):
    try:

        pass
        if request.method =='post':
            
            audio = request.data.get('audio')
            nombre = request.data.get('nombre')
            audio = Audio.objects.create(audio=audio, nombre=nombre)
            audio.save()
           
        return Response(AudioSerializer.data, status=status.HTTP_201_CREATED)
    except:
         print(sys.exc_info())
        
         return Response("gyadvvvvvvigjndg")
                
class IvrViewSet(viewsets.ModelViewSet):
    queryset=Ivr.objects.all()
    serializer_class=IvrSerializer
    
    def create(self, request):
        if request.method == 'post':
            textos = request.data.get('contenido')
            idIvr = request.data.get('idIvr')
            texto = Texto(textos = textos, idIvr = idIvr)
            texto.save()
            serializer = TextoSerializer(texto)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class ConsultaViewSet(viewsets.ModelViewSet):
    queryset=Consulta.objects.all()
    serializer_class=ConsultaSerializer



class TextoViewSet(viewsets.ModelViewSet):
    queryset=Texto.objects.all()
    serializer_class=TextoSerializer
    
    def create(self,request):
        if (request.method == 'post'):
            Texto = request.get('mensaje')
            mensaje = Texto(mensaje = mensaje)
            mensaje.save()
            serializer = TextoSerializer(mensaje)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    


class BienvenidaViewSet(viewsets.ModelViewSet):
    queryset=Bienvenida.objects.all()
    serializer_class=BienvenidaSerializer


class TransferenciaViewSet(viewsets.ModelViewSet):
    queryset=Transferencia.objects.all()
    serializer_class=TransferenciaSerializer
    
class TiempoEsperaViewSet(viewsets.ModelViewSet):
    queryset=TiempoEspera.objects.all()
    serializer_class=TiempoEsperaSerializer