/**
 * i18n.js - Internationalization for elpulsar.app
 * SPRINT 7 - S4
 * Supports: English, Spanish, Chinese
 */

const i18n = {
  currentLang: 'es',
  translations: {},
  STORAGE_KEY: 'elpulsar-lang',

  async init() {
    const lang = this.detectLanguage();
    await this.loadTranslations(lang);
    this.applyTranslations();
    this.setupHashListener();
  },

  detectLanguage() {
    // Check localStorage first (for persistence across pages)
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored && ['en', 'es', 'zh'].includes(stored)) {
      return stored;
    }
    
    // Check hash: #language-english, #language-spanish, #language-chinese
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('english') || hash.includes('en')) return 'en';
    if (hash.includes('chinese') || hash.includes('zh')) return 'zh';
    if (hash.includes('spanish') || hash.includes('es')) return 'es';
    
    // Check browser language
    const browserLang = navigator.language.substring(0, 2);
    if (['en', 'es', 'zh'].includes(browserLang)) return browserLang;
    
    return 'es'; // Default
  },

  async loadTranslations(lang) {
    try {
      const res = await fetch(`/i18n/${lang}.json`);
      this.translations = await res.json();
      this.currentLang = lang;
    } catch (e) {
      console.error('Failed to load translations:', e);
      this.translations = {};
    }
  },

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.getText(key);
      if (text) el.textContent = text;
    });
  },

  getText(key) {
    const parts = key.split('.');
    let value = this.translations;
    for (const part of parts) {
      value = value?.[part];
      if (!value) break;
    }
    return value || key;
  },

  setupHashListener() {
    window.addEventListener('hashchange', () => {
      const newLang = this.detectLanguage();
      if (newLang !== this.currentLang) {
        this.loadTranslations(newLang).then(() => this.applyTranslations());
      }
    });
  },

  switchLanguage(lang) {
    localStorage.setItem(this.STORAGE_KEY, lang);
    window.location.hash = `language-${lang === 'en' ? 'english' : lang === 'zh' ? 'chinese' : 'spanish'}`;
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => i18n.init());
