// Nav active state
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-links a');
  var current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(function(link) {
    if (link.getAttribute('href') === current) link.classList.add('active');
  });
});
