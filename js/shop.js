// Shop Page JavaScript

// Product data
const products = [
  {
    id: 1,
    name: "Premium Tech Jacket",
    price: 129.99,
    description: "Waterproof and breathable technical jacket for all conditions.",
    image: "/placeholder.svg?height=400&width=400&text=Premium+Jacket",
    category: "men",
  },
  {
    id: 2,
    name: "Tech Fleece Hoodie",
    price: 89.99,
    description: "Lightweight and warm hoodie with technical fabric.",
    image: "/placeholder.svg?height=400&width=400&text=Tech+Hoodie",
    category: "men",
  },
  {
    id: 3,
    name: "Performance Tee",
    price: 49.99,
    description: "Moisture-wicking performance t-shirt for training.",
    image: "/placeholder.svg?height=400&width=400&text=Performance+Tee",
    category: "men",
  },
  {
    id: 4,
    name: "Urban Cargo Pants",
    price: 79.99,
    description: "Modern cargo pants with multiple pockets.",
    image: "/placeholder.svg?height=400&width=400&text=Cargo+Pants",
    category: "men",
  },
  {
    id: 5,
    name: "Crossbody Bag",
    price: 59.99,
    description: "Stylish and practical crossbody bag for everyday use.",
    image: "/placeholder.svg?height=400&width=400&text=Crossbody+Bag",
    category: "women",
  },
  {
    id: 6,
    name: "Performance Jacket",
    price: 119.99,
    description: "Lightweight performance jacket for running and training.",
    image: "/placeholder.svg?height=400&width=400&text=Performance+Jacket",
    category: "women",
  },
  {
    id: 7,
    name: "Striped Sweater",
    price: 69.99,
    description: "Cozy striped sweater for cooler days.",
    image: "/placeholder.svg?height=400&width=400&text=Striped+Sweater",
    category: "women",
  },
  {
    id: 8,
    name: "Utility Vest",
    price: 74.99,
    originalPrice: 89.99,
    description: "Versatile utility vest with multiple pockets.",
    image: "/placeholder.svg?height=400&width=400&text=Utility+Vest",
    category: "women",
  },
  {
    id: 9,
    name: "Kids Sport Tee",
    price: 29.99,
    description: "Comfortable sport t-shirt for active kids.",
    image: "/placeholder.svg?height=400&width=400&text=Kids+Sport+Tee",
    category: "kids",
  },
  {
    id: 10,
    name: "Kids Jogger Pants",
    price: 39.99,
    description: "Soft and durable jogger pants for kids.",
    image: "/placeholder.svg?height=400&width=400&text=Kids+Jogger",
    category: "kids",
  },
  {
    id: 11,
    name: "Kids Hoodie",
    price: 49.99,
    description: "Warm and cozy hoodie for kids.",
    image: "/placeholder.svg?height=400&width=400&text=Kids+Hoodie",
    category: "kids",
  },
  {
    id: 12,
    name: "Kids Sneakers",
    price: 59.99,
    description: "Comfortable sneakers for active kids.",
    image: "/placeholder.svg?height=400&width=400&text=Kids+Sneakers",
    category: "kids",
  },
]

// Display products
function displayProducts(productsToDisplay) {
  const productsGrid = document.getElementById("products-grid")
  if (!productsGrid) return

  productsGrid.innerHTML = ""

  productsToDisplay.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"

    const priceHTML = product.originalPrice
      ? `<p class="product-price"><span class="original-price">$${product.originalPrice.toFixed(2)}</span> $${product.price.toFixed(2)}</p>`
      : `<p class="product-price">$${product.price.toFixed(2)}</p>`

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-actions">
          <button class="quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
          <button class="add-to-wishlist" data-id="${product.id}"><i class="fas fa-heart"></i></button>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        ${priceHTML}
        <button class="btn add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `

    productsGrid.appendChild(productCard)
  })

  // Add event listeners to buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", addToCart)
  })

  document.querySelectorAll(".quick-view, .add-to-wishlist").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      // Just for demo purposes
      alert("Feature coming soon!")
    })
  })

  // Update products count
  const productsTotal = document.getElementById("products-total")
  if (productsTotal) {
    productsTotal.textContent = productsToDisplay.length
  }
}

// Filter products
function filterProducts() {
  const categoryFilter = document.querySelector('input[name="category"]:checked').value
  const priceFilter = document.querySelector('input[name="price"]:checked').value
  const sortFilter = document.querySelector('input[name="sort"]:checked').value

  // Get selected colors
  const selectedColors = []
  document.querySelectorAll('input[name="color"]:checked').forEach((checkbox) => {
    selectedColors.push(checkbox.value)
  })

  let filteredProducts = [...products]

  // Filter by category
  if (categoryFilter !== "all") {
    filteredProducts = filteredProducts.filter((product) => product.category === categoryFilter)
  }

  // Filter by price
  if (priceFilter !== "all") {
    switch (priceFilter) {
      case "under-50":
        filteredProducts = filteredProducts.filter((product) => product.price < 50)
        break
      case "50-100":
        filteredProducts = filteredProducts.filter((product) => product.price >= 50 && product.price <= 100)
        break
      case "over-100":
        filteredProducts = filteredProducts.filter((product) => product.price > 100)
        break
    }
  }

  // Sort products
  switch (sortFilter) {
    case "low-high":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "high-low":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "newest":
      // For demo purposes, we'll just reverse the array
      filteredProducts.reverse()
      break
    default:
      // Default sorting (featured)
      break
  }

  displayProducts(filteredProducts)
}

// Function to update the cart count in the UI
function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartCountElement = document.getElementById("cart-count")

  if (cartCountElement) {
    cartCountElement.textContent = cartCount.toString()
  }
}

// Add to cart function
function addToCart(e) {
  const productId = Number.parseInt(e.target.getAttribute("data-id"))
  const product = products.find((p) => p.id === productId)

  if (product) {
    // Get existing cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    // Check if product is already in cart
    const existingItem = cartItems.find((item) => item.id === productId)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    }

    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    // Update cart count
    updateCartCount()

    // Show notification
    showNotification("Item added to cart!")
  }
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById("notification")
  const overlay = document.getElementById("overlay")

  notification.querySelector("p").textContent = message
  notification.classList.add("show")

  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Mobile filter toggle
document.addEventListener("DOMContentLoaded", () => {
  const filterToggle = document.getElementById("filter-toggle")
  const filtersSidebar = document.getElementById("filters-sidebar")
  const closeFilters = document.getElementById("close-filters")
  const overlay = document.getElementById("overlay")

  if (filterToggle && filtersSidebar && closeFilters && overlay) {
    filterToggle.addEventListener("click", () => {
      filtersSidebar.classList.add("active")
      overlay.classList.add("show")
      document.body.style.overflow = "hidden"
    })

    closeFilters.addEventListener("click", () => {
      filtersSidebar.classList.remove("active")
      overlay.classList.remove("show")
      document.body.style.overflow = ""
    })

    overlay.addEventListener("click", () => {
      filtersSidebar.classList.remove("active")
      overlay.classList.remove("show")
      document.body.style.overflow = ""
    })
  }

  // View options (grid/list)
  const viewOptions = document.querySelectorAll(".view-option")
  const productsGrid = document.getElementById("products-grid")

  if (viewOptions.length && productsGrid) {
    viewOptions.forEach((option) => {
      option.addEventListener("click", () => {
        viewOptions.forEach((opt) => opt.classList.remove("active"))
        option.classList.add("active")

        const viewType = option.getAttribute("data-view")
        productsGrid.className = viewType === "list" ? "products-list" : "products-grid"
      })
    })
  }

  // Display all products initially
  displayProducts(products)

  // Add event listeners to filter options
  document
    .querySelectorAll('input[name="category"], input[name="price"], input[name="sort"], input[name="color"]')
    .forEach((input) => {
      input.addEventListener("change", filterProducts)
    })

  // Apply filters button
  const applyFiltersBtn = document.querySelector(".btn-apply-filters")
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      filterProducts()
      if (window.innerWidth < 992) {
        filtersSidebar.classList.remove("active")
        overlay.classList.remove("show")
        document.body.style.overflow = ""
      }
    })
  }

  // Update cart count on page load
  updateCartCount()
})
