// Initialize blog data if it doesn't exist
if (!localStorage.getItem("blogPosts")) {
  // Sample blog posts
  const samplePosts = [
    {
      id: 1,
      title: "Getting Started with HTML, CSS, and JavaScript",
      author: "Jane Doe",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      authorBio: "Jane is a senior web developer with over 10 years of experience in frontend technologies.",
      date: "2025-05-01",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt:
        "Learn the fundamentals of web development with HTML, CSS, and JavaScript, the three core technologies of the World Wide Web.",
      content: `
                <p>HTML, CSS, and JavaScript are the three core technologies of the World Wide Web. HTML provides the structure, CSS handles the presentation, and JavaScript adds interactivity.</p>
                
                <h3>HTML: The Structure</h3>
                <p>HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.</p>
                
                <h3>CSS: The Presentation</h3>
                <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
                
                <div class="post-gallery">
                    <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="HTML Code" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CSS Code" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="JavaScript Code" class="gallery-image">
                </div>
                
                <h3>JavaScript: The Behavior</h3>
                <p>JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications, and the vast majority of websites use it for client-side page behavior.</p>
                
                <p>By mastering these three technologies, you can build impressive web applications without relying on complex frameworks or libraries.</p>
            `,
      featured: true,
      views: 1250,
      comments: [
        {
          id: 1,
          name: "John Smith",
          email: "john@example.com",
          date: "2025-05-02",
          content: "Great article! This helped me understand the basics of web development.",
          status: "approved",
        },
        {
          id: 2,
          name: "Sarah Johnson",
          email: "sarah@example.com",
          date: "2025-05-03",
          content:
            "I've been trying to learn web development for a while, and this article explains the fundamentals very clearly. Thanks!",
          status: "approved",
        },
      ],
    },
    {
      id: 2,
      title: "Building a Responsive Website",
      author: "John Smith",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      authorBio: "John is a UI/UX designer specializing in responsive web design and mobile interfaces.",
      date: "2025-05-02",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Learn how to create websites that look great on any device, from mobile phones to desktop computers.",
      content: `
                <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.</p>
                
                <h3>Mobile-First Approach</h3>
                <p>A mobile-first approach means designing for mobile before designing for desktop or any other device. This approach is based on the fact that it's easier to scale up than to scale down.</p>
                
                <div class="post-gallery">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Mobile Design" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Tablet Design" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Desktop Design" class="gallery-image">
                </div>
                
                <h3>Flexible Grids</h3>
                <p>Using flexible grids is a key component of responsive design. These grids use relative units like percentages rather than absolute units like pixels.</p>
                
                <h3>Media Queries</h3>
                <p>Media queries allow you to apply CSS styles depending on a device's general type or specific characteristics and parameters.</p>
                
                <h3>Flexible Images</h3>
                <p>Images need to be flexible too. Setting the max-width property to 100% ensures that images are never larger than their container.</p>
                
                <p>By implementing these principles, you can create websites that look great on any device, from mobile phones to desktop computers.</p>
            `,
      featured: true,
      views: 980,
      comments: [
        {
          id: 1,
          name: "Michael Brown",
          email: "michael@example.com",
          date: "2025-05-03",
          content: "This is exactly what I needed! I've been struggling with making my website look good on mobile.",
          status: "approved",
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript LocalStorage Explained",
      author: "Emily Chen",
      authorAvatar: "https://randomuser.me/api/portraits/women/26.jpg",
      authorBio: "Emily is a JavaScript developer focusing on frontend frameworks and browser APIs.",
      date: "2025-05-03",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Learn how to use localStorage to store data in the browser with no expiration date.",
      content: `
                <p>LocalStorage is a web storage API that allows JavaScript websites and apps to store and access data right in the browser with no expiration date.</p>
                
                <h3>How LocalStorage Works</h3>
                <p>The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.</p>
                
                <h3>Using LocalStorage</h3>
                <p>LocalStorage is easy to use. You can store data with the setItem() method:</p>
                <pre>localStorage.setItem('key', 'value');</pre>
                
                <p>And retrieve it with the getItem() method:</p>
                <pre>const value = localStorage.getItem('key');</pre>
                
                <h3>Limitations</h3>
                <p>LocalStorage has a storage limit of about 5MB, and can only store strings. To store objects or arrays, you need to convert them to strings using JSON.stringify() and parse them back using JSON.parse().</p>
                
                <p>In this blog website, we're using localStorage to store and retrieve blog posts, making it a simple yet effective way to manage content without a backend.</p>
            `,
      featured: false,
      views: 756,
      comments: [],
    },
    {
      id: 4,
      title: "CSS Grid Layout: A Complete Guide",
      author: "Alex Johnson",
      authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
      authorBio: "Alex is a CSS specialist and educator who loves creating beautiful layouts.",
      date: "2025-05-04",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Master CSS Grid Layout, a powerful two-dimensional layout system for the web.",
      content: `
                <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns, and has many features that make building complex layouts straightforward.</p>
                
                <h3>Basic Concepts</h3>
                <p>The Grid Layout consists of a parent element (Grid Container) and child elements (Grid Items). To create a grid container, you set the display property to grid or inline-grid.</p>
                
                <pre>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
    gap: 20px;
}
                </pre>
                
                <div class="post-gallery">
                    <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CSS Grid Example 1" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CSS Grid Example 2" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="CSS Grid Example 3" class="gallery-image">
                </div>
                
                <h3>Grid Lines</h3>
                <p>Grid lines are the horizontal and vertical lines that divide the grid and separate the columns and rows. You can refer to them by number when positioning grid items.</p>
                
                <h3>Grid Tracks</h3>
                <p>Grid tracks are the spaces between adjacent grid lines, essentially the columns and rows of the grid.</p>
                
                <h3>Grid Cells</h3>
                <p>A grid cell is the space between four adjacent grid lines, similar to a table cell.</p>
                
                <h3>Grid Areas</h3>
                <p>Grid areas are rectangular spaces surrounded by four grid lines. They can span multiple cells both by row and by column.</p>
                
                <p>CSS Grid Layout is now supported in all major browsers, making it a reliable choice for modern web layouts.</p>
            `,
      featured: false,
      views: 623,
      comments: [],
    },
    {
      id: 5,
      title: "Introduction to Web Accessibility",
      author: "Sarah Lee",
      authorAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
      authorBio:
        "Sarah is an accessibility advocate and frontend developer focused on creating inclusive web experiences.",
      date: "2025-05-05",
      category: "Accessibility",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Learn how to make your websites accessible to people with disabilities.",
      content: `
                <p>Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact with the Web.</p>
                
                <h3>Why Accessibility Matters</h3>
                <p>Web accessibility is essential for providing equal access and equal opportunity to people with diverse abilities. It's also good for business, as it can drive innovation, enhance your brand, and extend market reach.</p>
                
                <h3>WCAG Guidelines</h3>
                <p>The Web Content Accessibility Guidelines (WCAG) are developed through the W3C process in cooperation with individuals and organizations around the world. WCAG documents explain how to make web content more accessible to people with disabilities.</p>
                
                <h3>Key Principles</h3>
                <p>WCAG is organized around four principles, often referred to as POUR:</p>
                <ul>
                    <li><strong>Perceivable</strong>: Information and user interface components must be presentable to users in ways they can perceive.</li>
                    <li><strong>Operable</strong>: User interface components and navigation must be operable.</li>
                    <li><strong>Understandable</strong>: Information and the operation of user interface must be understandable.</li>
                    <li><strong>Robust</strong>: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
                </ul>
                
                <p>By following these principles and guidelines, you can make your web content accessible to a wider range of people with disabilities.</p>
            `,
      featured: false,
      views: 489,
      comments: [],
    },
    {
      id: 6,
      title: "Modern JavaScript Features You Should Know",
      author: "David Wilson",
      authorAvatar: "https://randomuser.me/api/portraits/men/46.jpg",
      authorBio:
        "David is a JavaScript expert and tech educator who loves sharing knowledge about modern web development.",
      date: "2025-05-06",
      category: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt: "Explore the essential modern JavaScript features that every developer should know and use.",
      content: `
                <p>JavaScript has evolved significantly over the years, with many new features that make coding more efficient and enjoyable. Let's explore some of the most important modern JavaScript features that every developer should know.</p>
                
                <h3>Arrow Functions</h3>
                <p>Arrow functions provide a concise syntax for writing function expressions:</p>
                <pre>
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
                </pre>
                
                <h3>Template Literals</h3>
                <p>Template literals allow for easier string interpolation and multiline strings:</p>
                <pre>
const name = 'World';
const greeting = \`Hello, \${name}!
This is a multiline string.\`;
                </pre>
                
                <h3>Destructuring Assignment</h3>
                <p>Destructuring makes it easier to extract data from arrays and objects:</p>
                <pre>
// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const { name, age } = { name: 'John', age: 30 };
                </pre>
                
                <h3>Spread and Rest Operators</h3>
                <p>The spread operator (...) allows an iterable to be expanded, while the rest parameter collects multiple elements:</p>
                <pre>
// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
                </pre>
                
                <h3>Async/Await</h3>
                <p>Async/await provides a cleaner way to work with promises:</p>
                <pre>
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
                </pre>
                
                <p>By mastering these modern JavaScript features, you'll write cleaner, more maintainable code and be more productive as a developer.</p>
            `,
      featured: true,
      views: 872,
      comments: [],
    },
    {
      id: 7,
      title: "The Power of CSS Custom Properties",
      author: "Lisa Wang",
      authorAvatar: "https://randomuser.me/api/portraits/women/79.jpg",
      authorBio:
        "Lisa is a CSS enthusiast and frontend developer who specializes in creating beautiful, maintainable stylesheets.",
      date: "2025-05-07",
      category: "CSS",
      image:
        "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt:
        "Learn how to use CSS custom properties (variables) to create more maintainable and dynamic stylesheets.",
      content: `
                <p>CSS custom properties, also known as CSS variables, allow you to store specific values to be reused throughout your stylesheet. They make your CSS more maintainable, dynamic, and powerful.</p>
                
                <h3>Defining Custom Properties</h3>
                <p>Custom properties are defined using a double-dash prefix and are typically set on the :root pseudo-class to make them globally available:</p>
                <pre>
:root {
    --primary-color: #6366f1;
    --secondary-color: #10b981;
    --text-color: #1f2937;
    --spacing-unit: 1rem;
}
                </pre>
                
                <h3>Using Custom Properties</h3>
                <p>You can use custom properties with the var() function:</p>
                <pre>
.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-unit);
}

.button:hover {
    background-color: var(--secondary-color);
}
                </pre>
                
                <h3>Fallback Values</h3>
                <p>The var() function accepts a second parameter as a fallback value if the custom property is not defined:</p>
                <pre>
.element {
    color: var(--text-color, #333);
}
                </pre>
                
                <h3>Changing Custom Properties with JavaScript</h3>
                <p>One of the most powerful features of custom properties is that they can be modified with JavaScript:</p>
                <pre>
// Get the root element
const root = document.documentElement;

// Change a custom property
root.style.setProperty('--primary-color', '#ff0000');
                </pre>
                
                <h3>Scoping Custom Properties</h3>
                <p>Custom properties can be scoped to specific elements, allowing for component-specific theming:</p>
                <pre>
.card {
    --card-bg: #ffffff;
    background-color: var(--card-bg);
}

.dark-theme .card {
    --card-bg: #1f2937;
}
                </pre>
                
                <p>By leveraging CSS custom properties, you can create more maintainable, dynamic, and flexible stylesheets that adapt to different contexts and user preferences.</p>
            `,
      featured: false,
      views: 567,
      comments: [],
    },
    {
      id: 8,
      title: "Web Performance Optimization Techniques",
      author: "Mark Thompson",
      authorAvatar: "https://randomuser.me/api/portraits/men/77.jpg",
      authorBio:
        "Mark is a performance optimization specialist who helps companies make their websites faster and more efficient.",
      date: "2025-05-08",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      excerpt:
        "Discover essential techniques to optimize your website's performance and provide a better user experience.",
      content: `
                <p>Website performance is crucial for user experience and SEO. Slow websites frustrate users and can lead to higher bounce rates and lower conversions. Let's explore some key techniques to optimize your website's performance.</p>

                <h3>Minimize HTTP Requests</h3>
                <p>Each file on your website requires an HTTP request. Reducing the number of requests can significantly improve load times:</p>
                <ul>
                    <li>Combine multiple CSS files into one</li>
                    <li>Combine multiple JavaScript files into one</li>
                    <li>Use CSS sprites for icons</li>
                    <li>Implement lazy loading for images and videos</li>
                </ul>

                <h3>Optimize Images</h3>
                <p>Images often account for most of the downloaded bytes on a webpage:</p>
                <ul>
                    <li>Compress images without sacrificing quality</li>
                    <li>Choose the right format (JPEG for photographs, PNG for graphics with transparency, WebP for modern browsers)</li>
                    <li>Resize images to the appropriate dimensions</li>
                    <li>Use responsive images with srcset</li>
                </ul>

                <h3>Leverage Browser Caching</h3>
                <p>Browser caching stores webpage resources locally, reducing load times for returning visitors:</p>
                <pre>
// Example .htaccess configuration for Apache
&lt;IfModule mod_expires.c&gt;
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
&lt;/IfModule&gt;
                </pre>

                <h3>Minify CSS, JavaScript, and HTML</h3>
                <p>Minification removes unnecessary characters from code without changing functionality:</p>
                <ul>
                    <li>Remove comments and whitespace</li>
                    <li>Use shorter variable and function names</li>
                    <li>Use tools like UglifyJS, CSSNano, or HTMLMinifier</li>
                </ul>

                <h3>Use Content Delivery Networks (CDNs)</h3>
                <p>CDNs distribute your content across multiple, geographically diverse servers:</p>
                <ul>
                    <li>Reduces server load</li>
                    <li>Decreases latency for users around the world</li>
                    <li>Provides redundancy in case of server failures</li>
                </ul>

                <p>By implementing these optimization techniques, you can significantly improve your website's performance, providing a better user experience and potentially boosting your search engine rankings.</p>
            `,
      featured: false,
      views: 712,
      comments: [],
    },
  ]

  localStorage.setItem("blogPosts", JSON.stringify(samplePosts))
  localStorage.setItem("nextPostId", "9")
}

// Initialize categories if they don't exist
if (!localStorage.getItem("categories")) {
  const sampleCategories = [
    {
      name: "Web Development",
      description: "Articles about web development technologies and practices.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Web Design",
      description: "Articles about web design principles and techniques.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "JavaScript",
      description: "Articles about JavaScript programming language and frameworks.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "CSS",
      description: "Articles about CSS styling and layout techniques.",
      image:
        "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Accessibility",
      description: "Articles about making websites accessible to all users.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ]

  localStorage.setItem("categories", JSON.stringify(sampleCategories))
}

// Initialize blog settings if they don't exist
if (!localStorage.getItem("blogSettings")) {
  const defaultSettings = {
    title: "Inkwell",
    description: "A modern blog for modern ideas.",
    postsPerPage: 6,
    commentsEnabled: true,
    moderateComments: false,
    theme: {
      primaryColor: "#6366f1",
      secondaryColor: "#10b981",
      accentColor: "#f59e0b",
      darkModeDefault: false,
    },
  }

  localStorage.setItem("blogSettings", JSON.stringify(defaultSettings))
}

// Initialize theme preference
if (!localStorage.getItem("theme")) {
  const settings = JSON.parse(localStorage.getItem("blogSettings"))
  const prefersDarkMode =
    settings.theme.darkModeDefault || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
  localStorage.setItem("theme", prefersDarkMode ? "dark" : "light")
}

// Apply theme
function applyTheme() {
  const theme = localStorage.getItem("theme") || "light"
  if (theme === "dark") {
    document.body.classList.add("dark-theme")
  } else {
    document.body.classList.remove("dark-theme")
  }
}

// Toggle theme
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light"
  const newTheme = currentTheme === "light" ? "dark" : "light"
  localStorage.setItem("theme", newTheme)
  applyTheme()
}

// Get all blog posts
function getAllPosts() {
  return JSON.parse(localStorage.getItem("blogPosts")) || []
}

// Get all categories
function getAllCategories() {
  return JSON.parse(localStorage.getItem("categories")) || []
}

// Get blog settings
function getBlogSettings() {
  return (
    JSON.parse(localStorage.getItem("blogSettings")) || {
      postsPerPage: 6,
      commentsEnabled: true,
    }
  )
}

// Get a single post by ID
function getPostById(id) {
  const posts = getAllPosts()
  return posts.find((post) => post.id === Number.parseInt(id))
}

// Get posts by category
function getPostsByCategory(category) {
  const posts = getAllPosts()
  return category ? posts.filter((post) => post.category === category) : posts
}

// Get featured posts
function getFeaturedPosts() {
  const posts = getAllPosts()
  return posts.filter((post) => post.featured)
}

// Get popular posts
function getPopularPosts(limit = 4) {
  const posts = getAllPosts()
  return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, limit)
}

// Search posts
function searchPosts(query) {
  const posts = getAllPosts()
  query = query.toLowerCase()
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query),
  )
}

// Get related posts
function getRelatedPosts(postId, category, limit = 3) {
  const posts = getAllPosts()
  const relatedPosts = posts.filter((post) => post.id !== Number.parseInt(postId) && post.category === category)

  // If not enough posts in the same category, add some other posts
  if (relatedPosts.length < limit) {
    const otherPosts = posts.filter((post) => post.id !== Number.parseInt(postId) && post.category !== category)
    return [...relatedPosts, ...otherPosts].slice(0, limit)
  }

  return relatedPosts.slice(0, limit)
}

// Create a new post
function createPost(post) {
  const posts = getAllPosts()
  const nextId = Number.parseInt(localStorage.getItem("nextPostId") || "1")

  const newPost = {
    id: nextId,
    date: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
    comments: [],
    featured: post.featured || false,
    views: 0,
    ...post,
  }

  posts.push(newPost)
  localStorage.setItem("blogPosts", JSON.stringify(posts))
  localStorage.setItem("nextPostId", (nextId + 1).toString())

  return newPost
}

// Update a post
function updatePost(id, updatedPost) {
  const posts = getAllPosts()
  const index = posts.findIndex((post) => post.id === Number.parseInt(id))

  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost }
    localStorage.setItem("blogPosts", JSON.stringify(posts))
    return posts[index]
  }

  return null
}

// Delete a post
function deletePost(id) {
  const posts = getAllPosts()
  const updatedPosts = posts.filter((post) => post.id !== Number.parseInt(id))
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
}

// Add a category
function addCategory(category) {
  const categories = getAllCategories()

  // Check if category with same name already exists
  if (!categories.find((cat) => cat.name === category.name)) {
    categories.push(category)
    localStorage.setItem("categories", JSON.stringify(categories))
    return true
  }

  return false
}

// Update a category
function updateCategory(oldName, updatedCategory) {
  const categories = getAllCategories()
  const index = categories.findIndex((cat) => cat.name === oldName)

  if (index !== -1) {
    categories[index] = updatedCategory
    localStorage.setItem("categories", JSON.stringify(categories))

    // Update posts with this category
    const posts = getAllPosts()
    const updatedPosts = posts.map((post) => {
      if (post.category === oldName) {
        return { ...post, category: updatedCategory.name }
      }
      return post
    })

    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
    return true
  }

  return false
}

// Delete a category
function deleteCategory(categoryName) {
  const categories = getAllCategories()
  const updatedCategories = categories.filter((cat) => cat.name !== categoryName)
  localStorage.setItem("categories", JSON.stringify(updatedCategories))

  // Update posts with this category
  const posts = getAllPosts()
  const updatedPosts = posts.map((post) => {
    if (post.category === categoryName) {
      return { ...post, category: "Uncategorized" }
    }
    return post
  })

  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
}

// Add a comment to a post
function addComment(postId, comment) {
  const posts = getAllPosts()
  const index = posts.findIndex((post) => post.id === Number.parseInt(postId))

  if (index !== -1) {
    const commentId = posts[index].comments.length > 0 ? Math.max(...posts[index].comments.map((c) => c.id)) + 1 : 1

    const settings = getBlogSettings()
    const status = settings.moderateComments ? "pending" : "approved"

    const newComment = {
      id: commentId,
      date: new Date().toISOString().split("T")[0],
      status: status,
      ...comment,
    }

    posts[index].comments.push(newComment)
    localStorage.setItem("blogPosts", JSON.stringify(posts))
    return newComment
  }

  return null
}

// Update comment status
function updateCommentStatus(postId, commentId, status) {
  const posts = getAllPosts()
  const postIndex = posts.findIndex((post) => post.id === Number.parseInt(postId))

  if (postIndex !== -1) {
    const commentIndex = posts[postIndex].comments.findIndex((comment) => comment.id === Number.parseInt(commentId))

    if (commentIndex !== -1) {
      posts[postIndex].comments[commentIndex].status = status
      localStorage.setItem("blogPosts", JSON.stringify(posts))
      return true
    }
  }

  return false
}

// Delete a comment
function deleteComment(postId, commentId) {
  const posts = getAllPosts()
  const postIndex = posts.findIndex((post) => post.id === Number.parseInt(postId))

  if (postIndex !== -1) {
    const updatedComments = posts[postIndex].comments.filter((comment) => comment.id !== Number.parseInt(commentId))

    posts[postIndex].comments = updatedComments
    localStorage.setItem("blogPosts", JSON.stringify(posts))
    return true
  }

  return false
}

// Get all comments across all posts
function getAllComments(status = null) {
  const posts = getAllPosts()
  const allComments = []

  posts.forEach((post) => {
    if (post.comments && post.comments.length > 0) {
      post.comments.forEach((comment) => {
        if (status === null || comment.status === status) {
          allComments.push({
            postId: post.id,
            postTitle: post.title,
            ...comment,
          })
        }
      })
    }
  })

  // Sort by date (newest first)
  return allComments.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Get recent comments
function getRecentComments(limit = 3) {
  const comments = getAllComments("approved")
  return comments.slice(0, limit)
}

// Update blog settings
function updateBlogSettings(settings) {
  localStorage.setItem("blogSettings", JSON.stringify(settings))
}

// Increment post views
function incrementPostViews(postId) {
  const posts = getAllPosts()
  const index = posts.findIndex((post) => post.id === Number.parseInt(postId))

  if (index !== -1) {
    posts[index].views = (posts[index].views || 0) + 1
    localStorage.setItem("blogPosts", JSON.stringify(posts))
    return posts[index].views
  }

  return 0
}

// Get analytics data
function getAnalyticsData() {
  const posts = getAllPosts()
  const categories = getAllCategories()

  // Total posts
  const totalPosts = posts.length

  // Total views
  const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0)

  // Total comments
  const totalComments = posts.reduce((sum, post) => sum + (post.comments?.length || 0), 0)

  // Posts per category
  const postsPerCategory = {}
  categories.forEach((category) => {
    postsPerCategory[category.name] = posts.filter((post) => post.category === category.name).length
  })

  // Popular posts
  const popularPosts = getPopularPosts(5)

  return {
    totalPosts,
    totalViews,
    totalComments,
    totalCategories: categories.length,
    postsPerCategory,
    popularPosts,
  }
}

// Format date to a more readable format
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Calculate reading time
function calculateReadingTime(content) {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, "")

  // Average reading speed: 200 words per minute
  const words = textContent.split(/\s+/).length
  const minutes = Math.ceil(words / 200)

  return minutes === 1 ? "1 min read" : `${minutes} mins read`
}

// Create excerpt from content
function createExcerpt(content, maxLength = 150) {
  if (!content) return ""

  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, "")

  if (textContent.length <= maxLength) return textContent

  // Find the last space before maxLength
  const lastSpace = textContent.substring(0, maxLength).lastIndexOf(" ")
  return textContent.substring(0, lastSpace) + "..."
}

// Show toast notification
function showToast(message, duration = 3000) {
  const toast = document.getElementById("toast")
  const toastMessage = document.getElementById("toast-message")

  if (toast && toastMessage) {
    toastMessage.textContent = message
    toast.classList.add("show")

    setTimeout(() => {
      toast.classList.remove("show")
    }, duration)
  }
}

// Lazy load images
function lazyLoadImages() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          const src = img.getAttribute("data-src")

          if (src) {
            img.src = src
            img.removeAttribute("data-src")
          }

          observer.unobserve(img)
        }
      })
    })

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

// Render categories dropdown
function renderCategoriesDropdown() {
  const categoriesDropdown = document.getElementById("categories-dropdown")
  if (!categoriesDropdown) return

  const categories = getAllCategories()

  categoriesDropdown.innerHTML = categories
    .map(
      (category) => `
    <li><a href="index.html?category=${encodeURIComponent(category.name)}">${category.name}</a></li>
  `,
    )
    .join("")
}

// Render category filter
function renderCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter")
  if (!categoryFilter) return

  const categories = getAllCategories()
  const urlParams = new URLSearchParams(window.location.search)
  const selectedCategory = urlParams.get("category") || ""

  // Create a container for the filter
  const filterContainer = document.createElement("div")
  filterContainer.className = "category-filter-container"

  // Create the select element
  const select = document.createElement("select")
  select.id = "category-select"
  select.innerHTML = `
    <option value="">All Categories</option>
    ${categories
      .map(
        (category) => `
      <option value="${category.name}" ${category.name === selectedCategory ? "selected" : ""}>${category.name}</option>
    `,
      )
      .join("")}
  `

  // Add event listener
  select.addEventListener("change", function () {
    if (this.value) {
      window.location.href = `index.html?category=${encodeURIComponent(this.value)}`
    } else {
      window.location.href = "index.html"
    }
  })

  // Create category pills for larger screens
  const categoryPills = document.createElement("div")
  categoryPills.className = "category-pills"
  categoryPills.innerHTML = `
    <a href="index.html" class="category-pill ${!selectedCategory ? "active" : ""}">All</a>
    ${categories
      .map(
        (category) => `
      <a href="index.html?category=${encodeURIComponent(category.name)}" 
         class="category-pill ${category.name === selectedCategory ? "active" : ""}">${category.name}</a>
    `,
      )
      .join("")}
  `

  // Append elements to the filter container
  filterContainer.appendChild(select)
  filterContainer.appendChild(categoryPills)

  // Replace the category filter content
  categoryFilter.innerHTML = ""
  categoryFilter.appendChild(filterContainer)
}

// Setup hero slider
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

  // Create slides from featured posts with preloaded images
  heroSlider.innerHTML = ""

  // First, create and append all slides
  featuredPosts.forEach((post, index) => {
    const slide = document.createElement("div")
    slide.className = `hero-slide ${index === 0 ? "active" : ""}`
    slide.innerHTML = `
      <div class="hero-slide-content">
        <h2>${post.title}</h2>
        <p>${post.excerpt || createExcerpt(post.content, 120)}</p>
        <a href="post.html?id=${post.id}" class="btn btn-primary">Read Article</a>
      </div>
    `
    heroSlider.appendChild(slide)

    // Preload image and set as background when loaded
    const img = new Image()
    img.onload = () => {
      slide.style.backgroundImage = `url('${post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}')`
      slide.classList.add("image-loaded")
    }
    img.onerror = () => {
      // Use fallback image if the post image fails to load
      slide.style.backgroundImage = `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`
      slide.classList.add("image-loaded")
    }
    img.src =
      post.image ||
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  })

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

// Render featured posts on the homepage
function renderFeaturedPosts() {
  const featuredPostsContainer = document.getElementById("featured-posts-container")
  if (!featuredPostsContainer) return

  const featuredPosts = getFeaturedPosts()

  if (featuredPosts.length === 0) {
    featuredPostsContainer.innerHTML = "<p>No featured posts yet.</p>"
    return
  }

  featuredPostsContainer.innerHTML = featuredPosts
    .map(
      (post) => `
    <div class="featured-post-card">
      <img src="${post.image || "/placeholder.svg?height=200&width=400"}" alt="${post.title}" class="featured-post-image" loading="lazy">
      <div class="featured-post-content">
        <h3 class="featured-post-title">
          <a href="post.html?id=${post.id}">${post.title}</a>
        </h3>
        <div class="featured-post-meta">
          <span class="author">
            <img src="${post.authorAvatar || "/placeholder.svg?height=24&width=24"}" alt="${post.author}" class="author-avatar">
            ${post.author}
          </span>
          <span class="category">${post.category}</span>
          <span class="date">${formatDate(post.date)}</span>
        </div>
        <div class="featured-post-excerpt">
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
}

// Render categories with images
function renderCategories() {
  const categoriesContainer = document.getElementById("categories-container")
  if (!categoriesContainer) return

  const categories = getAllCategories()
  const posts = getAllPosts()

  if (categories.length === 0) {
    categoriesContainer.innerHTML = "<p>No categories yet.</p>"
    return
  }

  categoriesContainer.innerHTML = categories
    .map((category) => {
      const categoryPosts = posts.filter((post) => post.category === category.name)
      return `
      <a href="index.html?category=${encodeURIComponent(category.name)}" class="category-card">
        <img src="${category.image || "/placeholder.svg?height=150&width=200"}" alt="${category.name}" loading="lazy">
        <div class="category-overlay">
          <div>
            <h3>${category.name}</h3>
            <p>${categoryPosts.length} ${categoryPosts.length === 1 ? "article" : "articles"}</p>
          </div>
        </div>
      </a>
    `
    })
    .join("")
}

// Render posts on the homepage with pagination
function renderHomePosts() {
  const postsContainer = document.getElementById("posts-container")
  if (!postsContainer) return

  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category")
  const page = Number.parseInt(urlParams.get("page") || "1")

  const settings = getBlogSettings()
  const postsPerPage = settings.postsPerPage

  // Show loading state
  postsContainer.innerHTML = `
    <div class="loading-indicator">
      <div class="loading-spinner"></div>
      <p>Loading posts...</p>
    </div>
  `

  // Use setTimeout with 0ms to allow the loading indicator to render
  setTimeout(() => {
    const posts = getPostsByCategory(category)

    if (posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts found. Go to the Admin page to create your first post!</p>"
      return
    }

    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

    // Calculate pagination
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex)

    postsContainer.innerHTML = paginatedPosts
      .map(
        (post) => `
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

    // Setup load more button
    const loadMoreBtn = document.getElementById("load-more-btn")
    if (loadMoreBtn) {
      if (endIndex >= sortedPosts.length) {
        loadMoreBtn.style.display = "none"
      } else {
        loadMoreBtn.style.display = "inline-block"
        loadMoreBtn.addEventListener("click", () => {
          const nextPage = page + 1
          const nextPageUrl = new URL(window.location)
          nextPageUrl.searchParams.set("page", nextPage.toString())
          window.location.href = nextPageUrl.toString()
        })
      }
    }
  }, 0)
}

// Render popular posts
function renderPopularPosts() {
  const popularPostsContainer = document.getElementById("popular-posts-container")
  if (!popularPostsContainer) return

  const popularPosts = getPopularPosts()

  if (popularPosts.length === 0) {
    popularPostsContainer.innerHTML = "<p>No posts yet.</p>"
    return
  }

  popularPostsContainer.innerHTML = popularPosts
    .map(
      (post) => `
    <div class="popular-post-card">
      <img src="${post.image || "/placeholder.svg?height=100&width=100"}" alt="${post.title}" class="popular-post-image" loading="lazy">
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

  const recentComments = getRecentComments()

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

// Render footer categories
function renderFooterCategories() {
  const footerCategoriesList = document.getElementById("footer-categories-list")
  if (!footerCategoriesList) return

  const categories = getAllCategories()

  if (categories.length === 0) {
    footerCategoriesList.innerHTML = "<li>No categories yet.</li>"
    return
  }

  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name))

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

// Render a single post
function renderSinglePost() {
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  const urlParams = new URLSearchParams(window.location.search)
  const postId = urlParams.get("id")

  if (!postId) {
    postContent.innerHTML = '<p>Post not found. <a href="index.html">Go back to homepage</a></p>'
    return
  }

  const post = getPostById(Number.parseInt(postId))

  if (!post) {
    postContent.innerHTML = '<p>Post not found. <a href="index.html">Go back to homepage</a></p>'
    return
  }

  // Increment view count
  incrementPostViews(postId)

  // Update page title and meta tags
  document.title = `${post.title} | Inkwell`
  const metaDescription = document.querySelector('meta[property="og:description"]')
  const metaTitle = document.querySelector('meta[property="og:title"]')

  if (metaDescription) {
    metaDescription.setAttribute("content", post.excerpt || createExcerpt(post.content))
  }

  if (metaTitle) {
    metaTitle.setAttribute("content", post.title)
  }

  postContent.innerHTML = `
    <div class="post-header">
      <h1>${post.title}</h1>
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
        <span class="reading-time">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          ${calculateReadingTime(post.content)}
        </span>
      </div>
    </div>
    ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-featured-image" loading="lazy">` : ""}
    <div class="post-body">
      ${post.content}
    </div>
  `

  // Update post metrics
  const postViews = document.getElementById("post-views")
  const postCommentsCount = document.getElementById("post-comments-count")

  if (postViews) {
    postViews.textContent = post.views || 0
  }

  if (postCommentsCount) {
    postCommentsCount.textContent = post.comments?.length || 0
  }

  // Render author info
  renderAuthorInfo(post)

  // Render related posts
  renderRelatedPosts(post.id, post.category)

  // Render comments
  renderComments(post.id)

  // Setup share buttons
  setupShareButtons(post)
}

// Render author information
function renderAuthorInfo(post) {
  const authorInfo = document.getElementById("author-info")
  if (!authorInfo) return

  authorInfo.innerHTML = `
    <img src="${post.authorAvatar || "/placeholder.svg?height=80&width=80"}" alt="${post.author}" class="author-avatar-large">
    <div class="author-bio">
      <h4>${post.author}</h4>
      <p>${post.authorBio || "Author information not available."}</p>
      <div class="author-social">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  `
}

// Render related posts
function renderRelatedPosts(postId, category) {
  const relatedPostsContainer = document.getElementById("related-posts-container")
  if (!relatedPostsContainer) return

  const relatedPosts = getRelatedPosts(postId, category)

  if (relatedPosts.length === 0) {
    relatedPostsContainer.innerHTML = "<p>No related posts found.</p>"
    return
  }

  relatedPostsContainer.innerHTML = relatedPosts
    .map(
      (post) => `
    <div class="related-post-card">
      <img src="${post.image || "/placeholder.svg?height=150&width=250"}" alt="${post.title}" class="related-post-image" loading="lazy">
      <div class="related-post-content">
        <h4 class="related-post-title">
          <a href="post.html?id=${post.id}">${post.title}</a>
        </h4>
        <div class="related-post-meta">
          <span class="category">${post.category}</span> • 
          <span class="date">${formatDate(post.date)}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Render comments
function renderComments(postId) {
  const commentsContainer = document.getElementById("comments-container")
  if (!commentsContainer) return

  const post = getPostById(Number.parseInt(postId))
  if (!post) return

  const settings = getBlogSettings()
  if (!settings.commentsEnabled) {
    commentsContainer.innerHTML = "<p>Comments are disabled for this blog.</p>"
    return
  }

  const approvedComments = post.comments.filter((comment) => comment.status === "approved")

  if (approvedComments.length === 0) {
    commentsContainer.innerHTML = "<p>No comments yet. Be the first to comment!</p>"
    return
  }

  commentsContainer.innerHTML = approvedComments
    .map(
      (comment) => `
    <div class="comment">
      <div class="comment-header">
        <span class="comment-author">${comment.name}</span>
        <span class="comment-date">${formatDate(comment.date)}</span>
      </div>
      <div class="comment-content">
        <p>${comment.content}</p>
      </div>
    </div>
  `,
    )
    .join("")

  // Setup comment form
  setupCommentForm(postId)
}

// Setup comment form
function setupCommentForm(postId) {
  const commentForm = document.getElementById("comment-form")
  if (!commentForm) return

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("comment-name").value
    const email = document.getElementById("comment-email").value
    const content = document.getElementById("comment-content").value

    if (!name || !email || !content) {
      showToast("Please fill in all fields")
      return
    }

    const newComment = addComment(postId, {
      name,
      email,
      content,
    })

    if (newComment) {
      const settings = getBlogSettings()
      if (settings.moderateComments) {
        showToast("Your comment has been submitted and is awaiting moderation.")
      } else {
        showToast("Your comment has been posted.")
        renderComments(postId) // Refresh comments
      }

      // Clear form
      document.getElementById("comment-name").value = ""
      document.getElementById("comment-email").value = ""
      document.getElementById("comment-content").value = ""
    } else {
      showToast("Error posting comment. Please try again.")
    }
  })
}

// Setup share buttons
function setupShareButtons(post) {
  const shareTwitter = document.getElementById("share-twitter")
  const shareFacebook = document.getElementById("share-facebook")
  const shareLinkedin = document.getElementById("share-linkedin")
  const copyLink = document.getElementById("copy-link")

  if (shareTwitter) {
    shareTwitter.addEventListener("click", () => {
      const text = `Check out this article: ${post.title}`
      const url = window.location.href
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank",
      )
    })
  }

  if (shareFacebook) {
    shareFacebook.addEventListener("click", () => {
      const url = window.location.href
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
    })
  }

  if (shareLinkedin) {
    shareLinkedin.addEventListener("click", () => {
      const url = window.location.href
      const title = post.title
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(
          title,
        )}`,
        "_blank",
      )
    })
  }

  if (copyLink) {
    copyLink.addEventListener("click", () => {
      const url = window.location.href
      navigator.clipboard.writeText(url).then(
        () => {
          showToast("Link copied to clipboard!")
        },
        () => {
          showToast("Failed to copy link. Please try again.")
        },
      )
    })
  }
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

// Setup search functionality
function setupSearch() {
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")
  const searchResults = document.getElementById("search-results")
  const searchResultsContainer = document.getElementById("search-results-container")
  const closeSearchResults = document.getElementById("close-search-results")

  if (!searchInput || !searchBtn || !searchResults || !searchResultsContainer || !closeSearchResults) return

  // Search function
  const performSearch = () => {
    const query = searchInput.value.trim()
    if (query.length < 2) {
      showToast("Please enter at least 2 characters to search")
      return
    }

    const results = searchPosts(query)
    if (results.length === 0) {
      searchResultsContainer.innerHTML = `<p>No results found for "${query}"</p>`
    } else {
      searchResultsContainer.innerHTML = `
        <p>${results.length} result${results.length === 1 ? "" : "s"} found for "${query}"</p>
        <div class="search-results-list">
          ${results
            .map(
              (post) => `
            <div class="search-result-item">
              <h4><a href="post.html?id=${post.id}">${post.title}</a></h4>
              <div class="search-result-meta">
                <span class="category">${post.category}</span> • 
                <span class="date">${formatDate(post.date)}</span>
              </div>
              <p>${post.excerpt || createExcerpt(post.content, 150)}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      `
    }

    searchResults.classList.add("show")
  }

  // Search button click
  searchBtn.addEventListener("click", performSearch)

  // Search on Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

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
}

// Setup mobile menu
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navMenu = document.querySelector(".nav-menu")

  if (!mobileMenuBtn || !navMenu) return

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })
}

// Setup theme toggle
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  if (!themeToggleBtn) return

  themeToggleBtn.addEventListener("click", () => {
    toggleTheme()
  })
}

// Setup newsletter form
function setupNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("input[type='email']").value

      if (!email) {
        showToast("Please enter your email address")
        return
      }

      // In a real application, you would send this to a server
      // For now, we'll just show a success message
      showToast("Thank you for subscribing to our newsletter!")
      this.querySelector("input[type='email']").value = ""
    })
  }

  // Banner newsletter form
  const bannerForm = document.getElementById("newsletter-banner-form")
  if (bannerForm) {
    bannerForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("input[type='email']").value

      if (!email) {
        showToast("Please enter your email address")
        return
      }

      showToast("Thank you for subscribing to our newsletter!")
      this.querySelector("input[type='email']").value = ""
    })
  }
}

// Setup admin dashboard
function setupAdminDashboard() {
  // Only run on admin page
  if (!document.querySelector(".admin-dashboard")) return

  // Setup admin menu
  setupAdminMenu()

  // Setup post form
  setupPostForm()

  // Setup category form
  setupCategoryForm()

  // Render admin posts list
  renderAdminPosts()

  // Render admin categories list
  renderAdminCategories()

  // Render admin comments list
  renderAdminComments()

  // Setup analytics
  setupAnalytics()

  // Setup settings form
  setupSettingsForm()

  // Setup theme settings form
  setupThemeSettingsForm()

  // Setup confirmation modal
  setupConfirmationModal()
}

// Setup admin menu
function setupAdminMenu() {
  const adminMenuLinks = document.querySelectorAll(".admin-menu a")
  const adminSections = document.querySelectorAll(".admin-section")

  adminMenuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links
      adminMenuLinks.forEach((link) => link.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Hide all sections
      adminSections.forEach((section) => section.classList.remove("active"))

      // Show the corresponding section
      const targetId = this.getAttribute("href").substring(1)
      document.getElementById(targetId).classList.add("active")
    })
  })
}

// Setup post form
function setupPostForm() {
  const postForm = document.getElementById("post-form")
  const postCancelBtn = document.getElementById("post-cancel-btn")
  if (!postForm || !postCancelBtn) return

  // Populate category select
  const postCategorySelect = document.getElementById("post-category")
  if (postCategorySelect) {
    const categories = getAllCategories()
    postCategorySelect.innerHTML = categories
      .map(
        (category) => `
      <option value="${category.name}">${category.name}</option>
    `,
      )
      .join("")
  }

  // Handle form submission
  postForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const postId = document.getElementById("post-id").value
    const title = document.getElementById("post-title").value
    const author = document.getElementById("post-author").value
    const category = document.getElementById("post-category").value
    const image = document.getElementById("post-image").value
    const excerpt = document.getElementById("post-excerpt").value
    const content = document.getElementById("post-content").value
    const featured = document.getElementById("post-featured").checked

    if (!title || !author || !category || !content) {
      showToast("Please fill in all required fields")
      return
    }

    const postData = {
      title,
      author,
      category,
      image,
      excerpt,
      content,
      featured,
    }

    let result
    if (postId) {
      // Update existing post
      result = updatePost(postId, postData)
      if (result) {
        showToast("Post updated successfully")
      }
    } else {
      // Create new post
      result = createPost(postData)
      if (result) {
        showToast("Post created successfully")
      }
    }

    if (result) {
      // Reset form
      resetPostForm()

      // Refresh posts list
      renderAdminPosts()
    } else {
      showToast("Error saving post. Please try again.")
    }
  })

  // Cancel button
  postCancelBtn.addEventListener("click", resetPostForm)

  // Setup editor toolbar
  setupEditorToolbar()
}

// Reset post form
function resetPostForm() {
  document.getElementById("post-form-title").textContent = "Create New Post"
  document.getElementById("post-id").value = ""
  document.getElementById("post-title").value = ""
  document.getElementById("post-author").value = ""
  document.getElementById("post-image").value = ""
  document.getElementById("post-excerpt").value = ""
  document.getElementById("post-content").value = ""
  document.getElementById("post-featured").checked = false
  document.getElementById("post-submit-btn").textContent = "Publish Post"
  document.getElementById("post-cancel-btn").style.display = "none"
}

// Setup editor toolbar
function setupEditorToolbar() {
  const editorButtons = document.querySelectorAll(".editor-toolbar button")
  const contentTextarea = document.getElementById("post-content")
  if (!editorButtons.length || !contentTextarea) return

  editorButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const format = this.getAttribute("data-format")
      const textarea = contentTextarea
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = textarea.value.substring(start, end)
      let replacement = ""

      switch (format) {
        case "bold":
          replacement = `<strong>${selectedText}</strong>`
          break
        case "italic":
          replacement = `<em>${selectedText}</em>`
          break
        case "heading":
          replacement = `<h3>${selectedText}</h3>`
          break
        case "link":
          const url = prompt("Enter URL:", "https://")
          if (url) {
            replacement = `<a href="${url}">${selectedText || url}</a>`
          } else {
            return
          }
          break
        case "list":
          if (selectedText) {
            const items = selectedText.split("\n")
            replacement = "<ul>\n" + items.map((item) => `  <li>${item}</li>`).join("\n") + "\n</ul>"
          } else {
            replacement = "<ul>\n  <li>List item</li>\n</ul>"
          }
          break
      }

      // Insert the formatted text
      textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end)

      // Set focus back to the textarea
      textarea.focus()
      textarea.selectionStart = start + replacement.length
      textarea.selectionEnd = start + replacement.length
    })
  })
}

// Setup category form
function setupCategoryForm() {
  const categoryForm = document.getElementById("category-form")
  const categoryCancelBtn = document.getElementById("category-cancel-btn")
  if (!categoryForm || !categoryCancelBtn) return

  // Handle form submission
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const categoryId = document.getElementById("category-id").value
    const name = document.getElementById("category-name").value
    const description = document.getElementById("category-description").value
    const image = document.getElementById("category-image").value

    if (!name) {
      showToast("Please enter a category name")
      return
    }

    const categoryData = {
      name,
      description,
      image,
    }

    let result
    if (categoryId) {
      // Update existing category
      result = updateCategory(categoryId, categoryData)
      if (result) {
        showToast("Category updated successfully")
      }
    } else {
      // Create new category
      result = addCategory(categoryData)
      if (result) {
        showToast("Category created successfully")
      } else {
        showToast("A category with this name already exists")
        return
      }
    }

    if (result) {
      // Reset form
      resetCategoryForm()

      // Refresh categories list
      renderAdminCategories()

      // Refresh category select in post form
      const postCategorySelect = document.getElementById("post-category")
      if (postCategorySelect) {
        const categories = getAllCategories()
        postCategorySelect.innerHTML = categories
          .map(
            (category) => `
          <option value="${category.name}">${category.name}</option>
        `,
          )
          .join("")
      }
    } else {
      showToast("Error saving category. Please try again.")
    }
  })

  // Cancel button
  categoryCancelBtn.addEventListener("click", resetCategoryForm)
}

// Reset category form
function resetCategoryForm() {
  document.getElementById("category-id").value = ""
  document.getElementById("category-name").value = ""
  document.getElementById("category-description").value = ""
  document.getElementById("category-image").value = ""
  document.getElementById("category-submit-btn").textContent = "Add Category"
  document.getElementById("category-cancel-btn").style.display = "none"
}

// Render admin posts list
function renderAdminPosts() {
  const adminPostsList = document.getElementById("admin-posts-list")
  if (!adminPostsList) return

  const posts = getAllPosts()

  if (posts.length === 0) {
    adminPostsList.innerHTML = '<tr><td colspan="6">No posts yet. Create your first post!</td></tr>'
    return
  }

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  adminPostsList.innerHTML = sortedPosts
    .map(
      (post) => `
    <tr>
      <td>${post.title}</td>
      <td>${post.category}</td>
      <td>${formatDate(post.date)}</td>
      <td>${post.featured ? "Yes" : "No"}</td>
      <td>${post.views || 0}</td>
      <td>
        <div class="admin-actions">
          <a href="post.html?id=${post.id}" class="view-btn" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            View
          </a>
          <button class="edit-btn" data-id="${post.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            Edit
          </button>
          <button class="delete-btn" data-id="${post.id}" data-type="post">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete
          </button>
        </div>
      </td>
    </tr>
  `,
    )
    .join("")

  // Add event listeners to edit buttons
  adminPostsList.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.getAttribute("data-id")
      editPost(postId)
    })
  })

  // Add event listeners to delete buttons
  setupDeleteButtons()
}

// Edit post
function editPost(postId) {
  const post = getPostById(Number.parseInt(postId))
  if (!post) return

  document.getElementById("post-form-title").textContent = "Edit Post"
  document.getElementById("post-id").value = post.id
  document.getElementById("post-title").value = post.title
  document.getElementById("post-author").value = post.author
  document.getElementById("post-category").value = post.category
  document.getElementById("post-image").value = post.image || ""
  document.getElementById("post-excerpt").value = post.excerpt || ""
  document.getElementById("post-content").value = post.content
  document.getElementById("post-featured").checked = post.featured || false
  document.getElementById("post-submit-btn").textContent = "Update Post"
  document.getElementById("post-cancel-btn").style.display = "inline-block"

  // Scroll to form
  document.getElementById("post-form-container").scrollIntoView({ behavior: "smooth" })
}

// Render admin categories list
function renderAdminCategories() {
  const adminCategoriesList = document.getElementById("admin-categories-list")
  if (!adminCategoriesList) return

  const categories = getAllCategories()
  const posts = getAllPosts()

  if (categories.length === 0) {
    adminCategoriesList.innerHTML = '<tr><td colspan="4">No categories yet. Create your first category!</td></tr>'
    return
  }

  adminCategoriesList.innerHTML = categories
    .map((category) => {
      const categoryPosts = posts.filter((post) => post.category === category.name)
      return `
      <tr>
        <td>${category.name}</td>
        <td>${category.description || ""}</td>
        <td>${categoryPosts.length}</td>
        <td>
          <div class="admin-actions">
            <button class="edit-btn" data-name="${category.name}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              Edit
            </button>
            <button class="delete-btn" data-name="${category.name}" data-type="category">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              Delete
            </button>
          </div>
        </td>
      </tr>
    `
    })
    .join("")

  // Add event listeners to edit buttons
  adminCategoriesList.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const categoryName = this.getAttribute("data-name")
      editCategory(categoryName)
    })
  })

  // Add event listeners to delete buttons
  setupDeleteButtons()
}

// Edit category
function editCategory(categoryName) {
  const categories = getAllCategories()
  const category = categories.find((cat) => cat.name === categoryName)
  if (!category) return

  document.getElementById("category-id").value = category.name // Store original name for update
  document.getElementById("category-name").value = category.name
  document.getElementById("category-description").value = category.description || ""
  document.getElementById("category-image").value = category.image || ""
  document.getElementById("category-submit-btn").textContent = "Update Category"
  document.getElementById("category-cancel-btn").style.display = "inline-block"

  // Scroll to form
  document.getElementById("category-form").scrollIntoView({ behavior: "smooth" })
}

// Render admin comments list
function renderAdminComments() {
  const adminCommentsList = document.getElementById("admin-comments-list")
  if (!adminCommentsList) return

  const commentFilter = document.getElementById("comment-filter")
  const filterValue = commentFilter ? commentFilter.value : "all"

  const allComments = getAllComments(filterValue === "all" ? null : filterValue)

  if (allComments.length === 0) {
    adminCommentsList.innerHTML = '<tr><td colspan="6">No comments yet.</td></tr>'
    return
  }

  adminCommentsList.innerHTML = allComments
    .map(
      (comment) => `
    <tr>
      <td>${comment.name}</td>
      <td>${createExcerpt(comment.content, 50)}</td>
      <td><a href="post.html?id=${comment.postId}" target="_blank">${comment.postTitle}</a></td>
      <td>${formatDate(comment.date)}</td>
      <td>
        <span class="comment-status ${comment.status}">${comment.status}</span>
      </td>
      <td>
        <div class="admin-actions">
          ${
            comment.status === "pending"
              ? `
            <button class="approve-btn" data-post-id="${comment.postId}" data-comment-id="${comment.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Approve
            </button>
          `
              : ""
          }
          <button class="delete-btn" data-post-id="${comment.postId}" data-comment-id="${comment.id}" data-type="comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete
          </button>
        </div>
      </td>
    </tr>
  `,
    )
    .join("")

  // Add event listeners to approve buttons
  adminCommentsList.querySelectorAll(".approve-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.getAttribute("data-post-id")
      const commentId = this.getAttribute("data-comment-id")
      approveComment(postId, commentId)
    })
  })

  // Add event listeners to delete buttons
  adminCommentsList.querySelectorAll(".delete-btn[data-type='comment']").forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.getAttribute("data-post-id")
      const commentId = this.getAttribute("data-comment-id")
      showConfirmationModal(
        "Delete Comment",
        "Are you sure you want to delete this comment? This action cannot be undone.",
        () => {
          deleteComment(postId, commentId)
          renderAdminComments()
          showToast("Comment deleted successfully")
        },
      )
    })
  })

  // Add filter change event
  if (commentFilter) {
    commentFilter.addEventListener("change", renderAdminComments)
  }
}

// Approve comment
function approveComment(postId, commentId) {
  const result = updateCommentStatus(postId, commentId, "approved")
  if (result) {
    renderAdminComments()
    showToast("Comment approved successfully")
  } else {
    showToast("Error approving comment. Please try again.")
  }
}

// Setup delete buttons
function setupDeleteButtons() {
  // Post delete buttons
  document.querySelectorAll(".delete-btn[data-type='post']").forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.getAttribute("data-id")
      showConfirmationModal(
        "Delete Post",
        "Are you sure you want to delete this post? This action cannot be undone.",
        () => {
          deletePost(postId)
          renderAdminPosts()
          showToast("Post deleted successfully")
        },
      )
    })
  })

  // Category delete buttons
  document.querySelectorAll(".delete-btn[data-type='category']").forEach((button) => {
    button.addEventListener("click", function () {
      const categoryName = this.getAttribute("data-name")
      showConfirmationModal(
        "Delete Category",
        "Are you sure you want to delete this category? All posts in this category will be moved to 'Uncategorized'. This action cannot be undone.",
        () => {
          deleteCategory(categoryName)
          renderAdminCategories()
          renderAdminPosts() // Refresh posts as well
          showToast("Category deleted successfully")
        },
      )
    })
  })
}

// Setup analytics
function setupAnalytics() {
  const analyticsSection = document.getElementById("analytics-section")
  if (!analyticsSection) return

  const analytics = getAnalyticsData()

  // Update analytics cards
  document.getElementById("analytics-total-posts").textContent = analytics.totalPosts
  document.getElementById("analytics-total-views").textContent = analytics.totalViews
  document.getElementById("analytics-total-comments").textContent = analytics.totalComments
  document.getElementById("analytics-total-categories").textContent = analytics.totalCategories

  // Render popular posts
  const popularPostsList = document.getElementById("popular-posts-list")
  if (popularPostsList) {
    if (analytics.popularPosts.length === 0) {
      popularPostsList.innerHTML = '<tr><td colspan="3">No posts yet.</td></tr>'
    } else {
      popularPostsList.innerHTML = analytics.popularPosts
        .map(
          (post) => `
        <tr>
          <td><a href="post.html?id=${post.id}" target="_blank">${post.title}</a></td>
          <td>${post.views || 0}</td>
          <td>${post.comments?.length || 0}</td>
        </tr>
      `,
        )
        .join("")
    }
  }

  // Render category chart
  const categoryChart = document.getElementById("category-chart")
  if (!categoryChart) {
    return
  }

  if (Object.keys(analytics.postsPerCategory).length === 0) {
    categoryChart.innerHTML = "<p>No categories yet.</p>"
  } else {
    // Create a simple bar chart
    const chartHTML = `
        <div class="category-chart-container">
          ${Object.entries(analytics.postsPerCategory)
            .map(
              ([category, count]) => `
            <div class="category-chart-item">
              <div class="category-chart-label">${category}</div>
              <div class="category-chart-bar" style="width: ${Math.min(
                100,
                (count / analytics.totalPosts) * 100,
              )}%;">${count}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      `
    categoryChart.innerHTML = chartHTML
  }
}

// Setup settings form
function setupSettingsForm() {
  const settingsForm = document.getElementById("settings-form")
  if (!settingsForm) return

  // Load current settings
  const settings = getBlogSettings()
  document.getElementById("blog-title").value = settings.title || "Inkwell"
  document.getElementById("blog-description").value = settings.description || "A modern blog for modern ideas."
  document.getElementById("posts-per-page").value = settings.postsPerPage || 6
  document.getElementById("comments-enabled").checked = settings.commentsEnabled !== false
  document.getElementById("moderate-comments").checked = settings.moderateComments || false

  // Handle form submission
  settingsForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.getElementById("blog-title").value
    const description = document.getElementById("blog-description").value
    const postsPerPage = Number.parseInt(document.getElementById("posts-per-page").value)
    const commentsEnabled = document.getElementById("comments-enabled").checked
    const moderateComments = document.getElementById("moderate-comments").checked

    if (!title || !description || isNaN(postsPerPage) || postsPerPage < 1) {
      showToast("Please fill in all fields correctly")
      return
    }

    const updatedSettings = {
      ...settings,
      title,
      description,
      postsPerPage,
      commentsEnabled,
      moderateComments,
    }

    updateBlogSettings(updatedSettings)
    showToast("Settings saved successfully")
  })
}

// Setup theme settings form
function setupThemeSettingsForm() {
  const themeSettingsForm = document.getElementById("theme-settings-form")
  if (!themeSettingsForm) return

  // Load current settings
  const settings = getBlogSettings()
  document.getElementById("primary-color").value = settings.theme?.primaryColor || "#6366f1"
  document.getElementById("secondary-color").value = settings.theme?.secondaryColor || "#10b981"
  document.getElementById("accent-color").value = settings.theme?.accentColor || "#f59e0b"
  document.getElementById("dark-mode-default").checked = settings.theme?.darkModeDefault || false

  // Handle form submission
  themeSettingsForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const primaryColor = document.getElementById("primary-color").value
    const secondaryColor = document.getElementById("secondary-color").value
    const accentColor = document.getElementById("accent-color").value
    const darkModeDefault = document.getElementById("dark-mode-default").checked

    const updatedSettings = {
      ...settings,
      theme: {
        primaryColor,
        secondaryColor,
        accentColor,
        darkModeDefault,
      },
    }

    updateBlogSettings(updatedSettings)

    // Update CSS variables
    document.documentElement.style.setProperty("--primary-color", primaryColor)
    document.documentElement.style.setProperty("--primary-hover", adjustColor(primaryColor, -20))
    document.documentElement.style.setProperty("--secondary-color", secondaryColor)
    document.documentElement.style.setProperty("--accent-color", accentColor)

    showToast("Theme settings saved successfully")
  })
}

// Helper function to adjust color brightness
function adjustColor(color, amount) {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        ("0" + Math.min(255, Math.max(0, Number.parseInt(color, 16) + amount)).toString(16)).substr(-2),
      )
  )
}

// Setup confirmation modal
function setupConfirmationModal() {
  const modal = document.getElementById("confirmation-modal")
  const closeModal = document.getElementById("close-modal")
  const modalCancel = document.getElementById("modal-cancel")
  const modalConfirm = document.getElementById("modal-confirm")

  if (!modal || !closeModal || !modalCancel || !modalConfirm) return

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Cancel button
  modalCancel.addEventListener("click", () => {
    modal.style.display = "none"
  })

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"
    }
  })
}

// Show confirmation modal
function showConfirmationModal(title, message, confirmCallback) {
  const modal = document.getElementById("confirmation-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalMessage = document.getElementById("modal-message")
  const modalConfirm = document.getElementById("modal-confirm")

  if (!modal || !modalTitle || !modalMessage || !modalConfirm) return

  modalTitle.textContent = title
  modalMessage.textContent = message

  // Remove previous event listener
  const newModalConfirm = modalConfirm.cloneNode(true)
  modalConfirm.parentNode.replaceChild(newModalConfirm, modalConfirm)

  // Add new event listener
  newModalConfirm.addEventListener("click", () => {
    confirmCallback()
    modal.style.display = "none"
  })

  modal.style.display = "block"
}

// Setup image gallery lightbox
function setupImageGallery() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Create lightbox elements if they don't exist
  if (!document.getElementById("lightbox")) {
    const lightbox = document.createElement("div")
    lightbox.id = "lightbox"
    lightbox.className = "lightbox"
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img id="lightbox-image" src="/placeholder.svg" alt="Lightbox Image">
        <button id="lightbox-close" class="lightbox-close">&times;</button>
      </div>
    `
    document.body.appendChild(lightbox)

    // Close lightbox when clicking close button
    document.getElementById("lightbox-close").addEventListener("click", () => {
      lightbox.classList.remove("active")
    })

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active")
      }
    })
  }

  // Add click event to gallery images
  const galleryImages = postContent.querySelectorAll(".gallery-image")
  galleryImages.forEach((img) => {
    img.style.cursor = "pointer"
    img.addEventListener("click", function () {
      const lightbox = document.getElementById("lightbox")
      const lightboxImage = document.getElementById("lightbox-image")
      lightboxImage.src = this.src
      lightbox.classList.add("active")
    })
  })
}

// Add print functionality
function setupPrintButton() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Add print button to post actions
  const postActions = document.querySelector(".post-actions")
  if (postActions) {
    const printButton = document.createElement("button")
    printButton.className = "btn print-btn"
    printButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
      Print Article
    `
    postActions.appendChild(printButton)

    // Add click event
    printButton.addEventListener("click", () => {
      window.print()
    })
  }
}

// Add reading progress indicator
function setupReadingProgress() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  // Create progress bar
  const progressBar = document.createElement("div")
  progressBar.className = "reading-progress-bar"
  document.body.appendChild(progressBar)

  // Update progress bar on scroll
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight
    const fullHeight = document.body.clientHeight - windowHeight
    const scrolled = window.scrollY
    const progress = (scrolled / fullHeight) * 100
    progressBar.style.width = `${progress}%`
  })
}

// Add table of contents for long articles
function setupTableOfContents() {
  // Check if we're on a post page
  const postBody = document.querySelector(".post-body")
  if (!postBody) return

  // Find all headings
  const headings = postBody.querySelectorAll("h2, h3, h4")
  if (headings.length < 3) return // Only add TOC for articles with at least 3 headings

  // Create TOC container
  const toc = document.createElement("div")
  toc.className = "table-of-contents"
  toc.innerHTML = "<h4>Table of Contents</h4><ul></ul>"

  // Add TOC items
  const tocList = toc.querySelector("ul")
  headings.forEach((heading, index) => {
    // Add ID to heading if it doesn't have one
    if (!heading.id) {
      heading.id = `heading-${index}`
    }

    const listItem = document.createElement("li")
    listItem.className = `toc-${heading.tagName.toLowerCase()}`
    listItem.innerHTML = `<a href="#${heading.id}">${heading.textContent}</a>`
    tocList.appendChild(listItem)
  })

  // Insert TOC after post header
  const postHeader = document.querySelector(".post-header")
  if (postHeader) {
    postHeader.insertAdjacentElement("afterend", toc)
  }
}

// Add estimated reading time
function addEstimatedReadingTime() {
  // Check if we're on a post page
  const postContent = document.getElementById("post-content")
  if (!postContent) return

  const postBody = postContent.querySelector(".post-body")
  if (!postBody) return

  // Calculate reading time
  const text = postBody.textContent
  const wordCount = text.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute

  // Add reading time to post meta
  const postMeta = postContent.querySelector(".post-meta")
  if (postMeta) {
    const readingTimeSpan = document.createElement("span")
    readingTimeSpan.className = "reading-time"
    readingTimeSpan.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      ${readingTime} min read
    `
    postMeta.appendChild(readingTimeSpan)
  }
}

// Initialize the blog
document.addEventListener("DOMContentLoaded", () => {
  // Apply theme
  applyTheme()

  // Setup theme toggle
  setupThemeToggle()

  // Setup mobile menu
  setupMobileMenu()

  // Render categories dropdown
  renderCategoriesDropdown()

  // Setup search
  setupSearch()

  // Setup newsletter form
  setupNewsletterForm()

  // Setup back to top button
  setupBackToTop()

  // Render footer categories
  renderFooterCategories()

  // Check which page we're on
  const currentPage = window.location.pathname.split("/").pop()

  if (currentPage === "index.html" || currentPage === "") {
    // Home page
    setupHeroSlider()
    renderFeaturedPosts()
    renderCategories()
    renderHomePosts()
    renderPopularPosts()
    renderRecentComments()
    renderCategoryFilter()
  } else if (currentPage === "post.html") {
    // Single post page
    renderSinglePost()
    setupImageGallery()
    setupPrintButton()
    setupReadingProgress()
    setupTableOfContents()
    addEstimatedReadingTime()
  } else if (currentPage === "admin.html") {
    // Admin page
    setupAdminDashboard()
  }

  // Lazy load images
  lazyLoadImages()
})
