# The MIT License (MIT)
#
# Copyright (c) 2015 pjwards.com
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
# ==================================================================================
""" Provides serializers for django rest frameworks """

from analysis.models import *
from rest_framework import serializers


class SpamListSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for spam list
    """
    id = serializers.ReadOnlyField()

    class Meta:
        model = SpamList
        exclude = ('status', 'group',)
        read_only_fields = '__all__'


class SpamWordListSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for spam word list
    """
    id = serializers.ReadOnlyField()

    class Meta:
        model = SpamWordList
        exclude = ('status', 'group',)
        read_only_fields = '__all__'


class AnticipateArchiveSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for future hot issue
    """
    id = serializers.ReadOnlyField()

    class Meta:
        model = AnticipateArchive
        read_only_fields = '__all__'


class MonthTrendWordSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for trend words every month
    """
    id = serializers.ReadOnlyField()

    class Meta:
        model = MonthTrendWord
        read_only_fields = '__all__'


class MonthlyWordsSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for future hot issue
    """
    id = serializers.ReadOnlyField()

    class Meta:
        model = MonthlyWords
        read_only_fields = '__all__'

