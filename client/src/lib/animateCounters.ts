export function animateCounters() {
  const counters = document.querySelectorAll<HTMLElement>('.counter-value');
  
  // Skip if no counters are found
  if (!counters.length) return;
  
  let counterActivated = false;
  
  const startCounters = function() {
    if (counterActivated) return;
    
    const counterSection = document.querySelector('.stats-container');
    if (!counterSection) return;
    
    const counterSectionTop = counterSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (counterSectionTop < windowHeight - 100) {
      counterActivated = true;
      
      counters.forEach(counter => {
        const target = +(counter.dataset.count || '0');
        let count = 0;
        const duration = 2000; // ms
        const increment = target / (duration / 16); // approx 60fps
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.min(Math.ceil(count), target).toString();
            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target.toString();
          }
        };
        
        updateCount();
      });
    }
  };
  
  window.addEventListener('scroll', startCounters);
  setTimeout(startCounters, 500); // Run once after a small delay to ensure DOM is ready
  
  return () => {
    window.removeEventListener('scroll', startCounters);
  };
}
