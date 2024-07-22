import json
import logging
from channels.generic.websocket import AsyncWebsocketConsumer

logger = logging.getLogger(__name__)

class BlogPostConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add(
            'blog_posts_group',
            self.channel_name
        )
        await self.accept()
        logger.info('WebSocket connection accepted')

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            'blog_posts_group',
            self.channel_name
        )
        logger.info(f'WebSocket connection closed: {close_code}')

    async def send_update(self, event):
        # Log the event data being sent
        logger.info(f"Sending update with data: {event['data']}")
        message = event['data']
        await self.send(text_data=message)
