from django.db import models


# Create your models here.
class Ivr (models.Model):
    nombre=models.CharField( max_length=50,null=False)
    numeroAsociado=models.CharField(max_length=10,null=False)
    fecha=models.DateTimeField(auto_now_add=True)
   

class Audio (models.Model):
    audios= models.FileField(upload_to="audio/")
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)

class Texto (models.Model):
    contenido = models.CharField(max_length=400)
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class Transferencia(models.Model):
    numeroTelf=models.CharField(max_length=10)
    tiempoEspera=models.IntegerField()
    melodia=models.FileField(upload_to= "audio/" )
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
    

class TiempoEspera(models.Model):
    tiempo=models.IntegerField
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)

class Bienvenida(models.Model):
    mess=models.CharField( blank=True, null=True , max_length=250)
    musica=models.FileField(upload_to= "bienvenida/",blank=True,  null=True )
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)
      
    
class Consulta (models.Model):
    datoBusqueda=models.CharField
    datoRespuesta=models.CharField
    nombreTabla=models.CharField
    idivr=models.ForeignKey(Ivr, on_delete=models.CASCADE)



        
