from django.db.models.signals import post_delete,post_save
from django.dispatch import receiver
from .models import BlogPost
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
import json
import logging

logger = logging.getLogger(__name__)

@receiver(post_save, sender=BlogPost)
def send_blog_post_update(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    data = {
        'blog': {
        'id': instance.id,
        'title': instance.title,
        'content': instance.content,
        'author': instance.author.id,
        'created_at': instance.created_at.isoformat(),
        'updated_at': instance.updated_at.isoformat(),
    },
    'action': 'update'
    }
    try:
        async_to_sync(channel_layer.group_send)(
            'blog_posts_group',
            {
                'type': 'send_update',
                'data': json.dumps(data)
            }
        )
        logger.info(f"Sent update for blog post {instance.id}")
    except Exception as e:
        logger.error(f"Error sending blog post update: {e}")

@receiver(post_delete, sender=BlogPost)
def send_blog_post_delete(sender, instance, **kwargs):
    channel_layer = get_channel_layer()
    data = {
        'id': instance.id,
        'action': 'delete'
    }
    try:
        async_to_sync(channel_layer.group_send)(
            'blog_posts_group',
            {
                'type': 'send_update',
                'data': json.dumps(data)
            }
        )
        logger.info(f"Sent delete notification for blog post {instance.id}")
    except Exception as e:
        logger.error(f"Error sending blog post delete notification: {e}")
