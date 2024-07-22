from django.urls import re_path
from .consumer import BlogPostConsumer

websocket_urlpatterns = [
    re_path(r'ws/blog_posts/', BlogPostConsumer.as_asgi()),

]
