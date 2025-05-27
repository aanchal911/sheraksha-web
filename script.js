    const testimonialSection = document.querySelector('.testimonials-section');
    const triangleIndicator = document.querySelector('.triangle-indicator');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    let currentCardIndex = 0;

    function updateTrianglePosition() {
        const card = testimonialCards[currentCardIndex];
        const cardRect = card.getBoundingClientRect();
        const sliderRect = testimonialSlider.getBoundingClientRect();

        const leftPosition = card.offsetLeft - testimonialSlider.scrollLeft + cardRect.width / 2 - triangleIndicator.offsetWidth / 2;
        
        requestAnimationFrame(() => {
            triangleIndicator.style.left = leftPosition + 'px';
        });
        
        document.addEventListener('DOMContentLoaded', function() {
          const getLocationButton = document.getElementById('getLocationButton');
          const locationDisplay = document.getElementById('locationDisplay');
        
          if (getLocationButton) {
            getLocationButton.addEventListener('click', function() {
              // Placeholder location data
              const latitude = 34.0522;
              const longitude = -118.2437;
        
              locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            });
          }
        });

        // Scroll to the current card
        testimonialSlider.style.transform = `translateX(-${card.offsetLeft}px)`;
    }

    function nextCard() {
        currentCardIndex++;
        if (currentCardIndex >= testimonialCards.length) {
            currentCardIndex = 0;
        }
        updateTrianglePosition();
    }

    // Style the triangle for smooth movement
    triangleIndicator.style.transition = 'left 0.4s ease';

    // Auto-scroll every 3 seconds
    setInterval(nextCard, 3000);

    updateTrianglePosition();
    updateTrianglePosition();

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
});
