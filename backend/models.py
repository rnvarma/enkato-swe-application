from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.

class Video(models.Model):
    yt_url = models.CharField(max_length=200, default="")
    name = models.CharField(max_length=200, default="")
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class Topic(models.Model):
    video = models.ForeignKey(Video, related_name="topics")
    name = models.CharField(max_length=200, default="")
    time = models.IntegerField(default=0)

    def __str__(self):
        return self.name