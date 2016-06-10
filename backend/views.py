from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponseRedirect
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from backend.models import *

"""
class AllComments(APIView):
    def get(self, request):
        comments = map(lambda c: {"id": c.id, "text": c.text, "author": c.author}, Comment.objects.all())
        return Response(comments)

    def post(self, request):
        author = request.POST.get('author')
        text = request.POST.get('text')
        new_comment = Comment(author=author, text=text)
        new_comment.save()
        comments = map(lambda c: {"id": c.id, "text": c.text, "author": c.author}, Comment.objects.all())
        return Response(comments)
"""

class Serializers(object):
    @staticmethod
    def video_serializer(video):
        data = {}
        data["url"] = video.yt_url
        data["name"] = video.name
        data["timestamp"] = video.timestamp
        data["yt_id"] = video.yt_url.split("v=")[1].split("&")[0]
        data["id"] = video.id
        return data

    @staticmethod
    def topic_seralizer(topic):
        data = {}
        data["name"] = topic.name
        data["time"] = topic.time
        data["id"] = topic.id
        return data

class AllVideos(APIView):
    def get(self, request):
        videos = Video.objects.all().order_by("-timestamp")
        videos_data = map(Serializers.video_serializer, videos)
        return Response(videos_data)

class UploadVideo(View):
    def post(self, request):
        name = request.POST.get('name')
        url = request.POST.get('url')
        video = Video(name=name, yt_url=url)
        video.save()
        video_data = Serializers.video_serializer(video)
        return JsonResponse(video_data)

class VideoData(APIView):
    def get(self, request, v_id):
        video = Video.objects.get(id=v_id)
        video_data = Serializers.video_serializer(video)
        topics = video.topics.all().order_by('time')
        topics_data = map(Serializers.topic_seralizer, topics)
        return Response({'video_data': video_data, 'topics': topics_data})

class NewTopic(View):
    def post(self, request):
        name = request.POST.get('name')
        time = request.POST.get('time')
        v_id = request.POST.get('v_id')
        video = Video.objects.get(id=v_id)
        topic = Topic(video=video, name=name, time=time)
        topic.save()
        topic_data = Serializers.topic_seralizer(topic)
        return JsonResponse(topic_data)




