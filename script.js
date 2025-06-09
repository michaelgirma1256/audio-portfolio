// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission (using Formspree)
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    alert('Message sent successfully!');
    form.reset();
  } else {
    alert('Oops! Something went wrong.');
  }
});
// Improved Counter Animation
// Ultra-Slow Counter Animation
let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  
  const counters = document.querySelectorAll('.counter');
  const duration = 8000; // 8 SECONDS per counter (adjust this)
  let completed = 0;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const startTime = Date.now();
    
    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      
      counter.innerText = current === target ? target + '+' : current;
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        completed++;
        if (completed === counters.length) countersAnimated = true;
      }
    };
    
    requestAnimationFrame(updateCount);
  });
}

// Smooth scroll trigger (same as before)
function handleScroll() {
  const statsSection = document.querySelector('.stats');
  const sectionTop = statsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight * 0.75) animateCounters();
}
window.addEventListener('scroll', handleScroll);
