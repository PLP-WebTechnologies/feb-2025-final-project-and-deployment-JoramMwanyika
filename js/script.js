// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header")
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const heroSlides = document.querySelectorAll(".hero-slide")
  const heroDots = document.querySelectorAll(".hero-controls .dot")
  const heroPrevBtn = document.querySelector(".hero-controls .prev-btn")
  const heroNextBtn = document.querySelector(".hero-controls .next-btn")
  const testimonials = document.querySelectorAll(".testimonial")
  const testimonialDots = document.querySelectorAll(".testimonial-controls .dot")
  const testimonialPrevBtn = document.querySelector(".testimonial-controls .prev-btn")
  const testimonialNextBtn = document.querySelector(".testimonial-controls .next-btn")
  const contactForm = document.getElementById("contact-form")
  const newsletterForm = document.getElementById("newsletter-form")

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Toggle icon
      const icon = menuToggle.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav") && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      const icon = menuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Hero Slider
  let currentHeroSlide = 0

  function showHeroSlide(index) {
    heroSlides.forEach((slide) => slide.classList.remove("active"))
    heroDots.forEach((dot) => dot.classList.remove("active"))

    heroSlides[index].classList.add("active")
    heroDots[index].classList.add("active")
    currentHeroSlide = index
  }

  // Next hero slide
  function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length
    showHeroSlide(currentHeroSlide)
  }

  // Previous hero slide
  function prevHeroSlide() {
    currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length
    showHeroSlide(currentHeroSlide)
  }

  // Event listeners for hero slider controls
  if (heroPrevBtn && heroNextBtn) {
    heroPrevBtn.addEventListener("click", prevHeroSlide)
    heroNextBtn.addEventListener("click", nextHeroSlide)

    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showHeroSlide(index)
      })
    })

    // Auto slide hero
    setInterval(nextHeroSlide, 5000)
  }

  // Testimonial Slider
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
    testimonialDots.forEach((dot) => dot.classList.remove("active"))

    testimonials[index].classList.add("active")
    testimonialDots[index].classList.add("active")
    currentTestimonial = index
  }

  // Next testimonial
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    showTestimonial(currentTestimonial)
  }

  // Previous testimonial
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    showTestimonial(currentTestimonial)
  }

  // Event listeners for testimonial controls
  if (testimonialPrevBtn && testimonialNextBtn) {
    testimonialPrevBtn.addEventListener("click", prevTestimonial)
    testimonialNextBtn.addEventListener("click", nextTestimonial)

    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
      })
    })

    // Auto slide testimonials
    setInterval(nextTestimonial, 7000)
  }

  // Form Validation
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  // Contact Form Validation
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")

      // Validate name
      if (nameInput.value.trim() === "") {
        nameInput.style.borderColor = "red"
        isValid = false
      } else {
        nameInput.style.borderColor = "#ddd"
      }

      // Validate email
      if (!validateEmail(emailInput.value)) {
        emailInput.style.borderColor = "red"
        isValid = false
      } else {
        emailInput.style.borderColor = "#ddd"
      }

      // Validate message
      if (messageInput.value.trim() === "") {
        messageInput.style.borderColor = "red"
        isValid = false
      } else {
        messageInput.style.borderColor = "#ddd"
      }

      if (isValid) {
        // Simulate form submission
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
      } else {
        alert("Please fill in all required fields correctly.")
      }
    })
  }

  // Newsletter Form Validation
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const emailInput = newsletterForm.querySelector('input[type="email"]')

      if (!validateEmail(emailInput.value)) {
        emailInput.style.borderColor = "red"
        alert("Please enter a valid email address")
      } else {
        emailInput.style.borderColor = "#ddd"
        alert("Thank you for subscribing to our newsletter!")
        newsletterForm.reset()
      }
    })
  }

  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return

      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          const icon = menuToggle.querySelector("i")
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      }
    })
  })

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(
    ".about-content, .room-card, .dining-content, .gallery-item, .info-card",
  )

  function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = revealElements[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll()
})
