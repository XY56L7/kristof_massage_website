{
  document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: "fade",
      rewind: true,
      autoplay: true,
      interval: 5200,
      arrows: false,
      speed: 3000,
      pauseOnHover: false,
    }).mount();

    splide.on('moved', function (newIndex) {
      updateHeadingWithAnimation(newIndex);
    });

    function updateHeadingWithAnimation(index) {
      var data = [
        { main: 'Aroved Wellness', sub: 'Subtitle 1' },
        { main: 'Another Heading', sub: 'Subtitle 2' },
        { main: 'Yet Another Heading', sub: 'Subtitle 3' },
        { main: 'Yet Another Heading', sub: 'Subtitle 4' },
        // Add more data as needed
      ];

      var mainHeading = document.querySelector('.main-heading');
      var subHeading = document.querySelector('.bottom-2nd-head');

      if (mainHeading && subHeading) {
        // Use GSAP for animations
        gsap.to(mainHeading, {
          text: { value: "", chars: "all", stagger: 0.2, ease: "power4.out" },
          duration: 0.5,
          onComplete: function () {
            gsap.to(mainHeading, {
              text: { value: data[index].main, chars: "all", stagger: 0.2, ease: "power4.in" },
              duration: 0.5,
            });
          },
        });
        
        
        
    
        gsap.to(subHeading, {
          text: { value: "", chars: "all", stagger: 0.2, ease: "power4.out" },
          duration: 0.5,
          onComplete: function () {
            gsap.to(subHeading, {
              text: { value: data[index].main, chars: "all", stagger: 0.2, ease: "power4.in" },
              duration: 0.5,
            });
          },
        });
      }
    }




    var newSplide = new Splide(".splide-new", {
      perPage: determinePerPage(),
      type: "loop",
      focus: 0,
      omitEnd: true,
      autoplay: true,
      interval: 3000,
      pagination: false,
      pauseOnHover: false,
      arrows: true,
    });

    newSplide.mount();
    function determinePerPage() {
      //  Check the screen width and return the appropriate perPage value
      if (window.innerWidth < 768) { //   Adjust this breakpoint as needed
        return 1;  //  Set perPage to 1 for mobile screens
      } else {
        return 4;  //  Set perPage to a different value for larger screens
      }
    }
    window.addEventListener("resize", function () {
      newSplide.options.perPage = determinePerPage();
      newSplide.destroy();   // Destroy the current instance
      newSplide.mount();   // Reinitialize the Splide slider with updated options
    });



  });
}

{
  // WHATSAPP DETAILS
  document.querySelector('.whatsapp-float').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=917008822838', '_blank');
});
}

// Sticky Navbar
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down & passed threshold
        navbar.classList.add('scrolled');
    } else {
        // Scrolling up or at top
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const body = document.body;
    const wrapper = document.querySelector('.wrapper');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // A görgetés letiltása eltávolítva a mobilon való görgetési probléma megoldása érdekében
        // Csak a menü pozíciót és z-indexet használjuk
        if (mobileNav.classList.contains('active')) {
            // Menü megnyitása - nem blokkolom a görgetést
            body.classList.add('menu-open');
        } else {
            // Menü bezárása
            body.classList.remove('menu-open');
        }
    }

    // Hamburger click event
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close button click event
    if (closeMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            toggleMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('active') &&
            !mobileNav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });

    // Prevent clicks inside mobile nav from closing it
    mobileNav.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Horizontal scrolling fix
document.addEventListener('DOMContentLoaded', function() {
    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Fix viewport width issues
    function fixViewportWidth() {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            if (element.scrollWidth > window.innerWidth) {
                element.style.maxWidth = '100%';
                element.style.overflowX = 'hidden';
            }
        });
    }
    
    // Run on load and resize
    fixViewportWidth();
    window.addEventListener('resize', fixViewportWidth);
    
    // Prevent horizontal scroll on touch devices
    let startX = 0;
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchmove', function(e) {
        const currentX = e.touches[0].clientX;
        const diffX = Math.abs(currentX - startX);
        
        if (diffX > 10) { // If horizontal swipe
            e.preventDefault();
        }
    }, { passive: false });
});

// Testimonial Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('review-rating');
    const testimonialForm = document.getElementById('testimonial-form');

    // Rating stars functionality
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            ratingInput.value = rating;
            
            // Update stars visual state
            ratingStars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = index + 1;
            ratingStars.forEach((s, i) => {
                if (i < rating) {
                    s.style.color = '#FFD700';
                } else {
                    s.style.color = '#666';
                }
            });
        });
    });

    // Reset hover effect
    document.querySelector('.rating-stars').addEventListener('mouseleave', function() {
        const currentRating = parseInt(ratingInput.value);
        ratingStars.forEach((s, i) => {
            if (i < currentRating) {
                s.style.color = '#FFD700';
            } else {
                s.style.color = '#666';
            }
        });
    });

    // Initialize with 5 stars
    ratingStars.forEach(star => star.classList.add('active'));

    // Form submission
    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(testimonialForm);
        const reviewData = {
            name: formData.get('name'),
            email: formData.get('email'),
            rating: formData.get('rating'),
            review: formData.get('review')
        };

        // Simple validation
        if (!reviewData.name || !reviewData.email || !reviewData.review) {
            alert('Kérjük, töltse ki az összes mezőt!');
            return;
        }

        // Simulate form submission
        const submitBtn = testimonialForm.querySelector('.testimonial-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Küldés...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Köszönjük véleményét! Hamarosan megjelenik az oldalon.');
            testimonialForm.reset();
            
            // Reset stars to 5
            ratingStars.forEach(star => star.classList.add('active'));
            ratingInput.value = '5';
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // Optional: Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});
