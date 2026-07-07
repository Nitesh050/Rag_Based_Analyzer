from pathlib import Path

from langchain_core.documents import Document

from ingestion.pdf_adapter import PDFAdapter
from ingestion.chunker import DocumentChunker


class IngestionPipeline:

    def __init__(self):

        self.pdf_adapter = PDFAdapter()

        self.chunker = DocumentChunker()

    def ingest_pdf(self, pdf_path: str | Path) -> list[Document]:

        documents = self.pdf_adapter.load(pdf_path)

        chunks = self.chunker.split(documents)

        return chunks