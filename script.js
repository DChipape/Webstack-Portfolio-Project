  var currentImageIndex = 0;
  var imageSources = [
  'images/image-product-1.jpg',
  'images/image-product-2.jpg',
  'images/image-product-3.jpg',
  'images/image-product-4.jpg'
];

function changeMainImage(imageSrc) {
    var mainImage = document.getElementById('mainImage');
      mainImage.src = imageSrc;
    }

function hideEnlargedImage() {
  var mainImage = document.querySelector('.main-image');
      mainImage.classList.remove('enlarged');
    }

function incrementQuantity() {
  var quantityInput = document.getElementById('quantityInput');
  var quantity = parseInt(quantityInput.value);
  quantityInput.value = quantity + 1;
  updatePrices(quantity + 1);
}

function decrementQuantity() {
  var quantityInput = document.getElementById('quantityInput');
  var quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
    updatePrices(quantity - 1);
  }
}
function updatePrices(quantity) {
  updateTotalPrice(quantity);
  updateCartContent();
}

function updateTotalPrice(quantity) {
  var totalPriceElement = document.getElementById('totalPrice');
  var totalPrice = quantity * 125.00;
  totalPriceElement.textContent = '$' + totalPrice.toFixed(2);

  var discountPriceElement = document.getElementById('discountPrice');
  var originalPriceElement = document.getElementById('originalPrice');

  // 50% discount
  var discountedPrice = totalPrice * 0.5;
  discountPriceElement.textContent = '$' + discountedPrice.toFixed(2);

  var originalPrice = 250.00;
  originalPriceElement.textContent = '$' + originalPrice.toFixed(2);
}
var cartItems = []; // Array that store items in the cart

function updateCartContent() {
  var cartContent = document.querySelector('.cart-content');
  cartContent.innerHTML = '';

  if (cartItems.length === 0) {
    cartContent.textContent = 'Your cart is empty.';
  } else {
    cartItems.forEach(function(item) {
      var listItem = document.createElement('li');
      listItem.textContent = item.name + ' - $' + item.price + ' x ' + item.quantity;
      cartContent.appendChild(listItem);
    });
  }
}

function toggleCart() {
  var cartContent = document.querySelector('.cart-content');
  if (cartContent.classList.contains('visible')) {
    cartContent.classList.remove('visible');
  } else {
    cartContent.classList.add('visible');
    updateCartContent();
  }
}

function addToCart() {
      var newItem = {
        name: "Sample Item",
        price: 10,
        quantity: 1
      };
      cartItems.push(newItem);
      updateCartIconClass();
    }

function updateCartIconClass() {
      var cartIcon = document.getElementById('cartIcon');
      if (cartItems.length > 0) {
        cartIcon.classList.add('non-empty');
      } else {
        cartIcon.classList.remove('non-empty');
      }
    }

document.querySelector('.add-to-cart-btn').addEventListener('click', addToCart);
document.getElementById('cartIcon').addEventListener('click', toggleCart);

function showCart() {
  var wholeCartWindow = document.querySelector('.whole-cart-window');
  wholeCartWindow.classList.remove('hide');
}

function closeCartModal() {
  var wholeCartWindow = document.querySelector('.whole-cart-window');
  wholeCartWindow.classList.add('hide');
}
function changeMainImage(index) {
      var mainImage = document.getElementById('mainImage');
      mainImage.src = imageSources[index];
    }
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
      changeMainImage(imageSources[currentImageIndex]);
    }

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
      changeMainImage(imageSources[currentImageIndex]);
    }
    function showLightbox(imageSrc) {
      var lightbox = document.querySelector('.lightbox');
      var lightboxImage = document.querySelector('.lightbox-image');

      imageIndex = imageSources.indexOf(imageSrc);
      lightboxImage.src = imageSrc;
      lightbox.style.display = 'block';
    }

    function closeLightbox() {
      var lightbox = document.querySelector('.lightbox');
      lightbox.style.display = 'none';
    }
    function showNextImage() {
      imageIndex = (imageIndex + 1) % imageSources.length;
      document.querySelector('.lightbox-image').src = imageSources[imageIndex];
    }

    function showPreviousImage() {
      imageIndex = (imageIndex - 1 + imageSources.length) % imageSources.length;
      document.querySelector('.lightbox-image').src = imageSources[imageIndex];
    }
    


