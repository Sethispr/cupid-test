document.addEventListener('DOMContentLoaded', () => {
  // Create progress bar element
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  document.body.appendChild(progressBar);

  // Select the main content area (Starlight's main content)
  const mainContent = document.querySelector('main') || document.body;

  // Update progress bar width on scroll
  function updateProgressBar() {
    const scrollTop = mainContent.scrollTop || document.documentElement.scrollTop;
    const scrollHeight = mainContent.scrollHeight || document.documentElement.scrollHeight;
    const clientHeight = mainContent.clientHeight || document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = `${scrolled}%`;
  }

  // Listen for scroll events
  window.addEventListener('scroll', updateProgressBar);

  // Update on resize (in case content height changes)
  window.addEventListener('resize', updateProgressBar);

  // Initial update
  updateProgressBar();
});
