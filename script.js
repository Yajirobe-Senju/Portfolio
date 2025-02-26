// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  });

  // Typing Animation
  const text = "Build, Inspire, Repeat!";
  const typingText = document.querySelector(".typing-text");
  let i =0;

  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Skill Bars Animation
  const skillBars = document.querySelectorAll(".skill-progress");

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.parentElement.dataset.progress || "0%";
        
        // Reset width to 0 before animation
        bar.style.width = "0%";
        
        // Add transition
        bar.style.transition = "width 1.5s ease-in-out";
        
        // Trigger animation after a small delay
        requestAnimationFrame(() => {
          bar.style.width = width;
        });

        // Add loading animation
        bar.style.animation = "pulse 2s infinite";
        
        // Unobserve after animation is triggered
        observer.unobserve(bar);
      }
    });
  }, observerOptions);

  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  skillBars.forEach((bar) => observer.observe(bar));

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
