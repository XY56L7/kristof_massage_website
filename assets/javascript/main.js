document.addEventListener('DOMContentLoaded', function () {
  var bannerVideo = document.querySelector('.banner-video');
  var bannerSoundBtn = document.querySelector('.banner-video-sound');

  function updateBannerSoundButton() {
    if (!bannerSoundBtn || !bannerVideo) return;

    var icon = bannerSoundBtn.querySelector('i');
    var isMuted = bannerVideo.muted;

    if (icon) {
      icon.className = isMuted
        ? 'fa-solid fa-volume-xmark'
        : 'fa-solid fa-volume-high';
    }

    bannerSoundBtn.classList.toggle('is-unmuted', !isMuted);
    bannerSoundBtn.setAttribute(
      'aria-label',
      isMuted ? 'Hang bekapcsolása' : 'Hang kikapcsolása'
    );
    bannerSoundBtn.setAttribute(
      'title',
      isMuted ? 'Hang bekapcsolása' : 'Hang kikapcsolása'
    );
  }

  function enableBannerSound() {
    if (!bannerVideo) return;

    bannerVideo.muted = false;
    bannerVideo.volume = 1;
    updateBannerSoundButton();
    bannerVideo.play().catch(function () {});
  }

  if (bannerVideo) {
    bannerVideo.muted = false;
    bannerVideo.volume = 1;
    updateBannerSoundButton();

    function setupAutoUnmuteOnInteraction() {
      var autoUnmuteEvents = ['click', 'touchstart', 'keydown'];
      function autoEnableSoundOnce() {
        enableBannerSound();
        autoUnmuteEvents.forEach(function (eventName) {
          document.removeEventListener(eventName, autoEnableSoundOnce);
        });
      }

      autoUnmuteEvents.forEach(function (eventName) {
        document.addEventListener(eventName, autoEnableSoundOnce, { once: true, passive: true });
      });
    }

    bannerVideo.play().then(function () {
      if (bannerVideo.muted) {
        updateBannerSoundButton();
        setupAutoUnmuteOnInteraction();
      }
    }).catch(function () {
      bannerVideo.muted = true;
      bannerVideo.play().catch(function () {});
      updateBannerSoundButton();
      setupAutoUnmuteOnInteraction();
    });

    if (bannerSoundBtn) {
      bannerSoundBtn.addEventListener('click', function () {
        bannerVideo.muted = !bannerVideo.muted;
        if (!bannerVideo.muted) {
          bannerVideo.volume = 1;
        }
        updateBannerSoundButton();
        bannerVideo.play().catch(function () {});
      });
    }
  }

  var splideNewEl = document.querySelector('.splide-new');
  if (!splideNewEl) return;

  var newSplide = new Splide('.splide-new', {
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
    if (window.innerWidth < 768) {
      return 1;
    } else {
      return 4;
    }
  }
  
  window.addEventListener("resize", function () {
    newSplide.options.perPage = determinePerPage();
    newSplide.destroy();
    newSplide.mount();
  });
});

document.querySelector('.whatsapp-float').addEventListener('click', function() {
  window.open('https://app.minup.io/book/kajtar-kristof-masszor', '_blank');
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

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
        
        if (mobileNav.classList.contains('active')) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    }

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            toggleMenu();
        });
    });

    document.addEventListener('click', function(e) {
        if (mobileNav.classList.contains('active') &&
            !mobileNav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });

    mobileNav.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    function fixViewportWidth() {
        if (window.innerWidth > 768) {
            const elements = document.querySelectorAll('*');
            elements.forEach(element => {
                if (element.scrollWidth > window.innerWidth) {
                    element.style.maxWidth = '100%';
                    element.style.overflowX = 'hidden';
                }
            });
        }
    }
    
    fixViewportWidth();
    window.addEventListener('resize', fixViewportWidth);
    
    // Csak a carousel/slider elemeken blokkoljuk a horizontális swipe-ot (vízszintes lapozás),
    // hogy a dokumentum szintű érintéses görgetés soha ne legyen megakadályozva (mobil scroll javítása).
    let startX = 0;
    let startY = 0;

    function handleTouchStart(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        if (diffX > diffY && diffX > 30) e.preventDefault();
    }

    document.querySelectorAll('.splide-new').forEach(function (el) {
        el.addEventListener('touchstart', handleTouchStart, { passive: true });
        el.addEventListener('touchmove', handleTouchMove, { passive: false });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        document.body.style.overflowY = 'visible';
        document.documentElement.style.overflowY = 'scroll';
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                document.body.style.overflowY = 'visible';
                document.documentElement.style.overflowY = 'scroll';
            }, 100);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const ratingStars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('review-rating');
    const testimonialForm = document.getElementById('testimonial-form');

    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            ratingInput.value = rating;
            
            ratingStars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

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

    ratingStars.forEach(star => star.classList.add('active'));

    testimonialForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(testimonialForm);
        const reviewData = {
            name: formData.get('name'),
            email: formData.get('email'),
            rating: formData.get('rating'),
            review: formData.get('review')
        };

        if (!reviewData.name || !reviewData.email || !reviewData.review) {
            alert('Kérjük, töltse ki az összes mezőt!');
            return;
        }

        const submitBtn = testimonialForm.querySelector('.testimonial-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Küldés...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Köszönjük véleményét! Hamarosan megjelenik az oldalon.');
            testimonialForm.reset();
            
            ratingStars.forEach(star => star.classList.add('active'));
            ratingInput.value = '5';
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});