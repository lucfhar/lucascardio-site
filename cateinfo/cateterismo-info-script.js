// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Scroll to top of content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add keyboard navigation for tabs
  tabButtons.forEach((button, index) => {
    button.addEventListener('keydown', function(e) {
      let nextButton;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextButton = tabButtons[index + 1] || tabButtons[0];
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextButton = tabButtons[index - 1] || tabButtons[tabButtons.length - 1];
      }
      
      if (nextButton) {
        nextButton.focus();
        nextButton.click();
      }
    });
  });

  // Print functionality
  window.printPage = function() {
    window.print();
  };

  // Scroll to top button
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e3a5f 0%, #0f2847 100%);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: 999;
  `;

  document.body.appendChild(scrollButton);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  scrollButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });

  scrollButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});

// Analytics tracking (optional - remove if not needed)
function trackEvent(eventName, eventData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
}

// Track tab changes
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('tab-button')) {
    trackEvent('tab_change', {
      tab_name: e.target.getAttribute('data-tab')
    });
  }
});
