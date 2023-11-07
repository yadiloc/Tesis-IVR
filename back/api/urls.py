from rest_framework import routers
from .viewset import *



router = routers.SimpleRouter()
router.register('ivr', IvrViewSet)
router.register('tiempoespera', TiempoEsperaViewSet)
router.register('consulta', ConsultaViewSet)
router.register('audio', AudioViewSet)
router.register('texto', TextoViewSet)
router.register('transferencia', TransferenciaViewSet)
router.register('bienvenida', BienvenidaViewSet)
urlpatterns = router.urls


