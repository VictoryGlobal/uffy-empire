// script.js

const products = [
    {
        id: 1, 
        name: "louis viutton dark blue theme full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/louis viutton dark blue theme.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 2, 
        name: "Louis vuitton coffeee theme full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Louis vuitton coffeee theme.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 3, 
        name: "White Countour full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/White Countour.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 4, 
        name: "white sketch fullset duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/white sketch.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 5, 
        name: "White underlay with multicolor design full set Luxury duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/White underlay with multicolor design.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 6, 
        name: "White-flowery full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/White-flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 7, 
        name: "Brown-comouflage full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/ash underlay.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 8, 
        name: "black hd print full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/black hd print.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 9, 
        name: "Black underlay",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Black underlay.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 10, 
        name: "blue and gold fullset duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/blue and gold stamp.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 11, 
        name: "bold brown theme full set Luxury duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/bold brown theme.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 12, 
        name: "White-flowery full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/White-flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 13, 
        name: "Brown-comouflage full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/brown comouflage full set duvet.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 14, 
        name: "brown contour full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/brown contour.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 15, 
        name: "Brown-dotted full set duvet full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Brown-dotted full set duvet.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 16, 
        name: "coffee underlay",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/coffee underlay.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 17, 
        name: "Dark theme full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 18, 
        name: "Dark-blue flowery full set duvet full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Dark-blue flowery full set duvet.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 19, 
        name: "gold and ash hd print full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/gold and ash hd print.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 20, 
        name: "Dark theme full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 21, 
        name: "gold feathers",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/gold feathers.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 22, 
        name: "green check fullset duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/green check.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 23, 
        name: "green flowery full set Luxury duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Green Flowery fullset duvet.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 24, 
        name: "horizontal lines",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/horizontal lines.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 25, 
        name: "Brown-comouflage full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/brown comouflage full set duvet.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 26, 
        name: "milk and blue roses full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Dark theme full set duvet.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 27, 
        name: "multicolored broken sticks full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/multicolored broken sticks.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 28, 
        name: "pink and white roses fullset duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/pink and white roses.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 29, 
        name: "pink underlay full set Luxury duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/pink underlay.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 30, 
        name: "Purple countour full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Purple countour.jfif",
        desc: "Naturally temperature-regulating bamboo fabric"
    },
    {
        id: 31, 
        name: "red check full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/red check.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    },
    {
        id: 32, 
        name: "red hd print full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/red hd print.jfif",
        desc: "Breathable 600-thread-count Egyptian cotton in deep purple tones"
    },
    {
        id: 33, 
        name: "red roses on white full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/red roses on white.jfif",
        desc: "Ergonomic support with luxurious velvet touch"
    },
    {
        id: 34, 
        name: "Sky blue tree branches fullset duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/Sky blue tree branches.jfif",
        desc: "Ultra-plush velvet in rich gold accents"
    },
    {
        id: 35, 
        name: "triangular check full set Luxury duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/triangular check.jfif",
        desc: "Hand-embroidered royal design with premium filling"
    },
    {
        id: 36, 
        name: "Yellow underlay full set duvet",
        price: 30000, 
        displayPrice: "₦30,000",
        img: "images/ellow underlay.jfif",
        desc: "Ultra-soft 100% mulberry silk for the ultimate sleep experience"
    }
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

    // Nice feedback
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

// The rest of your code remains unchanged...
