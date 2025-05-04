/**
 * Integration System for Inkwell Blog
 * This file handles the integration of components across the site
 */

// Integration state
const integrationState = {
  componentsLoaded: {
    header: false,
    footer: false,
  },
  loadingErrors: [],
}

// Initialize integrations
function initIntegrations() {
  // Load header and footer components
  loadComponent("header", "header.html", "#header-placeholder")
  loadComponent("footer", "footer.html", "#footer-placeholder")

  // Initialize component-specific scripts
  initializeComponentScripts()
}

// Load a component from an HTML file
function loadComponent(name, url, targetSelector) {
  const targetElement = document.querySelector(targetSelector)
  if (!targetElement) return

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${name}: ${response.status} ${response.statusText}`)
      }
      return response.text()
    })
    .then((html) => {
      targetElement.innerHTML = html
      integrationState.componentsLoaded[name] = true

      // Initialize component-specific functionality
      if (name === "header") {
        initializeHeaderFunctionality()
      } else if (name === "footer") {
        initializeFooterFunctionality()
      }

      // Dispatch event that component is loaded
      document.dispatchEvent(new CustomEvent(`${name}Loaded`))
    })
    .catch((error) => {
      console.error(`Error loading ${name}:`, error)
      integrationState.loadingErrors.push({ component: name, error: error.message })

      // Show fallback content
      targetElement.innerHTML = getFallbackContent(name)
    })
}

// Get fallback content for components that fail to load
function getFallbackContent(componentName) {
  switch (componentName) {
    case "header":
      return `
        <header class="site-header">
          <div class="container">
            <div class="header-content">
              <div class="logo">
                <a href="index.html">Inkwell</a>
              </div>
              <nav class="main-nav">
                <ul class="nav-list">
                  <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                  <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                  <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      `
    case "footer":
      return `
        <footer class="site-footer">
          <div class="container">
            <p>&copy; ${new Date().getFullYear()} Inkwell Blog. All rights reserved.</p>
          </div>
        </footer>
      `
    default:
      return `<div>Failed to load ${componentName}</div>`
  }
}

// Initialize component-specific scripts
function initializeComponentScripts() {
  // Load scripts based on page
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  // Common scripts for all pages
  loadScript("search.js")
  loadScript("theme.js")
  loadScript("performance.js")

  // Page-specific scripts
  switch (currentPage) {
    case "index.html":
      loadScript("categories.js")
      break
    case "post.html":
      loadScript("comments.js")
      loadScript("share.js")
      break
    case "admin.html":
      loadScript("admin.js")
      break
    case "bookmarks.html":
      loadScript("bookmarks.js")
      break
  }
}

// Load a script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = src
    script.async = true

    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Script load error for ${src}`))

    document.head.appendChild(script)
  })
}

// Initialize header functionality
function initializeHeaderFunctionality() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuClose = document.getElementById("mobile-menu-close")

  if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.classList.add("menu-open")
    })

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.classList.remove("menu-open")
    })
  }
}

// Initialize footer functionality
function initializeFooterFunctionality() {
  // Update copyright year
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  // Newsletter form
  const newsletterForm = document.getElementById("footer-newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput && emailInput.value) {
        // Show success message
        const successMessage = document.createElement("div")
        successMessage.className = "newsletter-success"
        successMessage.textContent = "Thank you for subscribing!"

        newsletterForm.innerHTML = ""
        newsletterForm.appendChild(successMessage)
      }
    })
  }
}

// Initialize integrations when DOM is loaded
document.addEventListener("DOMContentLoaded", initIntegrations)
