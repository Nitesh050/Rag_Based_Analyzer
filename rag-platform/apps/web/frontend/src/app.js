import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderSourceForm } from './components/source-form.js';

export function initSourceInput() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderHeader()}
    <main class="page-shell">
      ${renderSourceForm()}
    </main>
    ${renderFooter()}
  `;

  const form = document.getElementById('source-form');
  const linksInput = document.getElementById('links');
  const fileInput = document.getElementById('pdf-files');
  const summaryList = document.getElementById('summary-list');

  function buildSummaryItems(links, files) {
    const items = [];

    links
      .split('\n')
      .map((link) => link.trim())
      .filter(Boolean)
      .forEach((link) => {
        items.push({ type: 'link', label: link });
      });

    files.forEach((file) => {
      items.push({ type: 'pdf', label: file.name });
    });

    return items;
  }

  function renderSummary(items) {
    if (!items.length) {
      summaryList.innerHTML = '<p class="empty-state">No sources selected yet.</p>';
      return;
    }

    summaryList.innerHTML = items
      .map(
        (item) => `
          <div class="summary-item">
            <strong>${item.type === 'pdf' ? 'PDF' : 'Link'}</strong>
            <span>${item.label}</span>
          </div>
        `
      )
      .join('');
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const links = linksInput.value;
    const files = Array.from(fileInput.files || []);
    const items = buildSummaryItems(links, files);

    renderSummary(items);

    if (!items.length) {
      window.alert('Please add at least one link or PDF file.');
    }
  });

  fileInput.addEventListener('change', () => {
    const files = Array.from(fileInput.files || []);
    const invalidFiles = files.filter((file) => file.type !== 'application/pdf');

    if (invalidFiles.length) {
      window.alert('Only PDF files are supported.');
      fileInput.value = '';
      return;
    }

    renderSummary(buildSummaryItems(linksInput.value, files));
  });
}
