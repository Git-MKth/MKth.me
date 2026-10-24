// Theme toggle: auto (system) → light → dark → auto.
// The pressed-state script in <head> applies a stored choice before first paint.
(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function stored() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function effective() {
    var choice = stored();
    if (choice === 'light' || choice === 'dark') return choice;
    return media.matches ? 'dark' : 'light';
  }

  function label() {
    var next = effective() === 'dark' ? 'hell' : 'dunkel';
    var text = 'Farbschema wechseln (aktuell ' + (effective() === 'dark' ? 'dunkel' : 'hell') + ', wechselt zu ' + next + ')';
    toggle.setAttribute('aria-label', text);
    toggle.title = text;
  }

  // Sync the visible icon with what is actually rendered.
  function sync() {
    var choice = stored();
    root.dataset.theme = choice === 'light' || choice === 'dark' ? choice : 'auto';
    label();
  }

  toggle.addEventListener('click', function () {
    var next = effective() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
    sync();
  });

  // Follow the system while no explicit choice is stored.
  media.addEventListener('change', function () {
    if (!stored()) label();
  });

  sync();

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
