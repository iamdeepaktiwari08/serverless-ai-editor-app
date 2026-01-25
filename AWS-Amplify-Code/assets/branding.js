// Yash Academy Branding Script
// This script injects branding elements without modifying the core application logic

(function () {
  'use strict';

  // Wait for DOM to be ready
  function initBranding() {
    // Add branding badge
    const brandingBadge = document.createElement('div');
    brandingBadge.className = 'branding-badge';
    brandingBadge.innerHTML = `
      <img src="/logo.png" alt="Yash Academy Logo" />
      <div class="badge-text">
        <div class="badge-title">Yash Academy</div>
        <div class="badge-subtitle">AWS Workshop</div>
      </div>
    `;
    document.body.appendChild(brandingBadge);

    // Add social links
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';
    socialLinks.innerHTML = `
      <a href="https://www.youtube.com/@Yashacademy0" target="_blank" rel="noopener noreferrer" class="social-link" title="YouTube Channel">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/yaswanth-arumulla/" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn Profile">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    `;
    document.body.appendChild(socialLinks);

    // Update page title if there's a terminal header
    const terminalHeader = document.querySelector('.terminal-header h1');
    if (terminalHeader && !terminalHeader.textContent.includes('Yash Academy')) {
      // Store original text and update
      const originalText = terminalHeader.textContent;
      if (originalText.includes('Mastering AWS') || originalText.includes('Image Editing')) {
        terminalHeader.textContent = 'Mastering AWS - Image Editing Tool';
      }
    }

    // Update any workshop references in the page
    const terminalHeaderP = document.querySelector('.terminal-header p');
    if (terminalHeaderP && !terminalHeaderP.textContent.includes(' Yash Academy')) {
      terminalHeaderP.textContent = 'Learn AWS with Yash Academy - Hands-on Workshop';
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBranding);
  } else {
    initBranding();
  }

  // Also try to initialize after a short delay to catch dynamically loaded content
  setTimeout(initBranding, 500);
  setTimeout(initBranding, 1500);
})();
