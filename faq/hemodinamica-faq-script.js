// Initialize FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  const searchInput = document.getElementById('searchInput');
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  let currentCategory = 'all';
  let searchTerm = '';

  // FAQ Accordion Toggle
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        // Scroll into view
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  });

  // Search Functionality
  searchInput.addEventListener('input', function(e) {
    searchTerm = e.target.value.toLowerCase();
    filterFAQ();
  });

  // Category Filter
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Update current category
      currentCategory = this.getAttribute('data-category');
      
      // Filter FAQ
      filterFAQ();
    });
  });

  // Filter FAQ based on search and category
  function filterFAQ() {
    let visibleCount = 0;

    faqItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const question = item.querySelector('.faq-text h3').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      
      // Check category filter
      const categoryMatch = currentCategory === 'all' || category === currentCategory;
      
      // Check search filter
      const searchMatch = searchTerm === '' || 
                         question.includes(searchTerm) || 
                         answer.includes(searchTerm);
      
      // Show or hide item
      if (categoryMatch && searchMatch) {
        item.classList.remove('hidden');
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });

    // Show "no results" message if needed
    showNoResultsMessage(visibleCount);
  }

  // Show "no results" message
  function showNoResultsMessage(visibleCount) {
    const container = document.querySelector('.faq-container');
    let noResultsMsg = container.querySelector('.no-results-message');
    
    if (visibleCount === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.className = 'no-results-message';
        noResultsMsg.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
            <svg style="width: 3rem; height: 3rem; margin-bottom: 1rem; opacity: 0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Nenhuma dúvida encontrada</p>
            <p style="font-size: 0.9rem;">Tente ajustar sua busca ou filtro</p>
          </div>
        `;
        container.appendChild(noResultsMsg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  }

  // Keyboard Navigation
  document.addEventListener('keydown', function(e) {
    // Close FAQ with Escape key
    if (e.key === 'Escape') {
      faqItems.forEach(item => item.classList.remove('active'));
    }

    // Navigate FAQ with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const visibleItems = Array.from(faqItems).filter(item => !item.classList.contains('hidden'));
      if (visibleItems.length === 0) return;

      const activeItem = document.querySelector('.faq-item.active');
      let nextItem;

      if (!activeItem) {
        nextItem = visibleItems[0];
      } else {
        const currentIndex = visibleItems.indexOf(activeItem);
        if (e.key === 'ArrowDown') {
          nextItem = visibleItems[(currentIndex + 1) % visibleItems.length];
        } else {
          nextItem = visibleItems[(currentIndex - 1 + visibleItems.length) % visibleItems.length];
        }
      }

      // Close all and open the next one
      faqItems.forEach(item => item.classList.remove('active'));
      nextItem.classList.add('active');
      nextItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
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

  // Scroll to Top Button
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
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

  // Print functionality
  window.printFAQ = function() {
    window.print();
  };

  // Share functionality (if needed)
  window.shareFAQ = function(question) {
    const text = `Confira esta dúvida frequente sobre cardiologia: ${question}`;
    if (navigator.share) {
      navigator.share({
        title: 'Dúvidas Frequentes - Cardiologia',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      alert('Link copiado para a área de transferência!');
    }
  };

  // Track user interactions (optional analytics)
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      trackEvent('faq_opened', {
        faq_number: index + 1,
        faq_title: item.querySelector('.faq-text h3').textContent
      });
    });
  });

  // Track search
  let searchTimeout;
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (searchTerm.length > 0) {
        trackEvent('faq_search', {
          search_term: searchTerm
        });
      }
    }, 500);
  });

  // Track category filter
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      trackEvent('category_filter', {
        category: this.getAttribute('data-category')
      });
    });
  });
});

// Analytics tracking function (optional - remove if not using Google Analytics)
function trackEvent(eventName, eventData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
}

// Utility function to highlight search terms in results
function highlightSearchTerm(text, term) {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// Add keyboard shortcut help
document.addEventListener('keydown', function(e) {
  // Press '?' to show help
  if (e.key === '?' && e.ctrlKey) {
    e.preventDefault();
    showKeyboardHelp();
  }
});

function showKeyboardHelp() {
  const helpText = `
    Atalhos de Teclado:
    
    ↓ / ↑ - Navegar entre dúvidas
    Esc - Fechar dúvida aberta
    Ctrl + ? - Mostrar esta ajuda
  `;
  alert(helpText);
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
  // Add ARIA labels
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, index) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    question.setAttribute('aria-controls', `answer-${index}`);
    
    answer.setAttribute('id', `answer-${index}`);
    answer.setAttribute('role', 'region');
  });

  // Update ARIA when toggling
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function() {
      const isExpanded = item.classList.contains('active');
      question.setAttribute('aria-expanded', isExpanded);
    });
  });
});
