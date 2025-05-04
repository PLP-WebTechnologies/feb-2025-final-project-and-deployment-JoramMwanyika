// New enhanced features for the blog

// Mock data functions (replace with actual data fetching)
function getFeaturedPosts() {
  return [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Explore the latest trends in web development and how they will shape the future.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47a04ca0052d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Mastering JavaScript Fundamentals",
      excerpt: "A comprehensive guide to understanding the core concepts of JavaScript.",
      image:
        "https://images.unsplash.com/photo-1587620962725-ead375030bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]
}

function createExcerpt(content, maxLength = 100) {
  if (!content) return ""
  const trimmedString = content.length > maxLength ? content.substring(0, maxLength) : content
  return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + "..."
}

function getAllCategories() {
  return ["Web Development", "Web Design", "JavaScript", "CSS", "Accessibility"]
}

function getAllPosts() {
  return [
    {
      id: 1,
      title: "The Future of Web Development",
      author: "Jane Doe",
      category: "Web Development",
      date: "2024-01-20",
      content:
        "Explore the latest trends in web development and how they will shape the future. This includes advancements in frameworks, AI integration, and more.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47a04ca0052d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      comments: [
        {
          name: "John Smith",
          date: "2024-01-21",
          content: "Great article! Very informative.",
        },
        {
          name: "Emily Chen",
          date: "2024-01-22",
          content: "I agree, this is a must-read for anyone in web development.",
        },
      ],
    },
    {
      id: 2,
      title: "Mastering JavaScript Fundamentals",
      author: "John Smith",
      category: "JavaScript",
      date: "2024-01-15",
      content:
        "A comprehensive guide to understanding the core concepts of JavaScript. Learn about variables, functions, objects, and more.",
      image:
        "https://images.unsplash.com/photo-1587620962725-ead375030bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      comments: [
        {
          name: "Jane Doe",
          date: "2024-01-16",
          content: "This helped me a lot! Thanks for the clear explanations.",
        },
      ],
    },
    {
      id: 3,
      title: "The Importance of Accessibility in Web Design",
      author: "Sarah Lee",
      category: "Accessibility",
      date: "2024-01-10",
      content:
        "Learn why accessibility is crucial for creating inclusive and user-friendly websites. Discover best practices and tools for making your site accessible to everyone.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 4,
      title: "CSS Tips and Tricks for Modern Websites",
      author: "Alex Johnson",
      category: "CSS",
      date: "2024-01-05",
      content:
        "Discover useful CSS tips and tricks for creating modern and responsive websites. Learn about advanced selectors, animations, and layout techniques.",
      image:
        "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 5,
      title: "Creating Stunning Web Designs with Minimalist Approach",
      author: "John Smith",
      category: "Web Design",
      date: "2023-12-28",
      content:
        "Explore the principles of minimalist web design and learn how to create visually appealing and user-friendly websites with a focus on simplicity.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 6,
      title: "Advanced JavaScript Techniques",
      author: "Emily Chen",
      category: "JavaScript",
      date: "2023-12-20",
      content:
        "Dive into advanced JavaScript techniques, including closures, prototypes, and asynchronous programming. Learn how to write efficient and maintainable code.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 7,
      title: "Responsive Web Design with CSS Grid",
      author: "Alex Johnson",
      category: "CSS",
      date: "2023-12-15",
      content:
        "Learn how to create responsive web layouts using CSS Grid. Discover the power and flexibility of this modern layout system.",
      image:
        "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 8,
      title: "The Art of User Interface Design",
      author: "John Smith",
      category: "Web Design",
      date: "2023-12-10",
      content:
        "Explore the principles of user interface design and learn how to create intuitive and engaging user experiences.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
    {
      id: 9,
      title: "Web Security Best Practices",
      author: "Jane Doe",
      category: "Web Development",
      date: "2023-12-05",
      content:
        "Learn about web security best practices and how to protect your website from common threats and vulnerabilities.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47a04ca0052d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      comments: [],
    },
    {
      id: 10,
      title: "Accessibility Testing Techniques",
      author: "Sarah Lee",
      category: "Accessibility",
      date: "2023-11-30",
      content:
        "Discover various accessibility testing techniques and tools for ensuring your website is accessible to users with disabilities.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      comments: [],
    },
  ]
}

function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { year: "numeric", month: "long", day: "numeric" }
  return date.toLocaleDateString(undefined, options)
}

// Hero slider functionality
function setupHeroSlider() {
  const heroSlider = document.getElementById("hero-slider")
  if (!heroSlider) return

  // Get featured posts for the hero slider
  const featuredPosts = getFeaturedPosts()

  if (featuredPosts.length === 0) {
    heroSlider.innerHTML = `
            <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
                <div class="hero-slide-content">
                    <h2>Welcome to Inkwell</h2>
                    <p>A modern blog for modern ideas. Start reading our articles or create your own.</p>
                    <a href="#featured-posts" class="btn btn-primary">Explore Articles</a>
                </div>
            </div>
        `
    return
  }

  // Create slides from featured posts
  heroSlider.innerHTML = featuredPosts
    .map(
      (post, index) => `
        <div class="hero-slide ${index === 0 ? "active" : ""}" style="background-image: url('${post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}')">
            <div class="hero-slide-content">
                <h2>${post.title}</h2>
                <p>${post.excerpt || createExcerpt(post.content, 120)}</p>
                <a href="post.html?id=${post.id}" class="btn btn-primary">Read Article</a>
            </div>
        </div>
    `,
    )
    .join("")

  // Setup slider controls
  const prevBtn = document.getElementById("hero-prev")
  const nextBtn = document.getElementById("hero-next")
  const slides = heroSlider.querySelectorAll(".hero-slide")
  let currentSlide = 0

  if (prevBtn && nextBtn && slides.length > 1) {
    // Auto slide function
    const autoSlide = () => {
      slides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide + 1) % slides.length
      slides[currentSlide].classList.add("active")
    }

    // Start auto sliding
    let slideInterval = setInterval(autoSlide, 5000)

    // Previous slide
    prevBtn.addEventListener("click", () => {
      clearInterval(slideInterval)
      slides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide - 1 + slides.length) % slides.length
      slides[currentSlide].classList.add("active")
      slideInterval = setInterval(autoSlide, 5000)
    })

    // Next slide
    nextBtn.addEventListener("click", () => {
      clearInterval(slideInterval)
      slides[currentSlide].classList.remove("active")
      currentSlide = (currentSlide + 1) % slides.length
      slides[currentSlide].classList.add("active")
      slideInterval = setInterval(autoSlide, 5000)
    })
  }
}

// Render categories with images
function renderCategories() {
  const categoriesContainer = document.getElementById("categories-container")
  if (!categoriesContainer) return

  const categories = getAllCategories()
  const posts = getAllPosts()

  // Category images (you can replace these with actual category images)
  const categoryImages = {
    "Web Development":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "Web Design":
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    JavaScript:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    CSS: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    Accessibility:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  }

  if (categories.length === 0) {
    categoriesContainer.innerHTML = "<p>No categories yet.</p>"
    return
  }

  categoriesContainer.innerHTML = categories
    .map((category) => {
      const categoryPosts = posts.filter((post) => post.category === category)
      return `
            <a href="index.html?category=${encodeURIComponent(category)}" class="category-card">
                <img src="${categoryImages[category] || "/placeholder.svg?height=150&width=200"}" alt="${category}">
                <div class="category-overlay">
                    <div>
                        <h3>${category}</h3>
                        <p>${categoryPosts.length} ${categoryPosts.length === 1 ? "article" : "articles"}</p>
                    </div>
                </div>
            </a>
        `
    })
    .join("")
}

// Render popular posts
function renderPopularPosts() {
  const popularPostsContainer = document.getElementById("popular-posts-container")
  if (!popularPostsContainer) return

  // For demo purposes, we'll just use the most recent posts
  // In a real application, you would track views or other metrics
  const posts = getAllPosts()
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const popularPosts = sortedPosts.slice(0, 4)

  if (popularPosts.length === 0) {
    popularPostsContainer.innerHTML = "<p>No posts yet.</p>"
    return
  }

  popularPostsContainer.innerHTML = popularPosts
    .map(
      (post) => `
        <div class="popular-post-card">
            <img src="${post.image || "/placeholder.svg?height=100&width=100"}" alt="${post.title}" class="popular-post-image">
            <div class="popular-post-content">
                <h4 class="popular-post-title">
                    <a href="post.html?id=${post.id}">${post.title}</a>
                </h4>
                <div class="popular-post-meta">
                    <span class="category">${post.category}</span> • 
                    <span class="date">${formatDate(post.date)}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Render recent comments
function renderRecentComments() {
  const recentCommentsContainer = document.getElementById("recent-comments-container")
  if (!recentCommentsContainer) return

  const posts = getAllPosts()
  const allComments = []

  posts.forEach((post) => {
    if (post.comments && post.comments.length > 0) {
      post.comments.forEach((comment) => {
        allComments.push({
          postId: post.id,
          postTitle: post.title,
          ...comment,
        })
      })
    }
  })

  // Sort by date (newest first)
  allComments.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Get the 3 most recent comments
  const recentComments = allComments.slice(0, 3)

  if (recentComments.length === 0) {
    recentCommentsContainer.innerHTML = "<p>No comments yet.</p>"
    return
  }

  recentCommentsContainer.innerHTML = recentComments
    .map(
      (comment) => `
        <div class="recent-comment-card">
            <div class="recent-comment-header">
                <span class="recent-comment-author">${comment.name}</span>
                <span class="recent-comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="recent-comment-content">
                <p>${createExcerpt(comment.content, 100)}</p>
            </div>
            <div class="recent-comment-post">
                <a href="post.html?id=${comment.postId}">On: ${comment.postTitle}</a>
            </div>
        </div>
    `,
    )
    .join("")
}

// Render author information
function renderAuthorInfo(authorName) {
  const authorInfo = document.getElementById("author-info")
  if (!authorInfo) return

  // In a real application, you would fetch author data from a database
  // For now, we'll use placeholder data
  const authorData = {
    "Jane Doe": {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Jane is a web developer with 5 years of experience. She specializes in frontend development and loves sharing her knowledge with others.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    "John Smith": {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "John is a UI/UX designer who focuses on creating beautiful and functional user interfaces. He has worked with various startups and tech companies.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    "Emily Chen": {
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "Emily is a full-stack developer with expertise in JavaScript frameworks. She enjoys solving complex problems and building efficient applications.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    "Alex Johnson": {
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Alex is a CSS expert who loves creating responsive and accessible websites. He regularly contributes to open-source projects.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
    "Sarah Lee": {
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Sarah is an accessibility advocate and frontend developer. She helps companies make their websites more inclusive and user-friendly.",
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  }

  const author = authorData[authorName] || {
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Author information not available.",
    twitter: "#",
    github: "#",
    linkedin: "#",
  }

  authorInfo.innerHTML = `
        <img src="${author.avatar}" alt="${authorName}" class="author-avatar-large">
        <div class="author-bio">
            <h4>${authorName}</h4>
            <p>${author.bio}</p>
            <div class="author-social">
                <a href="${author.twitter}" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="${author.github}" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="${author.linkedin}" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>
        </div>
    `
}

// Setup back to top button
function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top")
  if (!backToTopBtn) return

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })

  // Scroll to top when clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Render footer categories
function renderFooterCategories() {
  const footerCategoriesList = document.getElementById("footer-categories-list")
  if (!footerCategoriesList) return

  const categories = getAllCategories()

  if (categories.length === 0) {
    footerCategoriesList.innerHTML = "<li>No categories yet.</li>"
    return
  }

  footerCategoriesList.innerHTML = categories
    .map(
      (category) => `
        <li><a href="index.html?category=${encodeURIComponent(category)}">${category}</a></li>
    `,
    )
    .join("")
}

// Load more posts functionality
function setupLoadMore() {
  const loadMoreBtn = document.getElementById("load-more-btn")
  const postsContainer = document.getElementById("posts-container")
  if (!loadMoreBtn || !postsContainer) return

  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")

  const posts = getPostsByCategory(category)
  const postsPerPage = 6
  let currentPage = 1

  // Initial render
  renderPaginatedPosts(posts, currentPage, postsPerPage)

  // Update load more button visibility
  updateLoadMoreButton(posts, currentPage, postsPerPage)

  // Load more event listener
  loadMoreBtn.addEventListener("click", () => {
    currentPage++
    renderPaginatedPosts(posts, currentPage, postsPerPage, true)
    updateLoadMoreButton(posts, currentPage, postsPerPage)
  })
}

// Render paginated posts
function renderPaginatedPosts(posts, page, postsPerPage, append = false) {
  const postsContainer = document.getElementById("posts-container")
  if (!postsContainer) return

  const startIndex = 0
  const endIndex = page * postsPerPage
  const paginatedPosts = posts.slice(startIndex, endIndex)

  if (paginatedPosts.length === 0) {
    postsContainer.innerHTML = "<p>No posts found. Go to the Admin page to create your first post!</p>"
    return
  }

  const postsHTML = paginatedPosts
    .map(
      (post) => `
        <div class="post-card">
            <img src="${post.image || "/placeholder.svg?height=180&width=300"}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <h3 class="post-title">
                    <a href="post.html?id=${post.id}">${post.title}</a>
                </h3>
                <div class="post-meta">
                    <span class="author">
                        <img src="${getAuthorAvatar(post.author)}" alt="${post.author}" class="author-avatar">
                        ${post.author}
                    </span>
                    <span class="category">${post.category}</span>
                    <span class="date">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        ${formatDate(post.date)}
                    </span>
                    <span class="reading-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        ${calculateReadingTime(post.content)}
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
    `,
    )
    .join("")

  if (append) {
    postsContainer.innerHTML += postsHTML
  } else {
    postsContainer.innerHTML = postsHTML
  }
}

// Update load more button visibility
function updateLoadMoreButton(posts, currentPage, postsPerPage) {
  const loadMoreBtn = document.getElementById("load-more-btn")
  if (!loadMoreBtn) return

  const totalPages = Math.ceil(posts.length / postsPerPage)

  if (currentPage >= totalPages) {
    loadMoreBtn.style.display = "none"
  } else {
    loadMoreBtn.style.display = "inline-block"
  }
}

// Get author avatar
function getAuthorAvatar(authorName) {
  // In a real application, you would fetch this from a database
  const avatars = {
    "Jane Doe": "https://randomuser.me/api/portraits/women/44.jpg",
    "John Smith": "https://randomuser.me/api/portraits/men/32.jpg",
    "Emily Chen": "https://randomuser.me/api/portraits/women/33.jpg",
    "Alex Johnson": "https://randomuser.me/api/portraits/men/22.jpg",
    "Sarah Lee": "https://randomuser.me/api/portraits/women/68.jpg",
  }

  return avatars[authorName] || "/placeholder.svg?height=24&width=24"
}

// Enhanced initialization
function enhancedInit() {
  // Setup hero slider
  setupHeroSlider()

  // Render categories
  renderCategories()

  // Render popular posts
  renderPopularPosts()

  // Render recent comments
  renderRecentComments()

  // Setup back to top button
  setupBackToTop()

  // Render footer categories
  renderFooterCategories()

  // Setup load more functionality
  setupLoadMore()

  // Setup newsletter banner form
  const newsletterBannerForm = document.getElementById("newsletter-banner-form")
  if (newsletterBannerForm) {
    newsletterBannerForm.addEventListener("submit", handleNewsletterFormSubmit)
  }

  // Render author info on single post page
  const postContent = document.getElementById("post-content")
  if (postContent) {
    const urlParams = new URLSearchParams(window.location.search)
    const postId = urlParams.get("id")

    if (postId) {
      const post = getPostById(Number.parseInt(postId))
      if (post) {
        renderAuthorInfo(post.author)
      }
    }
  }
}

// Mock functions to resolve undeclared variables
function getPostsByCategory(category) {
  // Replace with actual data fetching logic
  const allPosts = getAllPosts()
  if (!category) {
    return allPosts
  }
  return allPosts.filter((post) => post.category === category)
}

function calculateReadingTime(content) {
  // Replace with actual reading time calculation logic
  const wordsPerMinute = 200
  const numberOfWords = content.split(/\s/g).length
  const minutes = numberOfWords / wordsPerMinute
  return Math.ceil(minutes) + " min read"
}

function handleNewsletterFormSubmit(event) {
  event.preventDefault()
  alert("Newsletter form submitted (mock function)")
  // Replace with actual form submission logic
}

function getPostById(id) {
  // Replace with actual data fetching logic
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.id === id)
}

// Call enhanced initialization after the basic initialization
document.addEventListener("DOMContentLoaded", () => {
  // Wait for the basic initialization to complete
  setTimeout(enhancedInit, 100)
})

/**
 * Enhanced Script for Inkwell Blog
 * This script contains optimized functions for better performance and user experience
 */

// Mock functions for showToast, searchPosts, and toggleTheme
function showToast(message) {
  alert(message) // Replace with your actual toast implementation
}

function searchPosts(query) {
  // Replace with your actual search implementation
  const allPosts = getAllPosts()

  const results = allPosts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(query.toLowerCase())
    const contentMatch = post.content.toLowerCase().includes(query.toLowerCase())
    return titleMatch || contentMatch
  })
  return results
}

function toggleTheme() {
  // Replace with your actual theme toggle implementation
  const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light"
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  document.body.classList.toggle("dark-theme")
  localStorage.setItem("theme", newTheme)
}

// Performance optimization for image loading
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

// Enhanced search functionality
function enhanceSearch() {
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")
  const searchResults = document.getElementById("search-results")
  const searchResultsContainer = document.getElementById("search-results-container")
  const closeSearchResults = document.getElementById("close-search-results")

  if (!searchInput || !searchBtn || !searchResults || !searchResultsContainer || !closeSearchResults) return

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
    if (query.length < 2) {
      if (query.length > 0) {
        showToast("Please enter at least 2 characters to search")
      }
      return
    }

    // Show loading indicator
    searchResultsContainer.innerHTML = `
      <div class="search-loading">
        <div class="loading-spinner"></div>
        <p>Searching...</p>
      </div>
    `
    searchResults.classList.add("show")

    // Simulate network delay (remove in production)
    setTimeout(() => {
      const results = searchPosts(query)

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
    }, 300) // Simulate search delay
  }, 300) // Debounce delay

  // Search button click
  searchBtn.addEventListener("click", performSearch)

  // Search on Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

  // Live search as user types (optional)
  searchInput.addEventListener("input", performSearch)

  // Close search results
  closeSearchResults.addEventListener("click", () => {
    searchResults.classList.remove("show")
  })

  // Close search results when clicking outside
  window.addEventListener("click", (e) => {
    if (
      searchResults.classList.contains("show") &&
      !searchResults.contains(e.target) &&
      e.target !== searchBtn &&
      e.target !== searchInput
    ) {
      searchResults.classList.remove("show")
    }
  })

  // Close search results with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchResults.classList.contains("show")) {
      searchResults.classList.remove("show")
    }
  })
}

// Enhanced footer categories rendering
function enhanceFooterCategories() {
  const footerCategoriesList = document.getElementById("footer-categories-list")
  if (!footerCategoriesList) return

  const categories = getAllCategories()

  if (categories.length === 0) {
    footerCategoriesList.innerHTML = "<li>No categories yet.</li>"
    return
  }

  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name))

  // Show all categories in the footer
  footerCategoriesList.innerHTML = sortedCategories
    .map(
      (category) => `
      <li>
        <a href="index.html?category=${encodeURIComponent(category.name)}">
          ${category.name}
        </a>
      </li>
    `,
    )
    .join("")
}

// Update copyright year
function updateCopyrightYear() {
  const yearElement = document.getElementById("current-year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// Enhanced theme toggle with animation
function enhanceThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  if (!themeToggleBtn) return

  // Add animation class
  themeToggleBtn.classList.add("theme-toggle-animated")

  themeToggleBtn.addEventListener("click", () => {
    // Add animation class
    document.body.classList.add("theme-transition")

    // Toggle theme
    toggleTheme()

    // Remove animation class after transition completes
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 500)
  })
}

// Initialize enhanced features
document.addEventListener("DOMContentLoaded", () => {
  // Apply optimizations
  optimizeImageLoading()
  enhanceSearch()
  enhanceFooterCategories()
  updateCopyrightYear()
  enhanceThemeToggle()

  // Add page transition effects
  document.body.classList.add("page-loaded")
})

// Add event listener for page visibility changes to optimize performance
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Refresh data when page becomes visible again
    enhanceFooterCategories()
  }
})
