/**
 * Performance Optimizations for Inkwell Blog
 * This file contains functions to improve site performance
 */

// Performance metrics tracking
const perfMetrics = {
  pageLoadStart: performance.now(),
  resourcesLoaded: false,
  domInteractive: false,
  fullyLoaded: false,
}

// Initialize performance optimizations
function initPerformance() {
  // Optimize image loading
  optimizeImageLoading()

  // Preload critical resources
  preloadCriticalResources()

  // Defer non-critical JavaScript
  deferNonCriticalJS()

  // Track performance metrics
  trackPerformanceMetrics()
}

// Optimize image loading with Intersection Observer
function optimizeImageLoading() {
  // Use Intersection Observer for better performance
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
              preloadImg.src = src
            }

            imageObserver.unobserve(img)
          }
        })
      },
      {
        rootMargin: "200px 0px", // Load images 200px before they come into view
        threshold: 0.01,
      },
    )

    // Observe all images with data-src attribute
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img)
    })

    // Also observe lazy-image class
    document.querySelectorAll(".lazy-image").forEach((img) => {
      if (!img.classList.contains("loaded")) {
        imageObserver.observe(img)
      }
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll("img[data-src]").forEach((img) => {
      img.src = img.getAttribute("data-src")
      img.removeAttribute("data-src")
      img.classList.add("loaded")
    })

    document.querySelectorAll(".lazy-image").forEach((img) => {
      img.classList.add("loaded")
    })
  }
}

// Preload critical resources
function preloadCriticalResources() {
  // Preload critical CSS
  const criticalCSS = ["styles.css", "enhanced-styles.css"]

  criticalCSS.forEach((css) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "style"
    link.href = css
    document.head.appendChild(link)
  })

  // Preload logo and hero images
  const criticalImages = [
    document.querySelector(".logo img")?.src,
    document.querySelector(".hero-slide")?.style.backgroundImage?.replace(/url$$['"](.+)['"]$$/, "$1"),
  ].filter(Boolean)

  criticalImages.forEach((imgSrc) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = imgSrc
    document.head.appendChild(link)
  })
}

// Defer non-critical JavaScript
function deferNonCriticalJS() {
  // Find scripts to defer
  const scripts = document.querySelectorAll("script:not([async]):not([defer])")

  scripts.forEach((script) => {
    // Skip if it's an inline script or already processed
    if (!script.src || script.hasAttribute("data-processed")) return

    // Skip critical scripts
    const criticalScripts = ["script.js", "enhanced-script.js", "search.js", "theme.js", "performance.js"]
    const isCritical = criticalScripts.some((criticalScript) => script.src.includes(criticalScript))

    if (isCritical) return

    // Create a new deferred script
    const deferredScript = document.createElement("script")
    deferredScript.src = script.src
    deferredScript.defer = true
    deferredScript.setAttribute("data-processed", "true")

    // Replace the original script
    script.parentNode.replaceChild(deferredScript, script)
  })
}

// Track performance metrics
function trackPerformanceMetrics() {
  // Track when DOM is interactive
  document.addEventListener("DOMContentLoaded", () => {
    perfMetrics.domInteractive = true
    perfMetrics.domInteractiveTime = performance.now() - perfMetrics.pageLoadStart

    console.log(`DOM Interactive: ${perfMetrics.domInteractiveTime.toFixed(2)}ms`)
  })

  // Track when page is fully loaded
  window.addEventListener("load", () => {
    perfMetrics.fullyLoaded = true
    perfMetrics.fullyLoadedTime = performance.now() - perfMetrics.pageLoadStart

    console.log(`Page Fully Loaded: ${perfMetrics.fullyLoadedTime.toFixed(2)}ms`)

    // Report metrics if needed
    if (window.navigator.sendBeacon) {
      // This would send metrics to your analytics endpoint
      // navigator.sendBeacon('/analytics', JSON.stringify(perfMetrics));
    }
  })

  // Track resource loading
  const resourceCount = performance.getEntriesByType("resource").length
  let loadedResources = 0

  const resourceObserver = new PerformanceObserver((list) => {
    loadedResources += list.getEntries().length

    if (loadedResources >= resourceCount) {
      perfMetrics.resourcesLoaded = true
      perfMetrics.resourcesLoadedTime = performance.now() - perfMetrics.pageLoadStart
      console.log(`All Resources Loaded: ${perfMetrics.resourcesLoadedTime.toFixed(2)}ms`)
    }
  })

  resourceObserver.observe({ entryTypes: ["resource"] })
}

// Initialize performance optimizations when DOM is loaded
document.addEventListener("DOMContentLoaded", initPerformance)
