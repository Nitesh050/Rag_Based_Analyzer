from pathlib import Path 
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.documents import Document


class PDFAdapter:
    def load(self,pdf_path: str | Path) -> list[Document]:
        loader = PyPDFLoader(file_path=str(pdf_path))
        return loader.load()