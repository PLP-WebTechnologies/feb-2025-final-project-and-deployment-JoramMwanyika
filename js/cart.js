// Cart Page JavaScript

// Display cart items
function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const cartItemsContainer = document.getElementById("cart-items")
  const cartEmptyElement = document.getElementById("cart-empty")
  const cartContentElement = document.getElementById("cart-content")

  if (cartItems.length === 0) {
    // Show empty cart message
    if (cartEmptyElement) cartEmptyElement.style.display = "block"
    if (cartContentElement) cartContentElement.style.display = "none"
    return
  }

  // Hide empty cart message and show cart items
  if (cartEmptyElement) cartEmptyElement.style.display = "none"
  if (cartContentElement) cartContentElement.style.display = "block"
  if (!cartItemsContainer) return

  // Clear previous cart items
  cartItemsContainer.innerHTML = ""

  // Add each cart item to the container
  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div")
    cartItemElement.className = "cart-item"

    cartItemElement.innerHTML = `
      <div class="cart-item-product">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>Size: M | Color: Black</p>
        </div>
      </div>
      <div class="cart-item-price">$${item.price.toFixed(2)}</div>
      <div class="cart-item-quantity">
        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" readonly>
        <button class="quantity-btn increase" data-id="${item.id}">+</button>
      </div>
      <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <button class="cart-item-remove" data-id="${item.id}">
        <i class="fas fa-trash"></i>
      </button>
    `

    cartItemsContainer.appendChild(cartItemElement)
  })

  // Add event listeners to quantity buttons and remove buttons
  document.querySelectorAll(".quantity-btn.decrease").forEach((button) => {
    button.addEventListener("click", decreaseQuantity)
  })

  document.querySelectorAll(".quantity-btn.increase").forEach((button) => {
    button.addEventListener("click", increaseQuantity)
  })

  document.querySelectorAll(".cart-item-remove").forEach((button) => {
    button.addEventListener("click", removeCartItem)
  })

  // Update cart totals
  updateCartTotals()
}

// Increase item quantity
function increaseQuantity(e) {
  const productId = Number.parseInt(e.target.getAttribute("data-id"))
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  const item = cartItems.find((item) => item.id === productId)
  if (item) {
    item.quantity += 1
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    displayCartItems()
    updateCartCount()
  }
}

// Decrease item quantity
function decreaseQuantity(e) {
  const productId = Number.parseInt(e.target.getAttribute("data-id"))
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  const item = cartItems.find((item) => item.id === productId)
  if (item && item.quantity > 1) {
    item.quantity -= 1
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    displayCartItems()
    updateCartCount()
  }
}

// Remove item from cart
function removeCartItem(e) {
  const productId = Number.parseInt(e.target.closest(".cart-item-remove").getAttribute("data-id"))
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  cartItems = cartItems.filter((item) => item.id !== productId)
  localStorage.setItem("cartItems", JSON.stringify(cartItems))

  // Update cart count
  updateCartCount()

  // Refresh cart display
  displayCartItems()
}

// Update cart totals
function updateCartTotals() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const subtotalElement = document.getElementById("cart-subtotal")
  const totalElement = document.getElementById("cart-total")

  if (!subtotalElement || !totalElement) return

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Update elements
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`
  totalElement.textContent = `$${subtotal.toFixed(2)}`
}

// Handle checkout button
function handleCheckout() {
  alert("Thank you for your order! This would normally proceed to payment processing.")

  // Clear cart
  localStorage.removeItem("cartItems")
  updateCartCount()
  displayCartItems()
}

// Initialize cart page
document.addEventListener("DOMContentLoaded", () => {
  displayCartItems()

  // Add event listener to checkout button
  const checkoutBtn = document.getElementById("checkout-btn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", handleCheckout)
  }

  // Add event listener to update cart button
  const updateCartBtn = document.getElementById("update-cart")
  if (updateCartBtn) {
    updateCartBtn.addEventListener("click", () => {
      displayCartItems()
      alert("Cart updated!")
    })
  }

  // Product quick view and wishlist buttons
  document.querySelectorAll(".quick-view, .add-to-wishlist").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      // Just for demo purposes
      alert("Feature coming soon!")
    })
  })
})
