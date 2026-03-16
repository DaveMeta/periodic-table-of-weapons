$('.menu-burger, .menu-items').on('click', function() {
  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});


// Changing the defaults
window.sr = ScrollReveal({ reset: false });

// Customizing a reveal set
sr.reveal('.reveal', { duration: 500, scale: 1, viewFactor: 0.05 });
