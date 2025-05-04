document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Load categories in footer
  loadFooterCategories()

  // Handle newsletter subscription
  setupNewsletterForm()
})

// Function to load categories in the footer
function loadFooterCategories() {
  // Sample categories - in a real application, these would come from your database
  const categories = [
    { id: 1, name: "Technology", slug: "technology" },
    { id: 2, name: "Business", slug: "business" },
    { id: 3, name: "Health & Wellness", slug: "health-wellness" },
    { id: 4, name: "Travel", slug: "travel" },
    { id: 5, name: "Food & Cooking", slug: "food-cooking" },
    { id: 6, name: "Science", slug: "science" },
  ]

  const categoriesList = document.getElementById("footer-categories-list")

  if (categoriesList) {
    categoriesList.innerHTML = ""

    // Display only the first 6 categories in the footer
    categories.slice(0, 6).forEach((category) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="category.html?category=${category.slug}">${category.name}</a>`
      categoriesList.appendChild(li)
    })
  }
}

// Function to handle newsletter subscription
function setupNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form")
  const newsletterMessage = document.getElementById("newsletter-message")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value.trim()

      if (email) {
        // In a real application, you would send this to your server
        // For now, we'll just simulate a successful subscription

        // Show loading state
        newsletterMessage.textContent = "Subscribing..."
        newsletterMessage.style.color = "#b3b3b3"

        // Simulate API call
        setTimeout(() => {
          // Success message
          newsletterMessage.textContent = "Thank you for subscribing!"
          newsletterMessage.style.color = "#2ecc71"
          emailInput.value = ""

          // Clear message after 5 seconds
          setTimeout(() => {
            newsletterMessage.textContent = ""
          }, 5000)
        }, 1500)
      }
    })
  }
}

// Function to include the footer in all pages
function includeFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data

      // After loading the footer, initialize its functionality
      document.getElementById("current-year").textContent = new Date().getFullYear()
      loadFooterCategories()
      setupNewsletterForm()
    })
    .catch((error) => console.error("Error loading footer:", error))
}

// Export functions for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    loadFooterCategories,
    setupNewsletterForm,
    includeFooter,
  }
}
