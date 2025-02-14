// I Don't know JavaScript yet, ChatGPT helped me out here
document.addEventListener("DOMContentLoaded", function () {
    let quotes = document.querySelectorAll("[class^='quote-']"); // Select all quotes
  
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = "visible"; // Make it visible only when in view
          entry.target.style.animation = `appear 1.5s ease-in-out ${index * 0.3}s forwards`; 
        }
      });
    });
  
    quotes.forEach((quote) => observer.observe(quote));
  });
  document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slider img"); // Select all images
    let index = 0;
  
    function showSlide() {
      slides.forEach((slide) => {
        slide.style.display = "none"; // Hide all images
      });
  
      slides[index].style.display = "block"; // Show the current slide
      index = (index + 1) % slides.length; // Move to the next slide, loop back
    }
  
    setInterval(showSlide, 3000); // Change slide every 3 seconds
    showSlide(); // Show first slide immediately
  });
  
