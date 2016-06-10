from django.conf.urls import url
from django.contrib import admin

from home.views import *

urlpatterns = [
    url(r'^$', HomePage.as_view()),
    url(r'^v/(?P<v_id>[a-zA-Z0-9_.-]+)', VideoPage.as_view())
]