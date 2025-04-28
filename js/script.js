// Common JavaScript for all pages

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scroll-top")

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add("show")
    } else {
      scrollTopBtn.classList.remove("show")
    }
  })

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Update Cart Count
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartCountElements = document.querySelectorAll("#cart-count")

  cartCountElements.forEach((element) => {
    element.textContent = cartCount
  })
}

// Call updateCartCount on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
})
