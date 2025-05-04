/**
 * Header Integration Script for Inkwell Blog
 * This script loads the header component on all pages
 */

document.addEventListener("DOMContentLoaded", () => {
  // Load header component
  loadHeader()

  // Load footer component if needed
  loadFooter()
})

// Function to load header component
async function loadHeader() {
  try {
    // Get the header container
    const headerContainer = document.getElementById("header-container")
    if (!headerContainer) return

    // Fetch the header HTML
    const response = await fetch("header.html")
    if (!response.ok) {
      throw new Error(`Failed to load header: ${response.status} ${response.statusText}`)
    }

    // Insert the header HTML
    const headerHTML = await response.text()
    headerContainer.innerHTML = headerHTML

    // Initialize header functionality
    initializeHeader()
  } catch (error) {
    console.error("Error loading header:", error)
    // Fallback header in case of error
    const headerContainer = document.getElementById("header-container")
    if (headerContainer) {
      headerContainer.innerHTML = `
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
    }
  }
}

// Function to load footer component
async function loadFooter() {
  try {
    // Get the footer container
    const footerContainer = document.getElementById("footer-container")
    if (!footerContainer) return

    // Fetch the footer HTML
    const response = await fetch("footer.html")
    if (!response.ok) {
      throw new Error(`Failed to load footer: ${response.status} ${response.statusText}`)
    }

    // Insert the footer HTML
    const footerHTML = await response.text()
    footerContainer.innerHTML = footerHTML

    // Initialize footer functionality
    initializeFooter()
  } catch (error) {
    console.error("Error loading footer:", error)
  }
}

// Dummy functions to prevent errors.  These should be defined elsewhere.
function toggleTheme() {
  console.warn("toggleTheme function is not defined.  Please implement.")
}

function getAllCategories() {
  console.warn("getAllCategories function is not defined.  Please implement.")
  return []
}

function renderFooterCategories() {
  console.warn("renderFooterCategories function is not defined.  Please implement.")
}

function setupNewsletterForm() {
  console.warn("setupNewsletterForm function is not defined.  Please implement.")
}

// Initialize header functionality
function initializeHeader() {
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

  // Theme toggle
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle")

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme)
  }

  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme)
  }

  // Load header categories
  loadHeaderCategories()

  // Set active nav link
  setActiveNavLink()
}

// Load categories in the header
function loadHeaderCategories() {
  const headerCategoriesList = document.getElementById("header-categories-list")
  const mobileCategoryMenu = document.getElementById("mobile-category-menu")

  if (!headerCategoriesList && !mobileCategoryMenu) return

  try {
    // Get categories
    const categories = getAllCategories()

    // Update desktop dropdown
    if (headerCategoriesList) {
      if (categories && categories.length > 0) {
        headerCategoriesList.innerHTML = categories
          .map(
            (category) => `
          <li><a href="index.html?category=${encodeURIComponent(category)}" class="dropdown-item">${category}</a></li>
        `,
          )
          .join("")
      } else {
        headerCategoriesList.innerHTML = '<li><span class="dropdown-item">No categories available</span></li>'
      }
    }

    // Update mobile dropdown
    if (mobileCategoryMenu) {
      if (categories && categories.length > 0) {
        mobileCategoryMenu.innerHTML = `
          <select id="mobile-category-select" class="mobile-category-select">
            <option value="">All Categories</option>
            ${categories
              .map(
                (category) => `
              <option value="${category}">${category}</option>
            `,
              )
              .join("")}
          </select>
        `

        // Add change event listener
        const mobileCategorySelect = document.getElementById("mobile-category-select")
        if (mobileCategorySelect) {
          mobileCategorySelect.addEventListener("change", function () {
            if (this.value) {
              window.location.href = `index.html?category=${encodeURIComponent(this.value)}`
            } else {
              window.location.href = "index.html"
            }
          })
        }
      } else {
        mobileCategoryMenu.innerHTML = "<p>No categories available</p>"
      }
    }
  } catch (error) {
    console.error("Error loading header categories:", error)

    // Fallback content
    if (headerCategoriesList) {
      headerCategoriesList.innerHTML = '<li><span class="dropdown-item">Failed to load categories</span></li>'
    }

    if (mobileCategoryMenu) {
      mobileCategoryMenu.innerHTML = "<p>Failed to load categories</p>"
    }
  }
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname
  const filename = currentPath.substring(currentPath.lastIndexOf("/") + 1)

  // Get all nav links
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")

    // Remove active class from all links
    link.classList.remove("active")

    // Add active class to current page link
    if ((filename === "" || filename === "index.html") && (href === "index.html" || href === "./")) {
      link.classList.add("active")
    } else if (href === filename) {
      link.classList.add("active")
    }
  })
}

// Initialize footer functionality
function initializeFooter() {
  // Render footer categories
  renderFooterCategories()

  // Setup newsletter form
  setupNewsletterForm()
}
