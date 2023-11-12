import uuid
from django.db import models


# Create your models here.
class Ivr (models.Model):
    nombre=models.CharField( max_length=50,null=False)
    numeroAsociado=models.CharField(max_length=10,null=False)
    fecha=models.DateTimeField(auto_now_add=True)
   

class Audio (models.Model):
    audios= models.FileField(upload_to="audio/")
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True, editable=False)
class Texto (models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    contenido = models.CharField(max_length=400)
    idivr = models.ForeignKey(Ivr, on_delete=models.CASCADE)

class Transferencia(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    numeroTelf=models.CharField(max_length=10)
    tiempoEspera=models.IntegerField()
    melodia=models.FileField(upload_to= "audio/" , blank=True,  null=True )
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class TiempoEspera(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    tiempo=models.CharField(max_length=2)
   

class Bienvenida(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    mess=models.CharField( blank=True, null=True , max_length=250)
    musica=models.FileField(upload_to= "bienvenida/",blank=True,  null=True )
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
      
    
class Consulta (models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    datoBusqueda=models.CharField
    datoRespuesta=models.CharField
    nombreTabla=models.CharField
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)

class IvrAgregation(models.Model):
    idivr=models.IntegerField
    idaudio= models.IntegerField (blank=True, null=True)
    idtexto =models.IntegerField (blank=True, null=True)
    idbienvenida= models.IntegerField (blank=True, null=True)
    idtiempo= models.IntegerField (blank=True, null=True)
    idtransferencia=models.IntegerField(blank=True, null=True)