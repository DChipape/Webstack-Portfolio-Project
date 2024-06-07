const imageSources = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg',
  'images/image-product-5.jpg',
  'images/image-product-6.jpg',
  'images/image-product-7.jpg',
  'images/image-product-8.jpg',
  'images/image-product-9.jpg',
  'images/image-product-10.jpg',
  'images/image-product-11.jpg',
  'images/image-product-12.jpg',
  'images/image-product-13.jpg',
  'images/image-product-14.jpg',
  'images/image-product-15.jpg',
  'images/image-product-16.jpg'
];

function changeMainImage(imageSrc, imageId) {
  const mainImage = document.getElementById(imageId);
  mainImage.src = imageSrc;
}

function incrementQuantity() {
  const quantityInput = document.getElementById('quantityInput');
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
  updateTotalPrice(quantity + 1);
}

function decrementQuantity() {
  const quantityInput = document.getElementById('quantityInput');
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
    updateTotalPrice(quantity - 1);
  }
}

function updateTotalPrice(quantity) {
  const discountPriceElement = document.getElementById('discountPrice');
  const totalPrice = quantity * 125.00;
  discountPriceElement.textContent = '$' + totalPrice.toFixed(2);
}

const cartItems = []; // Array to store items in the cart

function addToCart(imageIndex) {
  const quantityInput = document.getElementById('quantityInput');
  const quantity = parseInt(quantityInput.value);
  const newItem = {
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    quantity: quantity,
    imageSrc: imageSources[imageIndex] // Update to fetch image source dynamically
  };
  cartItems.push(newItem);
  updateCartIcon();
  updateCartContent();
}

function updateCartIcon() {
  const cartIcon = document.getElementById('cartIcon');
  if (cartItems.length > 0) {
    cartIcon.classList.add('active');
  } else {
    cartIcon.classList.remove('active');
  }
}

function updateCartContent() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  cartWrapper.innerHTML = ''; // Clear previous content
  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.imageSrc}" alt="Sneakers">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
    `;
    cartWrapper.appendChild(cartItem);
  });
}

function toggleCart() {
  const cartWindow = document.querySelector('.whole-cart-window');
  cartWindow.classList.toggle('hide');
}

function showLightbox(imageIndex) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  lightboxImage.src = imageSources[imageIndex];
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'none';
}

function showPreviousImage() {
  const lightboxImage = document.querySelector('.lightbox-image');
  let currentIndex = imageSources.indexOf(lightboxImage.src);
  if (currentIndex === -1 || currentIndex === 0) {
    currentIndex = imageSources.length - 1;
  } else {
    currentIndex--;
  }
  lightboxImage.src = imageSources[currentIndex];
}

function showNextImage() {
  const lightboxImage = document.querySelector('.lightbox-image');
  let currentIndex = imageSources.indexOf(lightboxImage.src);
  if (currentIndex === -1 || currentIndex === imageSources.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  lightboxImage.src = imageSources[currentIndex];
}
