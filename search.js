/**
 * Advanced Search System for Inkwell Blog
 * This file contains all search-related functionality
 */

// Global search state
const searchState = {
  query: "",
  results: [],
  isSearching: false,
  resultsVisible: false,
}

// Mock functions (replace with actual implementations or imports)
function showToast(message) {
  console.log("Toast:", message)
}

function searchPosts(query) {
  // Replace with actual search logic
  const allPosts = getAllPosts()
  return allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()),
  )
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString()
}

function calculateReadingTime(text) {
  const wordsPerMinute = 200
  const numWords = text.split(/\s/g).length
  const minutes = numWords / wordsPerMinute
  return Math.ceil(minutes) + " min read"
}

function createExcerpt(text, maxLength) {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength) + "..."
}

function getAllPosts() {
  // Replace with actual data fetching logic
  return [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post.",
      category: "Technology",
      date: "2024-01-01",
      image: null,
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post.",
      category: "Travel",
      date: "2024-01-05",
      image: null,
    },
    {
      id: 3,
      title: "Third Post about Technology",
      content: "This post discusses advanced technology.",
      category: "Technology",
      date: "2024-01-10",
      image: null,
    },
    {
      id: 4,
      title: "Fourth Post on Travel",
      content: "This post is about traveling the world.",
      category: "Travel",
      date: "2024-01-15",
      image: null,
    },
  ]
}

// Initialize search functionality
function initSearch() {
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")
  const searchResults = document.getElementById("search-results")
  const searchResultsContainer = document.getElementById("search-results-container")
  const closeSearchResults = document.getElementById("close-search-results")
  const searchForm = document.getElementById("search-form")

  if (!searchInput || !searchBtn) return

  // Create search results container if it doesn't exist
  if (!searchResults) {
    createSearchResultsUI()
  }

  // Debounce function to limit how often the search is performed
  function debounce(func, wait) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

  // Enhanced search function with highlighting
  const performSearch = debounce(() => {
    const query = searchInput.value.trim()
    searchState.query = query

    if (query.length < 2) {
      if (query.length > 0) {
        showToast("Please enter at least 2 characters to search")
      }
      return
    }

    searchState.isSearching = true

    // Show loading indicator
    searchResultsContainer.innerHTML = `
      <div class="search-loading">
        <div class="loading-spinner"></div>
        <p>Searching...</p>
      </div>
    `
    searchResults.classList.add("show")
    searchState.resultsVisible = true

    // Perform the search
    setTimeout(() => {
      const results = searchPosts(query)
      searchState.results = results
      searchState.isSearching = false

      renderSearchResults(results, query)
    }, 300) // Simulate search delay
  }, 300) // Debounce delay

  // Search button click
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    performSearch()
  })

  // Search form submit
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
      performSearch()
    })
  }

  // Search on Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      performSearch()
    }
  })

  // Live search as user types (optional)
  searchInput.addEventListener("input", performSearch)

  // Close search results
  if (closeSearchResults) {
    closeSearchResults.addEventListener("click", () => {
      searchResults.classList.remove("show")
      searchState.resultsVisible = false
    })
  }

  // Close search results when clicking outside
  window.addEventListener("click", (e) => {
    if (
      searchResults &&
      searchResults.classList.contains("show") &&
      !searchResults.contains(e.target) &&
      e.target !== searchBtn &&
      e.target !== searchInput
    ) {
      searchResults.classList.remove("show")
      searchState.resultsVisible = false
    }
  })

  // Close search results with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchResults && searchResults.classList.contains("show")) {
      searchResults.classList.remove("show")
      searchState.resultsVisible = false
    }
  })

  // Initialize category-specific search if on category page
  initCategorySearch()
}

// Create search results UI if it doesn't exist
function createSearchResultsUI() {
  const searchContainer = document.querySelector(".search-container") || document.body

  const searchResults = document.createElement("div")
  searchResults.id = "search-results"
  searchResults.className = "search-results"

  searchResults.innerHTML = `
    <div class="search-results-header">
      <h3>Search Results</h3>
      <button id="close-search-results" class="close-search-results" aria-label="Close search results">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div id="search-results-container" class="search-results-container"></div>
  `

  searchContainer.appendChild(searchResults)
}

// Render search results
function renderSearchResults(results, query) {
  const searchResultsContainer = document.getElementById("search-results-container")
  if (!searchResultsContainer) return

  if (results.length === 0) {
    searchResultsContainer.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        <p>No results found for "${query}"</p>
        <p class="search-suggestion">Try different keywords or check your spelling</p>
      </div>
    `
  } else {
    // Function to highlight matching text
    const highlightMatch = (text, query) => {
      if (!text) return ""
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
      return text.replace(regex, "<mark>$1</mark>")
    }

    searchResultsContainer.innerHTML = `
      <p class="search-results-count">${results.length} result${results.length === 1 ? "" : "s"} found for "${query}"</p>
      <div class="search-results-list">
        ${results
          .map(
            (post, index) => `
          <div class="search-result-item animate-slide-up" style="animation-delay: ${index * 0.05}s">
            <div class="search-result-image">
              <img src="${post.image || "/placeholder.svg?height=80&width=80"}" alt="${post.title}" loading="lazy">
            </div>
            <div class="search-result-content">
              <h4><a href="post.html?id=${post.id}">${highlightMatch(post.title, query)}</a></h4>
              <div class="search-result-meta">
                <span class="category">${post.category}</span> • 
                <span class="date">${formatDate(post.date)}</span> •
                <span class="reading-time">${calculateReadingTime(post.content)}</span>
              </div>
              <p>${highlightMatch(post.excerpt || createExcerpt(post.content, 150), query)}</p>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `
  }
}

// Initialize category-specific search
function initCategorySearch() {
  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")

  if (category) {
    const searchInput = document.getElementById("search-input")
    if (searchInput) {
      searchInput.placeholder = `Search in ${category}...`

      // Override the search function to filter by category
      window.searchPosts = (query) => {
        const allPosts = getAllPosts()

        return allPosts.filter((post) => {
          // First filter by category
          if (post.category !== category) return false

          // Then search in title and content
          const titleMatch = post.title.toLowerCase().includes(query.toLowerCase())
          const contentMatch = post.content.toLowerCase().includes(query.toLowerCase())
          return titleMatch || contentMatch
        })
      }
    }
  }
}

// Initialize search when DOM is loaded
document.addEventListener("DOMContentLoaded", initSearch)
