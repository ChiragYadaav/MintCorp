export function scrollReveal() {
  // Find all elements with the reveal class
  const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
  
  // Skip if no elements are found
  if (!revealElements.length) return;
  
  const revealOnScroll = function() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  setTimeout(revealOnScroll, 300); // Run once after a small delay to ensure DOM is ready
  
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
}
