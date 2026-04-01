gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATIONS
gsap.from(".hero-title", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".hero-img", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".navbar", {
  opacity: 0,
  y: -20,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-text-block", {
  opacity: 0,
  x: -40,
  duration: 1,
  delay: 0.6,
  ease: "power3.out"
});

// ABOUT SECTION FADE
gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  },
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// PROJECTS HORIZONTAL SCROLL
let sections = gsap.utils.toArray(".project-card");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // calculate end based on container width
    end: () => "+=" + document.querySelector(".projects-container").offsetWidth
  }
});

// EXPERIENCE ANIMATION
gsap.from(".exp-item", {
  scrollTrigger: {
    trigger: ".experience",
    start: "top 70%"
  },
  x: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out"
});
