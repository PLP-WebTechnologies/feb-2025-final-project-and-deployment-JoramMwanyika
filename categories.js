/**
 * Category Management for Inkwell Blog
 * Handles category rendering, filtering, and navigation
 */

// Category state
const categoryState = {
  categories: [],
  activeCategory: null,
  isLoading: false,
}

// Mock functions (replace with actual implementations)
function getAllCategories() {
  return ["Technology", "Travel", "Food", "Lifestyle"]
}

function showToast(message) {
  console.log("Toast:", message)
}

function renderCategories() {
  console.log("Rendering main categories")
}

function renderFooterCategories() {
  console.log("Rendering footer categories")
}

// Initialize category functionality
function initCategories() {
  // Load categories
  loadCategories()

  // Check if we're on a category page
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")

  if (category) {
    categoryState.activeCategory = decodeURIComponent(category)
    updateCategoryUI(categoryState.activeCategory)
  }

  // Set up category navigation
  setupCategoryNavigation()
}

// Load all categories
function loadCategories() {
  categoryState.isLoading = true

  try {
    // Get categories from data function
    const categories = getAllCategories()
    categoryState.categories = categories

    // Render categories in all locations
    renderAllCategoryElements()
  } catch (error) {
    console.error("Error loading categories:", error)
    showToast("Failed to load categories. Please refresh the page.")
  } finally {
    categoryState.isLoading = false
  }
}

// Render all category elements on the page
function renderAllCategoryElements() {
  // Render main category container
  renderCategories()

  // Render footer categories
  renderFooterCategories()

  // Render category filter if on index page
  renderCategoryFilter()

  // Render mobile category menu
  renderMobileCategoryMenu()
}

// Render category filter on index page
function renderCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter")
  if (!categoryFilter) return

  const categories = categoryState.categories

  if (categories.length === 0) {
    categoryFilter.innerHTML = "<p>No categories available</p>"
    return
  }

  // Get active category from URL
  const urlParams = new URLSearchParams(window.location.search)
  const activeCategory = urlParams.get("category")

  categoryFilter.innerHTML = `
    <ul class="category-filter-list">
      <li class="category-filter-item ${!activeCategory ? "active" : ""}">
        <a href="index.html" class="category-filter-link">All</a>
      </li>
      ${categories
        .map(
          (category) => `
        <li class="category-filter-item ${activeCategory === category ? "active" : ""}">
          <a href="index.html?category=${encodeURIComponent(category)}" class="category-filter-link">${category}</a>
        </li>
      `,
        )
        .join("")}
    </ul>
  `
}

// Render mobile category menu
function renderMobileCategoryMenu() {
  const mobileCategoryMenu = document.getElementById("mobile-category-menu")
  if (!mobileCategoryMenu) return

  const categories = categoryState.categories

  if (categories.length === 0) {
    mobileCategoryMenu.innerHTML = "<p>No categories available</p>"
    return
  }

  mobileCategoryMenu.innerHTML = `
    <select id="category-select" class="category-select" aria-label="Select category">
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
  const categorySelect = document.getElementById("category-select")
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      const selectedCategory = e.target.value
      if (selectedCategory) {
        window.location.href = `index.html?category=${encodeURIComponent(selectedCategory)}`
      } else {
        window.location.href = "index.html"
      }
    })

    // Set selected option based on URL
    const urlParams = new URLSearchParams(window.location.search)
    const activeCategory = urlParams.get("category")
    if (activeCategory) {
      categorySelect.value = decodeURIComponent(activeCategory)
    }
  }
}

// Set up category navigation
function setupCategoryNavigation() {
  // Add event listeners for category links
  document.addEventListener("click", (e) => {
    // Check if the clicked element is a category link
    if (e.target.matches(".category-link") || e.target.closest(".category-link")) {
      const link = e.target.matches(".category-link") ? e.target : e.target.closest(".category-link")
      const category = link.getAttribute("data-category")

      if (category) {
        e.preventDefault()
        navigateToCategory(category)
      }
    }
  })
}

// Navigate to a category
function navigateToCategory(category) {
  window.location.href = `index.html?category=${encodeURIComponent(category)}`
}

// Update UI based on active category
function updateCategoryUI(category) {
  // Update page title
  document.title = `${category} - Inkwell Blog`

  // Update header
  const categoryHeader = document.getElementById("category-header")
  if (categoryHeader) {
    categoryHeader.textContent = category
  }

  // Update breadcrumbs
  const breadcrumbs = document.getElementById("breadcrumbs")
  if (breadcrumbs) {
    breadcrumbs.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li>${category}</li>
    `
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute("content", `Browse all articles in the ${category} category on Inkwell Blog.`)
  }
}

// Initialize categories when DOM is loaded
document.addEventListener("DOMContentLoaded", initCategories)
