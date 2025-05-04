/**
 * Optimized Loading Script for Inkwell Blog
 * This script improves loading performance and user experience
 */

// Configuration
const config = {
  lazyLoadThreshold: "200px",
  preloadImages: true,
  priorityElements: [".hero-section", ".featured-posts"],
  deferredElements: [".popular-posts", ".recent-comments"],
  loadingTimeout: 5000, // 5 seconds timeout for loading indicators
}

// Mock functions for renderPopularPosts and renderRecentComments
// In a real application, these would be replaced with actual implementations or imports
function renderPopularPosts() {
  console.log("Rendering popular posts...")
  // Add your logic here to render popular posts
}

function renderRecentComments() {
  console.log("Rendering recent comments...")
  // Add your logic here to render recent comments
}

// Initialize optimized loading
document.addEventListener("DOMContentLoaded", () => {
  // Start performance measurement
  const startTime = performance.now()

  // Initialize optimizations
  initOptimizedLoading()

  // Log performance metrics
  window.addEventListener("load", () => {
    const loadTime = performance.now() - startTime
    console.log(`Page fully loaded in ${loadTime.toFixed(2)}ms`)

    // Report to analytics (mock function)
    reportPerformanceMetrics({
      loadTime,
      domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
      firstPaint: performance.getEntriesByType("paint")[0]?.startTime || 0,
    })
  })
})

// Initialize optimized loading
function initOptimizedLoading() {
  // Optimize image loading
  optimizeImageLoading()

  // Prioritize critical content
  prioritizeCriticalContent()

  // Defer non-critical content
  deferNonCriticalContent()

  // Handle loading timeouts
  handleLoadingTimeouts()

  // Preconnect to external domains
  preconnectToExternalDomains()
}

// Optimize image loading with Intersection Observer
function optimizeImageLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute("data-src")

            if (src) {
              // Create a new image to preload
              const preloadImg = new Image()
              preloadImg.onload = () => {
                img.src = src
                img.removeAttribute("data-src")
                img.classList.add("loaded")
              }
              preloadImg.onerror = () => {
                // Use fallback image if loading fails
                img.src = "/placeholder.svg?height=300&width=400"
                img.classList.add("error")
              }
              preloadImg.src = src
            }

            imageObserver.unobserve(img)
          }
        })
      },
      {
        rootMargin: config.lazyLoadThreshold,
        threshold: 0.01,
      },
    )

    // Observe all images with data-src attribute
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll("img[data-src]").forEach((img) => {
      img.src = img.getAttribute("data-src")
      img.removeAttribute("data-src")
    })
  }
}

// Prioritize critical content
function prioritizeCriticalContent() {
  // Find critical elements
  config.priorityElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      // Add high priority class
      element.classList.add("high-priority")

      // Preload images in critical elements
      if (config.preloadImages) {
        const images = element.querySelectorAll("img[data-src]")
        images.forEach((img) => {
          const src = img.getAttribute("data-src")
          if (src) {
            img.src = src
            img.removeAttribute("data-src")
          }
        })
      }
    })
  })
}

// Defer loading of non-critical content
function deferNonCriticalContent() {
  if ("IntersectionObserver" in window) {
    const contentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target

            // Check if this is a container that needs content loaded
            if (element.classList.contains("deferred-container")) {
              loadDeferredContent(element)
            }

            contentObserver.unobserve(element)
          }
        })
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.01,
      },
    )

    // Observe deferred elements
    config.deferredElements.forEach((selector) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        element.classList.add("deferred-container")
        contentObserver.observe(element)
      })
    })
  } else {
    // Fallback for browsers without IntersectionObserver
    config.deferredElements.forEach((selector) => {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        loadDeferredContent(element)
      })
    })
  }
}

// Load deferred content
function loadDeferredContent(container) {
  // This is a placeholder function that would be replaced with actual content loading logic
  // For example, if the container is for popular posts, it would call renderPopularPosts()

  if (container.classList.contains("popular-posts")) {
    // Check if we have a global function to render popular posts
    if (typeof renderPopularPosts === "function") {
      renderPopularPosts()
    }
  } else if (container.classList.contains("recent-comments")) {
    // Check if we have a global function to render recent comments
    if (typeof renderRecentComments === "function") {
      renderRecentComments()
    }
  }
}

// Handle loading timeouts
function handleLoadingTimeouts() {
  // Find all loading indicators
  const loadingIndicators = document.querySelectorAll(".loading-indicator")

  loadingIndicators.forEach((indicator) => {
    // Set timeout to show error message if loading takes too long
    setTimeout(() => {
      // Check if the indicator is still in the DOM and still has loading class
      if (document.body.contains(indicator) && indicator.classList.contains("loading-indicator")) {
        indicator.innerHTML = `
          <div class="loading-error">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <p>Loading timed out. <button class="retry-btn">Retry</button></p>
          </div>
        `

        // Add retry functionality
        const retryBtn = indicator.querySelector(".retry-btn")
        if (retryBtn) {
          retryBtn.addEventListener("click", () => {
            // Reset the indicator
            indicator.innerHTML = `
              <div class="loading-spinner"></div>
              <p>Loading content...</p>
            `

            // Find the parent container and try to reload its content
            const container = indicator.closest(".deferred-container")
            if (container) {
              loadDeferredContent(container)
            } else {
              // If not in a deferred container, reload the page
              window.location.reload()
            }
          })
        }
      }
    }, config.loadingTimeout)
  })
}

// Preconnect to external domains for faster resource loading
function preconnectToExternalDomains() {
  // List of domains to preconnect to
  const domains = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://images.unsplash.com",
    "https://randomuser.me",
  ]

  domains.forEach((domain) => {
    const link = document.createElement("link")
    link.rel = "preconnect"
    link.href = domain
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  })
}

// Mock function to report performance metrics
function reportPerformanceMetrics(metrics) {
  console.log("Performance metrics:", metrics)
  // In a real application, this would send data to an analytics service
}
