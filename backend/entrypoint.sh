#!/bin/sh

python manage.py makemigrations
# Run database migrations
python manage.py migrate

# Collect static files
python manage.py collectstatic --noinput

# Start the Daphne server
exec daphne -b 0.0.0.0 -p 8000 backend.asgi:application
