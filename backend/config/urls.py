from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    #path("api/", include("api.urls")),  # ignore api urls for now until we have endpoints set up
]
