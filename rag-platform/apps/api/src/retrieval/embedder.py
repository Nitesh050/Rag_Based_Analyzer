from typing import Sequence

from langchain_core.documents import Document
from langchain_ollama import OllamaEmbeddings


class Embedder:
    """
    Handles generation of embeddings using Ollama.
    """

    def __init__(
        self,
        model: str = "nomic-embed-text",
    ):
        self.embeddings = OllamaEmbeddings(
            model=model,
        )

    def embed_documents(
        self,
        documents: Sequence[Document],
    ) -> list[list[float]]:
        """
        Generate embeddings for a list of LangChain Documents.
        """

        texts = [doc.page_content for doc in documents]

        return self.embeddings.embed_documents(texts)

    def embed_query(
        self,
        query: str,
    ) -> list[float]:
        """
        Generate an embedding for a user query.
        """

        return self.embeddings.embed_query(query)