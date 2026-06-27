export function renderSourceForm() {
  return `
    <section class="hero-card">
      <div class="hero-copy">
        <p class="eyebrow">Knowledge ingestion</p>
        <h1>Add sources for your RAG workflow</h1>
        <p class="subtitle">
          Paste website links or upload PDF documents to build a searchable knowledge base.
        </p>
      </div>

      <form id="source-form" class="source-form">
        <div class="input-block">
          <label for="links">Website links</label>
          <textarea
            id="links"
            name="links"
            rows="6"
            placeholder="https://example.com/article&#10;https://docs.example.com/guide"
          ></textarea>
          <small>Enter one link per line.</small>
        </div>

        <div class="input-block">
          <label for="pdf-files">PDF documents</label>
          <label class="upload-box" for="pdf-files">
            <span class="upload-icon">⬆</span>
            <span>Drop PDF files here or click to browse</span>
          </label>
          <input id="pdf-files" name="pdf-files" type="file" accept=".pdf" multiple />
          <small>Supported format: PDF only.</small>
        </div>

        <button type="submit">Process sources</button>
      </form>
    </section>

    <section class="summary-card" aria-live="polite">
      <h2>Selected sources</h2>
      <div id="summary-list" class="summary-list">
        <p class="empty-state">No sources selected yet.</p>
      </div>
    </section>
  `;
}
