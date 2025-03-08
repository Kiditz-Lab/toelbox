from rest_framework import serializers

class CSVToJsonSerializer(serializers.Serializer):
    
    text = serializers.CharField(required=False, allow_blank=True)
    file = serializers.FileField(required=False)

    def validate(self, data):
        if not data.get('text') and not data.get('file'):
            raise serializers.ValidationError("Either 'text' or 'file' must be provided.")
        return data