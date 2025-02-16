
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements you want to apply the parallax effect to
    const parallaxSections = document.querySelectorAll('.parallax-effect');
  
    const applyParallaxScale = () => {
        parallaxSections.forEach((section) => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
  
            if (sectionPosition < screenHeight && sectionPosition > 0) {
                const scaleFactor = Math.min(1, 0.7 + (screenHeight - sectionPosition) / screenHeight * 0.3);
  
                section.style.opacity = 1; // Increase opacity as it scales
                section.style.transform = `scale(${scaleFactor})`;
            } else if (sectionPosition < 0) {
                section.style.opacity = 1;
                section.style.transform = 'scale(1)';
            }
        });
    };
  
    window.addEventListener('scroll', applyParallaxScale);
  
    applyParallaxScale();
  });