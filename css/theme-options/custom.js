// Example: Hide uptime info inside shadow DOM
const hideUptime = () => {
  const userProfile = document.querySelector('unraid-user-profile');
  if (userProfile?.shadowRoot) {
    const target = userProfile.shadowRoot.querySelector('p[title^="Server Up Since"]');
    if (target) {
      target.style.display = 'none';
    }
  }
};

// Try to apply after the page loads
window.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    const el = document.querySelector('unraid-user-profile');
    if (el?.shadowRoot) {
      hideUptime();
      clearInterval(interval);
    }
  }, 500);
});
