// Tiny enhancements only. Page works fully without JS.
document.getElementById('year').textContent = new Date().getFullYear();

// "Last updated" stamp pulls from the document.lastModified header so it
// auto-updates whenever you re-deploy. No server needed.
const updatedEl = document.getElementById('updated');
if (updatedEl) {
  try {
    const d = new Date(document.lastModified);
    updatedEl.textContent = d.toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  } catch (e) {
    updatedEl.textContent = 'recently';
  }
}
