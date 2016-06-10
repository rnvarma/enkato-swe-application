from django.conf.urls import url
from django.contrib import admin

from backend.views import *

urlpatterns = [
    # url(r'^1/allcomments$', AllComments.as_view())
    url(r'^1/allvideos$', AllVideos.as_view()),
    url(r'^1/uploadvideo$', UploadVideo.as_view()),
    url(r'^1/video/(?P<v_id>[a-zA-Z0-9_.-]+)$', VideoData.as_view()),
    url(r'^1/newtopic', NewTopic.as_view())
]