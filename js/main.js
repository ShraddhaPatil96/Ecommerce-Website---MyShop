function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ===== Scroll to Top Button ===== //
window.addEventListener('scroll', function () {
    const scrollBtn = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // ===== Optional: Highlight active nav link ===== //
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
  