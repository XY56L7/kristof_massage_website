

gsap.registerPlugin(ScrollTrigger);

// Navbar animációk csak mobil nézetben
if (window.innerWidth <= 768) {
  gsap.from(".menu-gsap", {
      duration: .5,
      y: -100,
      opacity: 0,
      ease: "none",
      stagger: ".2",
      delay: .7,
  });
  
  gsap.from(".logo-gsap", {
      duration: .7,
      x:-100,
      opacity: 0,
      ease: "none",
      scale:0,
      delay: .2,
  });

  gsap.from(".logo-social", {
      duration: .5,
      opacity: 0,
      scale:3,
      ease: "none",
      stagger: ".2",
      delay: 2,
  });
}

// Banner animációk minden nézetben
gsap.from(".banner-gsap", {
    x:"200%",
    ease: "power2.out",
    stagger: ".15",
    delay: .5,
    duration:0.8,
});

gsap.from(".banner-gsap-left", {
    x:"-200%",
    ease: "power2.out",
    stagger: ".15",
    delay: .5,
    duration:0.8,
});

// Natív görgetés (egérgörgő + touch): Lenis kikapcsolva, hogy ne akadjon el a scroll
window.addEventListener('scroll', ScrollTrigger.update, { passive: true });
