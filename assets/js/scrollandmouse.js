document.addEventListener('DOMContentLoaded', function() {
  const aboutImageWrap = document.querySelector('.st-about-img-wrap');
  const logos = document.getElementById('logos');

  // Show logos when hovering over the image
  aboutImageWrap.addEventListener('mouseenter', function() {
    logos.classList.remove('hidden');
  });

  // Hide logos when the mouse leaves the image
  aboutImageWrap.addEventListener('mouseleave', function() {
    logos.classList.add('hidden');
  });

  // Show logos on scroll over the section
  window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && sectionTop > 0) {
      logos.classList.remove('hidden');
    } else {
      logos.classList.add('hidden');
    }
  });
});
