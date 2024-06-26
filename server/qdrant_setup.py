from qdrant_client.models import VectorParams, Distance
from qdrant_client import QdrantClient

client = QdrantClient(url="http://localhost:6333")

collection_name = "example_collection"

client.create_collection(
    collection_name,
    vectors_config=VectorParams(
        size=1536,
        distance=Distance.COSINE,
    ),
)