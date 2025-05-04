/**
 * Theme Management for Inkwell Blog
 * Handles theme switching, animations, and preferences
 */

// Theme state
const themeState = {
  currentTheme: "light",
  isTransitioning: false,
}

// Initialize theme functionality
function initTheme() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")

  // Check for system preference if no saved theme
  if (!savedTheme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    themeState.currentTheme = prefersDark ? "dark" : "light"
  } else {
    themeState.currentTheme = savedTheme
  }

  // Apply the theme
  applyTheme(themeState.currentTheme)

  // Set up theme toggle button
  setupThemeToggle()

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      // Only auto-switch if user hasn't manually set a preference
      const newTheme = e.matches ? "dark" : "light"
      applyTheme(newTheme)
      themeState.currentTheme = newTheme
    }
  })
}

// Apply theme to document
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme")
  } else {
    document.body.classList.remove("dark-theme")
  }

  // Update theme color meta tag for browser UI
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", theme === "dark" ? "#121212" : "#ffffff")
  }

  // Store the preference
  localStorage.setItem("theme", theme)
}

// Set up theme toggle button with animation
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  if (!themeToggleBtn) return

  // Update button appearance based on current theme
  updateThemeToggleButton(themeToggleBtn, themeState.currentTheme)

  // Add animation class
  themeToggleBtn.classList.add("theme-toggle-animated")

  // Add click event
  themeToggleBtn.addEventListener("click", () => {
    if (themeState.isTransitioning) return

    // Set transitioning state
    themeState.isTransitioning = true

    // Add animation class
    document.body.classList.add("theme-transition")

    // Toggle theme
    const newTheme = themeState.currentTheme === "dark" ? "light" : "dark"
    themeState.currentTheme = newTheme

    // Apply the new theme
    applyTheme(newTheme)

    // Update button appearance
    updateThemeToggleButton(themeToggleBtn, newTheme)

    // Add animation to the toggle button
    themeToggleBtn.classList.add("theme-toggle-spin")

    // Remove animation classes after transition completes
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
      themeToggleBtn.classList.remove("theme-toggle-spin")
      themeState.isTransitioning = false
    }, 500)
  })
}

// Update theme toggle button appearance
function updateThemeToggleButton(button, theme) {
  if (!button) return

  // Update button icon
  button.innerHTML =
    theme === "dark"
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`

  // Update aria-label
  button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode")

  // Update title
  button.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode")
}

// Initialize theme when DOM is loaded
document.addEventListener("DOMContentLoaded", initTheme)
