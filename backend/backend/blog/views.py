from django.http import JsonResponse
from django.contrib.auth import authenticate
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET','POST'])

def user_list(request):
    if request.method=='GET':
        users=User.objects.all()
        serializers=UserSerializer(users,many=True)
        return JsonResponse({'users':serializers.data})
    
    if request.method=='POST':
        serializer=UserSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
        
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET','PUT','DELETE'])

def user_details(request,id):
    try:
        user=User.objects.get(pk=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=UserSerializer(user)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST'])
def connect_user(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        
        if user is not None:
            serializer = UserSerializer(user)
            return Response(serializer.data)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({"error": "Method not allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    

@api_view(['GET','POST'])
        
def blog_post_list(request):
    if request.method=='GET':
        blog_post=BlogPost.objects.all()
        serializers=BlogPostSerializer(blog_post,many=True)
        return JsonResponse({'blog_post':serializers.data})
    
    if request.method=='POST':
        serializer=BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET'])
        
def blog_post_list_user(request,id):
    if request.method=='GET':
        blog_post=BlogPost.objects.filter(author_id=id)
        serializers=BlogPostSerializer(blog_post,many=True)
        return JsonResponse({'blog_post':serializers.data})

        
        
@api_view(['GET','PUT','DELETE'])

def blog_post_details(request,id):
    try:
        blog_post=BlogPost.objects.get(pk=id)
    except BlogPost.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=BlogPostSerializer(blog_post)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=BlogPostSerializer(blog_post,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':  
        blog_post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
