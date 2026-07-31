// sc// script.js

const products = [
    { id: 1, name: "white print", price: 30000, displayPrice: "₦30,000", img: "images/white print.jpg", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 2, name: "louis viutton dark blue theme full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/louis viutton dark blue theme.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 3, name: "Louis vuitton coffeee theme full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Louis vuitton coffeee theme.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 4, name: "White Countour full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/White Countour.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 5, name: "white sketch fullset duvet", price: 30000, displayPrice: "₦30,000", img: "images/white sketch.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 6, name: "White underlay with multicolor design full set Luxury duvet", price: 30000, displayPrice: "₦30,000", img: "images/White underlay with multicolor design.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 7, name: "White-flowery full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/White-flowery full set duvet.jfif", desc: "Naturally temperature-regulating bamboo fabric" },
    { id: 8, name: "Brown-comouflage full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/ash underlay.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 9, name: "black hd print full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/black hd print.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 10, name: "Black underlay", price: 30000, displayPrice: "₦30,000", img: "images/Black underlay.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 11, name: "blue and gold fullset duvet", price: 30000, displayPrice: "₦30,000", img: "images/blue and gold stamp.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 12, name: "bold brown theme full set Luxury duvet", price: 30000, displayPrice: "₦30,000", img: "images/bold brown theme.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 13, name: "White-flowery full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/White-flowery full set duvet.jfif", desc: "Naturally temperature-regulating bamboo fabric" },
    { id: 14, name: "Brown-comouflage full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/brown comouflage full set duvet.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 15, name: "brown contour full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/brown contour.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 16, name: "Brown-dotted full set duvet full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Brown-dotted full set duvet.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 17, name: "coffee underlay", price: 30000, displayPrice: "₦30,000", img: "images/coffee underlay.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 18, name: "Dark theme full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Dark theme full set duvet.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 19, name: "Dark-blue flowery full set duvet full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Dark-blue flowery full set duvet.jfif", desc: "Naturally temperature-regulating bamboo fabric" },
    { id: 20, name: "gold and ash hd print full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/gold and ash hd print.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 21, name: "Dark theme full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Dark theme full set duvet.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 22, name: "gold feathers", price: 30000, displayPrice: "₦30,000", img: "images/gold feathers.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 23, name: "green check fullset duvet", price: 30000, displayPrice: "₦30,000", img: "images/green check.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 24, name: "green flowery full set Luxury duvet", price: 30000, displayPrice: "₦30,000", img: "images/Green Flowery fullset duvet.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 25, name: "horizontal lines", price: 30000, displayPrice: "₦30,000", img: "images/horizontal lines.jfif", desc: "Naturally temperature-regulating bamboo fabric" },
    { id: 26, name: "Brown-comouflage full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/brown comouflage full set duvet.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 27, name: "milk and blue roses full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Dark theme full set duvet.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 28, name: "multicolored broken sticks full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/multicolored broken sticks.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 29, name: "pink and white roses fullset duvet", price: 30000, displayPrice: "₦30,000", img: "images/pink and white roses.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 30, name: "pink underlay full set Luxury duvet", price: 30000, displayPrice: "₦30,000", img: "images/pink underlay.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 31, name: "Purple countour full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/Purple countour.jfif", desc: "Naturally temperature-regulating bamboo fabric" },
    { id: 32, name: "red check full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/red check.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" },
    { id: 33, name: "red hd print full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/red hd print.jfif", desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones" },
    { id: 34, name: "red roses on white full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/red roses on white.jfif", desc: "Ergonomic support with luxurious velvet touch" },
    { id: 35, name: "Sky blue tree branches fullset duvet", price: 30000, displayPrice: "₦30,000", img: "images/Sky blue tree branches.jfif", desc: "Ultra-plush velvet in rich gold accents" },
    { id: 36, name: "triangular check full set Luxury duvet", price: 30000, displayPrice: "₦30,000", img: "images/triangular check.jfif", desc: "Hand-embroidered royal design with premium filling" },
    { id: 37, name: "Yellow underlay full set duvet", price: 30000, displayPrice: "₦30,000", img: "images/ellow underlay.jfif", desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience" }
];

// Cart as object: { productId: { ...productData, quantity: number } }
let cart = {};

// Load cart from localStorage on page load
function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add (or increase quantity)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { ...product, quantity: 1 };
    }

    saveCart();
    updateCartCount();

    alert(`Added ${product.name} to cart (${cart[productId].quantity} in cart now)`);
}

// Update cart icon number
function updateCartCount() {
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) {
        countEl.textContent = totalItems;
        countEl.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Initialize
loadCart();

// Populate products
const productsGrid = document.getElementById('products-grid');

if (productsGrid) {
    productsGrid.innerHTML = ''; // clear first to avoid duplicates

    let productsToShow;

    if (document.querySelector('.hero')) {
        productsToShow = products.slice(0, 12);   // Homepage: first 12
    } else {
        productsToShow = products;                // Shop page: all products
    }

    productsToShow.forEach(product => {
        const cardHTML = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <div class="price">${product.displayPrice}</div>
                    <div class="action-buttons" style="display: flex; gap: 10px; margin-top: 12px;">
                        <button class="buy-btn" data-id="${product.id}">Buy Now</button>
                        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += cardHTML;
    });
}

// Modal elements
const modal = document.getElementById('buy-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');
const confirmBtn = document.getElementById('confirm-payment');

let currentProduct = null;
let selectedQuantity = 1;
let deliveryOption = "pickup";

// Quantity elements
const qtyDisplay = document.getElementById('qty-display');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');

function updateTotalPrice() {
    if (!currentProduct || !modalPrice) return;
    const total = currentProduct.price * selectedQuantity;
    modalPrice.textContent = `₦${total.toLocaleString('en-NG')}`;
}

if (qtyMinus && qtyPlus && qtyDisplay) {
    function updateQuantityButtons() {
        qtyMinus.disabled = selectedQuantity <= 1;
        qtyPlus.disabled = selectedQuantity >= 10;
    }

    qtyMinus.addEventListener('click', () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            qtyDisplay.textContent = selectedQuantity;
            updateTotalPrice();
            updateQuantityButtons();
        }
    });

    qtyPlus.addEventListener('click', () => {
        if (selectedQuantity < 10) {
            selectedQuantity++;
            qtyDisplay.textContent = selectedQuantity;
            updateTotalPrice();
            updateQuantityButtons();
        }
    });
}

// Delivery option
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
deliveryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        deliveryOption = e.target.value;
        if (deliveryOption === "delivery" && !sessionStorage.getItem('deliveryAlertShown')) {
            alert("Home delivery incurs additional charges based on your location.\nExact fee will be confirmed via WhatsApp after order submission.");
            sessionStorage.setItem('deliveryAlertShown', 'true');
        }
    });
});

// Open modal & Add to Cart
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
        return;
    }

    if (e.target.classList.contains('buy-btn')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        currentProduct = products.find(p => p.id === productId);

        if (currentProduct) {
            selectedQuantity = 1;
            deliveryOption = "pickup";
            document.querySelector('input[name="delivery"][value="pickup"]').checked = true;
            
            if (qtyDisplay) qtyDisplay.textContent = 1;
            updateQuantityButtons();

            modalImg.src = currentProduct.img;
            modalName.textContent = currentProduct.name;
            updateTotalPrice();

            modal.style.display = 'flex';

            // Clear inputs
            const nameInput = document.getElementById('customer-name');
            const waInput = document.getElementById('customer-whatsapp');
            if (nameInput) nameInput.value = '';
            if (waInput) waInput.value = '';
        }
    }
});

// Close modal
function closeModal() {
    if (modal) modal.style.display = 'none';
}

closeBtn?.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.style.display === 'flex') {
        closeModal();
    }
});

// Confirm Order → WhatsApp
confirmBtn?.addEventListener('click', () => {
    if (!currentProduct) return;

    const nameInput = document.getElementById('customer-name');
    const waInput = document.getElementById('customer-whatsapp');

    const customerName = nameInput?.value.trim();
    const waNumberRaw = waInput?.value.trim();
    const waNumber = waNumberRaw ? waNumberRaw.replace(/\D/g, '') : '';

    if (!customerName) {
        alert("Please enter your full name.");
        return;
    }
    if (!waNumber || waNumber.length < 10) {
        alert("Please enter a valid WhatsApp number.\nExample: 2348012345678");
        return;
    }

    const totalAmount = currentProduct.price * selectedQuantity;
    const formattedTotal = `₦${totalAmount.toLocaleString('en-NG')}`;

    const yourWhatsAppNumber = "2348160330260";   // ← Change this to your number

    const bankDetails = `Bank: GTBank\nAccount Name: Uffy's Empire\nAccount Number: 0562663931\n(Please transfer exactly ${formattedTotal})`;

    const message = `Hello Uffy's Empire! 

I'd like to place an order:

Product: ${currentProduct.name}
Quantity: ${selectedQuantity}
Total amount: ${formattedTotal}

My name: ${customerName}
WhatsApp: +${waNumber}

Delivery preference: ${deliveryOption === "pickup" ? "Pick-up at store (free)" : "Home Delivery (extra charges apply)"}

Bank transfer details:
${bankDetails}

I'll send the payment proof immediately after transfer.
Please confirm when received. Thank you! 🙏`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMsg}`;

    window.open(whatsappLink, '_blank');

    alert(`Thank you ${customerName}! Your order details have been sent to our WhatsApp.`);

    closeModal();
    selectedQuantity = 1;
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    const spans = hamburger?.querySelectorAll('span');
    if (spans?.length === 3) {
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        const spans = hamburger?.querySelectorAll('span');
        if (spans?.length === 3) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// The rest of your code remains unchanged...
