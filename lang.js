function getLang() {
  var params = new URLSearchParams(window.location.search);
  var urlLang = params.get('lang');
  if (urlLang === 'ar' || urlLang === 'en') return urlLang;
  return localStorage.getItem('portfolio-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  window.location.search = '?lang=' + lang;
}

function toggleLanguage() {
  var current = getLang();
  var newLang = current === 'en' ? 'ar' : 'en';
  setLang(newLang);
}

function initLang() {
  var lang = getLang();
  var params = new URLSearchParams(window.location.search);
  var urlLang = params.get('lang');
  if (urlLang !== lang) {
    setLang(lang);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}