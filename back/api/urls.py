from rest_framework import routers
from .viewset import *



router = routers.SimpleRouter()
router.register('ivr', IvrViewSet)
router.register('servicio', ServicioViewSet)
router.register('consulta', ConsultaViewSet)
urlpatterns = router.urls


