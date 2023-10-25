from django.db import models


# Create your models here.
class Ivr (models.Model):
    nombre=models.CharField( max_length=50,null=False)
    numeroAsociado=models.CharField(max_length=10,null=False)
   
    
class Servicio (models.Model):
    audio=models.FileField(upload_to=None)
    texto=models.CharField(max_length=300)
    tiempoEspera=models.FloatField
    numeroTransferencia=models.CharField(max_length=10)
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    
class Consulta (models.Model):
    datoBusqueda=models.CharField
    datoRespuesta=models.CharField
    nombreTabla=models.CharField
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)



        
