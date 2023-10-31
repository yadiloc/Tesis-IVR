from django.db import models


# Create your models here.
class Ivr (models.Model):
    nombre=models.CharField( max_length=50,null=False)
    numeroAsociado=models.CharField(max_length=10,null=False)
    fecha=models.DateTimeField(auto_now_add=True)
   

class Audio (models.Model):
    audios= models.FileField(upload_to='audios/')
    nombre = models.CharField(max_length=100)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
 
    

class Texto (models.Model):
    textos = models.CharField(max_length=400)
    idtxt=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class Bienvenida(models.Model):
    audio = models.FileField(upload_to="audio/")
    textos = models.CharField(max_length=400)
    idbienv=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class Transferencia(models.Model):
    numeroTelf=models.CharField(max_length=10)
    tiempoEspera=models.IntegerField()
    audios=models.FileField(upload_to="audio/")
    idllamda=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class TiempoEspera(models.Model):
    tiempo=models.IntegerField
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    
    
class Consulta (models.Model):
    datoBusqueda=models.CharField
    datoRespuesta=models.CharField
    nombreTabla=models.CharField
    idtime=models.ForeignKey(Ivr, on_delete=models.CASCADE)



        
