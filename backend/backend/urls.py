"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .blog.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user_list/', user_list),
    path('user_details/<int:id>/', user_details),
    path('connect_user/',connect_user),
    path('blog_post_list/',blog_post_list),
    path('blog_post_list_user/<int:id>/',blog_post_list_user),
    path('blog_post_details/<int:id>/', blog_post_details),
]
