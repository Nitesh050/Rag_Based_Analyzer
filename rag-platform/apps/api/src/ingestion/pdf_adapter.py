from pathlib import Path 
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.document import Document


class PDFAdapter:
    def load(self,pdf_path: str | Path) -> list[Document]:
        loader = PyPDFLoader(file_path=pdf_path)
        return loader.load()