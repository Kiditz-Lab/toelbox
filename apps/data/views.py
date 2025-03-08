from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CSVToJsonSerializer
import pandas as pd
import io
import csv
from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample


class CSVToJsonViewSet(viewsets.ViewSet):
    def detect_delimiter(self, sample_text):
        sniffer = csv.Sniffer()
        return sniffer.sniff(sample_text).delimiter
    @extend_schema(
        tags=['Data'],
        request=CSVToJsonSerializer,
        responses={200: dict},
        summary="Convert CSV to JSON",
        description="Accepts a CSV file or raw CSV text, detects the delimiter automatically, and returns JSON data.",
        examples=[
            OpenApiExample(
                name="CSV Text Example",
                value={"text": "name,age\nAlice,30\nBob,25"},
                description="Example with CSV text input."
            ),
        ]
    )
    def create(self, request):
        serializer = CSVToJsonSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        text = serializer.validated_data.get('text')
        file = serializer.validated_data.get('file')

        # Read CSV content
        content = file.read().decode('utf-8') if file else text

        # Detect delimiter
        delimiter = self.detect_delimiter(content)

        # Convert to JSON
        df = pd.read_csv(io.StringIO(content), sep=delimiter)
        json_data = df.to_dict(orient='records')

        return Response(json_data)
