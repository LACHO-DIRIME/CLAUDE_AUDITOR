/**
 * Theme Toggle Script - 3 themes: light, dark, green
 */
(function() {
  const STORAGE_KEY = 'elpulsar-theme';
  const THEMES = ['light', 'dark', 'green'];
  
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  }
  
  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }
  
  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon && label) {
      const icons = { light: '☀️', dark: '🌙', green: '💚' };
      const labels = { light: 'Light', dark: 'Dark', green: 'Green' };
      icon.textContent = icons[theme] || '☀️';
      label.textContent = labels[theme] || theme;
    }
  }
  
  function toggleTheme() {
    const current = getStoredTheme();
    const currentIndex = THEMES.indexOf(current);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const next = THEMES[nextIndex];
    setStoredTheme(next);
    applyTheme(next);
  }
  
  // Initialize
  const stored = getStoredTheme();
  applyTheme(stored);
  
  // Expose globally
  window.toggleTheme = toggleTheme;
  window.getStoredTheme = getStoredTheme;
  window.applyTheme = applyTheme;
})();
