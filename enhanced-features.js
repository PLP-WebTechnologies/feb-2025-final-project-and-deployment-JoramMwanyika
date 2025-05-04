// Enhanced features for the blog

// Helper functions (assuming these are defined elsewhere or imported)
function showToast(message) {
  // Placeholder for toast functionality
  console.log("Toast:", message)
}

function getAllPosts() {
  // Placeholder for fetching all posts
  return []
}

function formatDate(date) {
  // Placeholder for formatting date
  return date
}

function createExcerpt(content) {
  // Placeholder for creating excerpt
  return content.substring(0, 100) + "..."
}

// Add syntax highlighting for code blocks
function setupSyntaxHighlighting() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Find all code blocks
  const codeBlocks = postContent.querySelectorAll("pre")

  codeBlocks.forEach((block) => {
    // Add syntax highlighting class
    block.classList.add("syntax-highlight")

    // Determine language from first line if available
    const content = block.textContent
    const firstLine = content.split("\n")[0].trim()

    if (firstLine.startsWith("//") && firstLine.includes("language:")) {
      const language = firstLine.split("language:")[1].trim()
      block.classList.add(`language-${language}`)

      // Remove the language comment line
      const newContent = content.split("\n").slice(1).join("\n")
      block.textContent = newContent
    }

    // Add copy button
    const copyButton = document.createElement("button")
    copyButton.className = "copy-code-button"
    copyButton.textContent = "Copy"
    copyButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(block.textContent)
        .then(() => {
          // Change button text temporarily
          const originalText = copyButton.textContent
          copyButton.textContent = "Copied!"
          setTimeout(() => {
            copyButton.textContent = originalText
          }, 2000)
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err)
        })
    })

    block.parentNode.insertBefore(copyButton, block)
  })
}

// Add bookmark functionality
function setupBookmarks() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Get post ID
  const urlParams = new URLSearchParams(window.location.search)
  const postId = urlParams.get("id")
  if (!postId) return

  // Create bookmark button
  const bookmarkButton = document.createElement("button")
  bookmarkButton.className = "bookmark-button"

  // Check if post is already bookmarked
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
  const isBookmarked = bookmarks.includes(Number(postId))

  // Set initial state
  if (isBookmarked) {
    bookmarkButton.classList.add("bookmarked")
    bookmarkButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
      Bookmarked
    `
  } else {
    bookmarkButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
      Bookmark
    `
  }

  // Add click event
  bookmarkButton.addEventListener("click", () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
    const postIdNum = Number(postId)

    if (bookmarks.includes(postIdNum)) {
      // Remove bookmark
      const updatedBookmarks = bookmarks.filter((id) => id !== postIdNum)
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks))

      bookmarkButton.classList.remove("bookmarked")
      bookmarkButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        Bookmark
      `

      showToast("Removed from bookmarks")
    } else {
      // Add bookmark
      bookmarks.push(postIdNum)
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))

      bookmarkButton.classList.add("bookmarked")
      bookmarkButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        Bookmarked
      `

      showToast("Added to bookmarks")
    }
  })

  // Add to post actions
  const postActions = document.querySelector(".post-actions")
  if (postActions) {
    postActions.appendChild(bookmarkButton)
  }

  // Add bookmarks page link to footer
  const footerLinks = document.querySelector(".footer-links ul")
  if (footerLinks) {
    const bookmarksLink = document.createElement("li")
    bookmarksLink.innerHTML = `<a href="bookmarks.html">My Bookmarks</a>`
    footerLinks.appendChild(bookmarksLink)
  }
}

// Create bookmarks page
function createBookmarksPage() {
  // Check if we're on the bookmarks page
  if (!window.location.pathname.includes("bookmarks.html")) return

  // Create container
  const container = document.querySelector("main.container")
  if (!container) return

  // Get bookmarks
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]")
  const posts = getAllPosts()

  // Filter bookmarked posts
  const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post.id))

  // Create content
  let content = `
    <section class="bookmarks-section">
      <h2>My Bookmarks</h2>
  `

  if (bookmarkedPosts.length === 0) {
    content += `<p>You haven't bookmarked any posts yet.</p>`
  } else {
    content += `<div class="posts-grid">`

    bookmarkedPosts.forEach((post) => {
      content += `
        <div class="post-card">
          <img src="${post.image || "/placeholder.svg?height=180&width=300"}" alt="${post.title}" class="post-image" loading="lazy">
          <div class="post-content">
            <h3 class="post-title">
              <a href="post.html?id=${post.id}">${post.title}</a>
            </h3>
            <div class="post-meta">
              <span class="author">
                <img src="${post.authorAvatar || "/placeholder.svg?height=24&width=24"}" alt="${post.author}" class="author-avatar">
                ${post.author}
              </span>
              <span class="category">${post.category}</span>
              <span class="date">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                ${formatDate(post.date)}
              </span>
            </div>
            <div class="post-excerpt">
              ${post.excerpt || createExcerpt(post.content)}
            </div>
            <a href="post.html?id=${post.id}" class="read-more">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      `
    })

    content += `</div>`
  }

  content += `</section>`

  // Add to container
  container.innerHTML = content
}

// Add text-to-speech functionality
function setupTextToSpeech() {
  // Check if browser supports speech synthesis
  if (!("speechSynthesis" in window)) return

  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Create text-to-speech button
  const ttsButton = document.createElement("button")
  ttsButton.className = "tts-button"
  ttsButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
    Read Aloud
  `

  // Get post body text
  const postBody = postContent.querySelector(".post-body")
  if (!postBody) return

  // Speaking state
  let isSpeaking = false

  // Add click event
  ttsButton.addEventListener("click", () => {
    if (isSpeaking) {
      // Stop speaking
      window.speechSynthesis.cancel()
      isSpeaking = false

      ttsButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        Read Aloud
      `
    } else {
      // Start speaking
      const text = postBody.textContent
      const utterance = new SpeechSynthesisUtterance(text)

      // Set language to English
      utterance.lang = "en-US"

      // Set voice (optional)
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) {
        utterance.voice = voices.find((voice) => voice.lang.includes("en-")) || voices[0]
      }

      // Handle end of speech
      utterance.onend = () => {
        isSpeaking = false
        ttsButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          Read Aloud
        `
      }

      // Start speaking
      window.speechSynthesis.speak(utterance)
      isSpeaking = true

      ttsButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        Stop Reading
      `
    }
  })

  // Add to post actions
  const postActions = document.querySelector(".post-actions")
  if (postActions) {
    postActions.appendChild(ttsButton)
  }
}

// Initialize enhanced features
document.addEventListener("DOMContentLoaded", () => {
  // Setup syntax highlighting
  setupSyntaxHighlighting()

  // Setup bookmarks
  setupBookmarks()

  // Create bookmarks page
  createBookmarksPage()

  // Setup text-to-speech
  setupTextToSpeech()
})
