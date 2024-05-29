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
  var cartWrapper = document.querySelector('.cart-wrapper');
  cartWrapper.innerHTML = '';

  var totalAmount = 0;

  if (cartItems.length === 0) {
    cartWrapper.textContent = 'Your cart is empty.';
  } else {
    cartItems.forEach(function(item, index) {
      var cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      var image = document.createElement('img');
      image.src = item.imageSrc;
      var details = document.createElement('div');
      details.classList.add('details');

      var name = document.createElement('p');
      name.textContent = item.name;
      var price = document.createElement('span');
      price.textContent = '$' + item.price.toFixed(2);
      var quantity = document.createElement('span');
      quantity.textContent = ' x ' + item.quantity;
      var subtotal = document.createElement('span');
      subtotal.textContent = '$' + (item.price * item.quantity).toFixed(2); // Calculate subtotal

      details.appendChild(name);
      details.appendChild(price);
      details.appendChild(quantity);
      details.appendChild(subtotal);

      var cancel = document.createElement('div');
      cancel.classList.add('cancel');
      var cancelIcon = document.createElement('img');
      cancelIcon.src = 'images/icon-delete.svg';
      cancelIcon.addEventListener('click', function() {
        removeCartItem(index);
      });
      cancel.appendChild(cancelIcon);

      cartItem.appendChild(image);
      cartItem.appendChild(details);
      cartItem.appendChild(cancel);

      cartWrapper.appendChild(cartItem);

      totalAmount += item.price * item.quantity; // Accumulate total amount
    });
  }

  // Update total amount in the cart
  var totalPriceElement = document.querySelector('.subtotal');
  totalPriceElement.textContent = '$' + totalAmount.toFixed(2);
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
  var quantityInput = document.getElementById('quantityInput');
  var quantity = parseInt(quantityInput.value);
  var totalPrice = quantity * 125.00;

  var newItem = {
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    quantity: quantity,
    totalPrice: totalPrice,
    imageSrc: imageSources[currentImageIndex]
  };
  cartItems.push(newItem);
  updateCartIconClass();
  updateCartContent();
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
    


