(function () {
  function showRoute(hash) {
    var cleaned = (hash || '#home').replace('#', '');
    var parts = cleaned.split('/');
    var mainRoute = parts[0] || 'home';
    var subId = parts[1] || '';

    var sections = document.querySelectorAll('[data-route]');
    sections.forEach(function (section) {
      if (section.id === mainRoute) {
        section.removeAttribute('hidden');
      } else {
        section.setAttribute('hidden', '');
      }
    });

    if (subId) {
      // Delay scrolling until after layout updates
      setTimeout(function () {
        var target = document.getElementById(subId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }

  window.addEventListener('hashchange', function () {
    showRoute(location.hash);
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (!location.hash) {
      location.replace('#home');
    }
    showRoute(location.hash);
  });
})();


