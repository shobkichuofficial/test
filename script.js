// =================================================================================
// SECTION 1: GLOBAL STATE & CONSTANTS
// =================================================================================
const SHIPPING_CHARGES = { "ঢাকা": 70, "চট্টগ্রাম": 130, "অন্যান্য": 130 };
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzQCjKrtEMu4jj5ppWnnuMpJrOSIkKDVakGgwOeQUfyWWq0lsns14kLd0gMcd0HDS91/exec";
const SECRET_API_KEY = "SBC-ORD-KEY-f83h-9s3y-k48d-p9e1"; 

let CART = [];
let DOM_REFERENCES = {};

// Data will be loaded from JSON files
let PRODUCTS = [];
let ACHAR_PRODUCTS = [];
let BALACHAO_PRODUCTS = [];
let REVIEWS = [];
let DIVISIONS_AND_DISTRICTS = {};
let DISTRICTS_AND_THANAS = {};

// =================================================================================
// SECTION 2: LOCAL STORAGE & UTILITY FUNCTIONS
// =================================================================================
function saveCartToStorage() {
  localStorage.setItem('shobkichuCart', JSON.stringify(CART));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem('shobkichuCart');
  CART = storedCart ? JSON.parse(storedCart) : [];
}

function showToast(title, description, variant = 'default') {
  const { toastEl, toastTitleEl, toastDescriptionEl } = DOM_REFERENCES;
  if (!toastEl) return;
  toastTitleEl.textContent = title;
  toastDescriptionEl.textContent = description;
  toastEl.className = 'toast';
  if (variant === 'destructive' || variant === 'warning') toastEl.classList.add(variant);
  toastEl.classList.add('show');
  setTimeout(() => { toastEl.classList.remove('show'); }, 3500);
}

function updateCartCount() {
  const count = CART.reduce((sum, item) => sum + item.quantity, 0);
  if (DOM_REFERENCES.cartItemCountEl) {
    DOM_REFERENCES.cartItemCountEl.textContent = count;
    DOM_REFERENCES.cartItemCountEl.classList.toggle('hidden', count === 0);
  }
}

// =================================================================================
// SECTION 3: API COMMUNICATION
// =================================================================================
async function submitToGoogleSheet(formData) {
    const data = new FormData();
    data.append('apiKey', SECRET_API_KEY);
    data.append('customerName', formData.customerName);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('address', formData.address);
    data.append('deliveryLocation', formData.deliveryLocation);
    data.append('items', formData.items);
    data.append('totalAmount', formData.totalAmount);

    try {
        const response = await fetch(SPREADSHEET_URL, { method: 'POST', body: data });
        if (response.ok) return true;
        else throw new Error('Network response was not ok.');
    } catch (error) {
        console.error('Error submitting to Google Sheet:', error);
        showToast("ত্রুটি", "অর্ডার পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।", "destructive");
        return false;
    }
}

// =================================================================================
// SECTION 4: UI RENDERING FUNCTIONS
// =================================================================================
function renderProducts(productsToRender, gridElement) {
  if (!gridElement) return;
  gridElement.innerHTML = productsToRender.map(createProductCardHTML).join('');
}

function createProductCardHTML(p) {
  const isOutOfStock = p.stock === 0;
  return `
  <div class="card-modern group overflow-hidden block ${isOutOfStock ? 'opacity-60' : ''}" style="animation: fade-in 0.5s ease-out;">
    <a href="product.html?id=${p.id}" class="p-0 block">
      <div class="relative overflow-hidden">
        <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        ${p.freeDelivery ? `<div class="absolute top-3 right-3 bg-destructive text-destructive-foreground font-bold text-xs px-2 py-1 rounded-md shadow-lg z-10">ফ্রি ডেলিভারি</div>` : ''}
        ${isOutOfStock ? `<div class="absolute top-3 left-3 bg-gray-900 text-white font-bold text-xs px-2 py-1 rounded-md shadow-lg z-10">স্টক আউট</div>` : ''}
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">${p.name}</h3>
        <div class="flex items-center justify-between mt-2">
          <span class="bg-gradient-secondary text-secondary-foreground font-bold text-lg px-3 py-1 rounded-md">৳${p.price}</span>
          <span class="text-sm text-green-600 font-medium">বিস্তারিত দেখুন</span>
        </div>
      </div>
    </a>
    <div class="p-6 pt-0">
      <div class="flex gap-2">
        <button class="btn-primary flex-1 py-3 px-4 rounded-md text-base" onclick="orderNow('${p.id}')" ${isOutOfStock ? 'disabled' : ''}>${isOutOfStock ? 'স্টক আউট' : 'অর্ডার করুন'}</button>
        <button class="btn-ghost py-3 px-4 rounded-md text-base flex items-center justify-center gap-1" onclick="addToCart('${p.id}')" ${isOutOfStock ? 'disabled' : ''}>🛒</button>
      </div>
    </div>
  </div>`;
}

function renderReviews(reviewsToRender, gridElement) {
    if (!gridElement) return;
    gridElement.innerHTML = reviewsToRender.map(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        return `
        <div class="card-modern p-6 text-center animate-fade-in">
            <h4 class="font-bold text-xl text-gradient mb-2">${review.name}</h4>
            <div class="flex justify-center my-2 text-yellow-400 text-xl">${stars}</div>
            <p class="text-muted-foreground italic leading-relaxed">"${review.text}"</p>
        </div>`;
    }).join('');
}

function renderComboCreator() {
    const container = document.getElementById('combo-offer-creator');
    if (!container || ACHAR_PRODUCTS.length === 0) return;
    container.innerHTML = `
        <div class="card-modern p-6 md:p-8 bg-gradient-subtle border-primary/50">
            <h3 class="text-2xl font-bold text-gradient mb-2 text-center">আচার কম্বো অফার!</h3>
            <p class="text-muted-foreground mb-6 text-center">আপনার পছন্দের যেকোন দুইটি আচার একসাথে নিন মাত্র ৳৯০০ টাকায়, সাথে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি!</p>
            <div class="flex justify-center items-center gap-4 mb-6">
                <img id="achar1-img" src="" alt="প্রথম আচার" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md border-2 border-border transition-all duration-300">
                <span class="text-2xl font-bold text-muted-foreground">+</span>
                <img id="achar2-img" src="" alt="দ্বিতীয় আচার" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md border-2 border-border transition-all duration-300">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <label for="achar1" class="block text-sm font-medium mb-1">প্রথম আচার</label>
                    <select id="achar1" class="w-full p-2 border rounded-md bg-input"></select>
                </div>
                <div>
                    <label for="achar2" class="block text-sm font-medium mb-1">দ্বিতীয় আচার</label>
                    <select id="achar2" class="w-full p-2 border rounded-md bg-input"></select>
                </div>
            </div>
            <button onclick="orderAcharCombo()" class="w-full btn-primary text-lg py-3 rounded-md">কম্বো অর্ডার করুন (৳900)</button>
        </div>
    `;
    const achar1Select = document.getElementById('achar1');
    const achar2Select = document.getElementById('achar2');
    const achar1Img = document.getElementById('achar1-img');
    const achar2Img = document.getElementById('achar2-img');
    function updateImages() {
        const product1 = ACHAR_PRODUCTS.find(p => p.id === achar1Select.value);
        const product2 = ACHAR_PRODUCTS.find(p => p.id === achar2Select.value);
        if (product1) achar1Img.src = product1.image;
        if (product2) achar2Img.src = product2.image;
    }
    function syncDropdowns() {
        const selectedAchar1Id = achar1Select.value;
        let currentAchar2Id = achar2Select.value;
        if (selectedAchar1Id === currentAchar2Id) {
            const nextAvailable = ACHAR_PRODUCTS.find(p => p.id !== selectedAchar1Id);
            if (nextAvailable) currentAchar2Id = nextAvailable.id;
        }
        achar2Select.innerHTML = ACHAR_PRODUCTS.filter(p => p.id !== selectedAchar1Id).map(p => `<option value="${p.id}" ${p.id === currentAchar2Id ? 'selected' : ''}>${p.name}</option>`).join('');
        updateImages();
    }
    achar1Select.addEventListener('change', syncDropdowns);
    achar2Select.addEventListener('change', updateImages);
    achar1Select.innerHTML = ACHAR_PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    syncDropdowns();
}

function renderBalachaoAcharCombo() {
    const container = document.getElementById('balachao-achar-combo-creator');
    if (!container || BALACHAO_PRODUCTS.length === 0 || ACHAR_PRODUCTS.length === 0) return;
    const balachaoOptionsHTML = BALACHAO_PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    const acharOptionsHTML = ACHAR_PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    container.innerHTML = `
        <div class="card-modern p-6 md:p-8 bg-gradient-subtle border-secondary/50">
            <h3 class="text-2xl font-bold text-gradient mb-2 text-center" style="background-image: var(--gradient-secondary);">বালাচাও + আচার কম্বো!</h3>
            <p class="text-muted-foreground mb-6 text-center">যেকোনো একটি বালাচাও ও একটি আচার একসাথে নিলে ডেলিভারি চার্জ সম্পূর্ণ ফ্রি!</p>
            <div class="flex justify-center items-center gap-4 mb-6">
                <img id="balachao-combo-img" src="" alt="বালাচাও" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md border-2 border-border transition-all duration-300">
                <span class="text-2xl font-bold text-muted-foreground">+</span>
                <img id="achar-combo-img" src="" alt="আচার" class="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md border-2 border-border transition-all duration-300">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <label for="balachao-select" class="block text-sm font-medium mb-1">বালাচাও</label>
                    <select id="balachao-select" class="w-full p-2 border rounded-md bg-input">${balachaoOptionsHTML}</select>
                </div>
                <div>
                    <label for="achar-select" class="block text-sm font-medium mb-1">আচার</label>
                    <select id="achar-select" class="w-full p-2 border rounded-md bg-input">${acharOptionsHTML}</select>
                </div>
            </div>
            <button id="balachao-achar-combo-btn" onclick="orderBalachaoAcharCombo()" class="w-full btn-primary text-lg py-3 rounded-md">কম্বো অর্ডার করুন</button>
        </div>
    `;
    const balachaoSelect = document.getElementById('balachao-select');
    const acharSelect = document.getElementById('achar-select');
    const balachaoImg = document.getElementById('balachao-combo-img');
    const acharImg = document.getElementById('achar-combo-img');
    const comboBtn = document.getElementById('balachao-achar-combo-btn');
    function updateBAComboUI() {
        const balachaoId = balachaoSelect.value;
        const acharId = acharSelect.value;
        const balachaoProduct = BALACHAO_PRODUCTS.find(p => p.id === balachaoId);
        const acharProduct = ACHAR_PRODUCTS.find(p => p.id === acharId);
        if (balachaoProduct) balachaoImg.src = balachaoProduct.image;
        if (acharProduct) acharImg.src = acharProduct.image;
        const totalPrice = (balachaoProduct?.price || 0) + (acharProduct?.price || 0);
        comboBtn.textContent = `কম্বো অর্ডার করুন (৳${totalPrice})`;
    }
    balachaoSelect.addEventListener('change', updateBAComboUI);
    acharSelect.addEventListener('change', updateBAComboUI);
    updateBAComboUI();
}

// =================================================================================
// SECTION 5: CART & ORDER LOGIC
// =================================================================================
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) {
      showToast("স্টক নেই", "এই পণ্যটি বর্তমানে স্টক আউট হয়ে গিয়েছে।", "warning");
      return;
    }
    const existing = CART.find(i => i.id === product.id);
    if (existing) {
        if(existing.quantity >= 20) {
            showToast("সীমা অতিক্রম করেছে", "আপনি একটি পণ্যের সর্বোচ্চ ২০টি ইউনিট যোগ করতে পারেন।", "warning");
            return;
        }
        if (existing.quantity >= product.stock) {
            showToast("স্টক সীমিত", `দুঃখিত, এই পণ্যের মাত্র ${product.stock}টি ইউনিট স্টকে আছে।`, "warning");
            return;
        }
        existing.quantity += 1;
    } else {
        CART.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    }
    saveCartToStorage();
    updateCartCount();
    showToast("কার্টে যোগ হয়েছে!", `${product.name} সফলভাবে কার্টে যোগ করা হয়েছে।`);
}

function orderNow(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showToast("স্টক নেই", "এই পণ্যটি কেনা সম্ভব নয় কারণ এটি স্টক আউট।", "destructive");
        return;
    }
    const itemForCheckout = [{ ...product, quantity: 1 }];
    localStorage.setItem('shobkichuCheckout', JSON.stringify(itemForCheckout));
    window.location.href = 'checkout.html';
}

function orderAcharCombo() {
    const achar1Id = document.getElementById('achar1').value;
    const achar2Id = document.getElementById('achar2').value;
    const p1 = ACHAR_PRODUCTS.find(p => p.id === achar1Id);
    const p2 = ACHAR_PRODUCTS.find(p => p.id === achar2Id);
    if (!p1 || !p2) {
        showToast("ত্রুটি", "অনুগ্রহ করে দুটি আচার নির্বাচন করুন।", "destructive");
        return;
    }
    const comboItem = { id: `combo_achar_${p1.id}_${p2.id}`, name: `আচার কম্বো (${p1.name_en} + ${p2.name_en})`, price: 900, quantity: 1, image: 'assets/achar_mixed.jpg', freeDelivery: true, isCombo: true };
    localStorage.setItem('shobkichuCheckout', JSON.stringify([comboItem]));
    window.location.href = 'checkout.html';
}

function orderBalachaoAcharCombo() {
    const balachaoId = document.getElementById('balachao-select').value;
    const acharId = document.getElementById('achar-select').value;
    const balachaoProduct = BALACHAO_PRODUCTS.find(p => p.id === balachaoId);
    const acharProduct = ACHAR_PRODUCTS.find(p => p.id === acharId);
    if (!balachaoProduct || !acharProduct) {
        showToast("ত্রুটি", "অনুগ্রহ করে একটি বালাচাও ও একটি আচার নির্বাচন করুন।", "destructive");
        return;
    }
    const totalPrice = balachaoProduct.price + acharProduct.price;
    const comboItem = { id: `combo_ba_${balachaoProduct.id}_${acharProduct.id}`, name: `বালাচাও-আচার কম্বো (${balachaoProduct.name_en} + ${acharProduct.name_en})`, price: totalPrice, quantity: 1, image: balachaoProduct.image, freeDelivery: true, isCombo: true };
    localStorage.setItem('shobkichuCheckout', JSON.stringify([comboItem]));
    window.location.href = 'checkout.html';
}

function goToCheckout() {
    if (CART.length === 0) {
        showToast("কার্ট খালি", "অর্ডার করার জন্য অনুগ্রহ করে পণ্য যোগ করুন।", "warning");
        return;
    }
    localStorage.setItem('shobkichuCheckout', JSON.stringify(CART));
    window.location.href = 'checkout.html';
}

// =================================================================================
// SECTION 6: SEARCH LOGIC (Original Simple Version)
// =================================================================================
function handleSearch(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const { 
        searchBar, mobileSearchBar, heroSection, productsSection, productGrid, 
        offerGrid, offersSection, faqSection, searchNoResultsEl, aboutPreview, partnersPreview, reviewsPreview, contactPreview
    } = DOM_REFERENCES;

    if (searchBar && mobileSearchBar) {
        if (event.target.id === 'search-bar') mobileSearchBar.value = event.target.value;
        else searchBar.value = event.target.value;
    }

    const isSearchActive = searchTerm !== '';

    // Hide/show main page sections
    if (heroSection) heroSection.style.display = isSearchActive ? 'none' : 'flex';
    if (faqSection) faqSection.style.display = isSearchActive ? 'none' : 'block';
    if (aboutPreview) aboutPreview.style.display = isSearchActive ? 'none' : 'block';
    if (partnersPreview) partnersPreview.style.display = isSearchActive ? 'none' : 'block';
    if (reviewsPreview) reviewsPreview.style.display = isSearchActive ? 'none' : 'block';
    if (contactPreview) contactPreview.style.display = isSearchActive ? 'none' : 'block';

    if (!isSearchActive) {
        if (offersSection) offersSection.style.display = 'block';
        if (productsSection) productsSection.style.display = 'block';
        if (searchNoResultsEl) searchNoResultsEl.classList.add('hidden');

        renderProducts(PRODUCTS.filter(p => p.freeDelivery), offerGrid);
        renderProducts(PRODUCTS, productGrid);
        return;
    }
    
    const filteredProducts = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.name_en.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length === 0) {
        if (offersSection) offersSection.style.display = 'none';
        if (productsSection) productsSection.style.display = 'none';
        if (searchNoResultsEl) searchNoResultsEl.classList.remove('hidden');
    } else {
        if (searchNoResultsEl) searchNoResultsEl.classList.add('hidden');

        const offerProducts = filteredProducts.filter(p => p.freeDelivery);
        
        if (offersSection) offersSection.style.display = offerProducts.length > 0 ? 'block' : 'none';
        if (productsSection) productsSection.style.display = 'block';

        renderProducts(offerProducts, offerGrid);
        renderProducts(filteredProducts, productGrid);
    }
}

// =================================================================================
// SECTION 7: PAGE INITIALIZERS
// =================================================================================
function initializeHomepage() {
    DOM_REFERENCES.productGrid = document.getElementById('product-grid');
    DOM_REFERENCES.offerGrid = document.getElementById('offer-grid');
    DOM_REFERENCES.reviewGrid = document.getElementById('review-grid-preview');
    DOM_REFERENCES.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    DOM_REFERENCES.mobileMenu = document.getElementById('mobile-menu');
    DOM_REFERENCES.searchBar = document.getElementById('search-bar');
    DOM_REFERENCES.mobileSearchBar = document.getElementById('mobile-search-bar');
    DOM_REFERENCES.desktopSearchIcon = document.getElementById('desktop-search-icon');
    DOM_REFERENCES.desktopSearchContainer = document.getElementById('desktop-search-container');
    DOM_REFERENCES.heroSection = document.getElementById('home');
    DOM_REFERENCES.productsSection = document.getElementById('products');
    DOM_REFERENCES.offersSection = document.getElementById('offers');
    DOM_REFERENCES.faqSection = document.getElementById('faq');
    DOM_REFERENCES.searchNoResultsEl = document.getElementById('search-no-results');
    DOM_REFERENCES.aboutPreview = document.getElementById('about-preview');
    DOM_REFERENCES.partnersPreview = document.getElementById('partners-preview');
    DOM_REFERENCES.reviewsPreview = document.getElementById('reviews-preview');
    DOM_REFERENCES.contactPreview = document.getElementById('contact-preview');

    renderProducts(PRODUCTS, DOM_REFERENCES.productGrid);
    renderProducts(PRODUCTS.filter(p => p.freeDelivery), DOM_REFERENCES.offerGrid);
    renderComboCreator();
    renderBalachaoAcharCombo();
    if(DOM_REFERENCES.reviewGrid) renderReviews(REVIEWS.slice(0, 3), DOM_REFERENCES.reviewGrid);
    
    DOM_REFERENCES.searchBar.addEventListener('input', handleSearch);
    DOM_REFERENCES.mobileSearchBar.addEventListener('input', handleSearch);
    DOM_REFERENCES.mobileMenuBtn.addEventListener('click', () => DOM_REFERENCES.mobileMenu.classList.toggle('hidden'));
    
    DOM_REFERENCES.desktopSearchIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        const { desktopSearchContainer, desktopSearchIcon, searchBar } = DOM_REFERENCES;
        desktopSearchContainer.classList.remove('scale-x-0', 'opacity-0');
        desktopSearchContainer.classList.add('scale-x-100', 'opacity-100');
        desktopSearchIcon.classList.add('opacity-0', 'pointer-events-none');
        searchBar.focus();
    });
    document.addEventListener('click', (event) => {
        const { desktopSearchContainer, desktopSearchIcon, searchBar } = DOM_REFERENCES;
        if (!desktopSearchContainer || !desktopSearchIcon || !searchBar) return;
        const isClickInsideSearch = desktopSearchContainer.contains(event.target);
        const isSearchIcon = desktopSearchIcon.contains(event.target);
        if (!isClickInsideSearch && !isSearchIcon && desktopSearchContainer.classList.contains('scale-x-100')) {
            if (searchBar.value.trim() === '') {
                desktopSearchContainer.classList.remove('scale-x-100', 'opacity-100');
                desktopSearchContainer.classList.add('scale-x-0', 'opacity-0');
                desktopSearchIcon.classList.remove('opacity-0', 'pointer-events-none');
            }
        }
    });
}

function initializeReviewPage() {
    const reviewGrid = document.getElementById('review-grid-full');
    const sortSelect = document.getElementById('review-sort');
    if (!reviewGrid || !sortSelect) return;
    function sortAndRenderReviews(sortBy) {
        let sortedReviews = [...REVIEWS];
        if (sortBy === 'highest_rating') sortedReviews.sort((a, b) => b.rating - a.rating);
        else if (sortBy === 'most_recent') sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        renderReviews(sortedReviews, reviewGrid);
    }
    sortSelect.addEventListener('change', (e) => sortAndRenderReviews(e.target.value));
    sortAndRenderReviews('most_recent');
}

function initializeProductPage() {
    const container = document.getElementById('product-details-container');
    if (!container) return;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        document.title = `${product.name} - সবকিছু.com`;
        const isOutOfStock = product.stock === 0;
        container.innerHTML = `
          <div class="animate-fade-in">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div class="relative overflow-hidden rounded-xl card-modern p-2">
                      <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover rounded-lg" />
                      ${isOutOfStock ? `<div class="absolute top-4 left-4 bg-gray-900 text-white font-bold text-lg px-4 py-2 rounded-md shadow-lg z-10">স্টক আউট</div>` : ''}
                  </div>
                  <div class="space-y-6">
                      <div>
                          <h1 class="text-3xl lg:text-4xl font-bold text-foreground mb-3">${product.name}</h1>
                          <div class="flex items-center gap-4 mb-4">
                              <span class="bg-gradient-secondary text-secondary-foreground font-bold text-2xl px-4 py-2 rounded-md">৳${product.price}</span>
                              <span class="text-lg text-muted-foreground line-through">৳${Math.round(product.price * 1.2)}</span>
                          </div>
                      </div>
                      <div> <h3 class="text-xl font-semibold text-foreground mb-2">বিবরণ</h3> <p class="text-muted-foreground leading-relaxed">${product.description}</p> </div>
                      <div>
                          <h3 class="text-xl font-semibold text-foreground mb-3">বৈশিষ্ট্যসমূহ</h3>
                          <div class="space-y-3">${product.features.map(f => `<div class="flex items-center gap-3"><div class="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="20 6 9 17 4 12"></polyline></svg></div><span class="text-foreground">${f}</span></div>`).join('')}</div>
                      </div>
                      <div class="flex flex-col sm:flex-row gap-4 pt-4">
                          <button class="btn-primary flex-1 text-lg py-3 rounded-md" onclick="orderNow('${product.id}')" ${isOutOfStock ? 'disabled' : ''}>${isOutOfStock ? 'স্টক আউট' : 'এখনই অর্ডার করুন'}</button>
                          <button class="btn-ghost flex-1 text-lg py-3 rounded-md flex items-center justify-center gap-2" onclick="addToCart('${product.id}')" ${isOutOfStock ? 'disabled' : ''}>🛒 কার্টে যোগ করুন</button>
                      </div>
                  </div>
              </div>
          </div>`;
    } else {
        container.innerHTML = `<div class="text-center py-20"><h2 class="text-2xl font-bold text-destructive">দুঃখিত!</h2><p class="text-muted-foreground mt-2">এই পণ্যটি খুঁজে পাওয়া যায়নি।</p><a href="index.html" class="btn-primary mt-6 inline-block px-6 py-2">হোম পেজে ফিরে যান</a></div>`;
    }
}

function initializeCheckoutPage() {
    const itemsJSON = localStorage.getItem('shobkichuCheckout');
    let items = itemsJSON ? JSON.parse(itemsJSON) : [];
    const container = document.getElementById('checkout-container');
    if (!container) return;
    if (items.length === 0) {
        container.innerHTML = `<div class="text-center py-20 card-modern"><h2 class="text-2xl font-bold">আপনার কার্ট খালি</h2><p class="text-muted-foreground mt-2">অর্ডার করার জন্য কোনো পণ্য নির্বাচন করা হয়নি।</p><a href="index.html" class="btn-primary mt-6 inline-block px-6 py-2">কেনাকাটা শুরু করুন</a></div>`;
        return;
    }
    const orderSummaryEl = document.getElementById('order-summary');
    const checkoutForm = document.getElementById('checkout-form');
    const divisionSelect = checkoutForm.division;
    divisionSelect.innerHTML = '<option value="" disabled selected>বিভাগ নির্বাচন করুন</option>';
    for (const division in DIVISIONS_AND_DISTRICTS) {
        divisionSelect.innerHTML += `<option value="${division}">${division}</option>`;
    }

    window.removeFromCart = function(productId) {
        items = items.filter(i => i.id !== productId);
        CART = CART.filter(item => item.id !== productId);
        saveCartToStorage();
        localStorage.setItem('shobkichuCheckout', JSON.stringify(items));
        renderSummary();
        updateCartCount();
        if (items.length === 0) {
            container.innerHTML = `<div class="text-center py-20 card-modern"><h2 class="text-2xl font-bold">আপনার কার্ট খালি</h2><p class="text-muted-foreground mt-2">অর্ডার করার জন্য কোনো পণ্য নির্বাচন করা হয়নি।</p><a href="index.html" class="btn-primary mt-6 inline-block px-6 py-2">কেনাকাটা শুরু করুন</a></div>`;
        }
    }
    window.increaseQuantity = function(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        let item = items.find(i => i.id === productId);
        if (item && product) {
            if (item.quantity >= product.stock) {
                showToast("স্টক সীমিত", `দুঃখিত, এই পণ্যের মাত্র ${product.stock}টি ইউনিট স্টকে আছে।`, "warning");
                return;
            }
            if (item.quantity >= 20) {
                showToast("সীমা অতিক্রম করেছে", "আপনি একটি পণ্যের সর্বোচ্চ ২০টি ইউনিট যোগ করতে পারেন।", "warning");
                return;
            }
            item.quantity++;
            let cartItem = CART.find(i => i.id === productId);
            if(cartItem) cartItem.quantity = item.quantity;
            saveCartToStorage();
            localStorage.setItem('shobkichuCheckout', JSON.stringify(items));
            renderSummary();
            updateCartCount();
        }
    }
    window.decreaseQuantity = function(productId) {
        let item = items.find(i => i.id === productId);
        if (item) {
            item.quantity--;
            if (item.quantity < 1) {
                removeFromCart(productId);
            } else {
                let cartItem = CART.find(i => i.id === productId);
                if(cartItem) cartItem.quantity = item.quantity;
                saveCartToStorage();
                localStorage.setItem('shobkichuCheckout', JSON.stringify(items));
                renderSummary();
                updateCartCount();
            }
        }
    }

    function renderSummary() {
        if (!orderSummaryEl) return;
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isFreeDeliveryApplicable = items.every(item => item.freeDelivery);
        const selectedDistrict = checkoutForm.district.value;
        let deliveryCharge = 0;
        if (!isFreeDeliveryApplicable) {
            deliveryCharge = SHIPPING_CHARGES[selectedDistrict] || (selectedDistrict ? SHIPPING_CHARGES["অন্যান্য"] : 0);
        }
        const total = subtotal + deliveryCharge;
        orderSummaryEl.innerHTML = `
            <h3 class="text-2xl font-bold text-gradient mb-6">অর্ডার সারাংশ</h3>
            <div class="space-y-4 mb-6">
                ${items.map(item => `
                    <div class="flex items-center gap-4">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-md object-cover border border-border">
                        <div class="flex-1">
                            <h4 class="font-semibold text-foreground">${item.name}</h4>
                            <div class="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <span>পরিমাণ:</span>
                                <div class="flex items-center border rounded-md">
                                    <button type="button" onclick="decreaseQuantity('${item.id}')" class="w-7 h-7 flex items-center justify-center hover:bg-accent transition-colors rounded-l-md">-</button>
                                    <span class="w-8 text-center">${item.quantity}</span>
                                    <button type="button" onclick="increaseQuantity('${item.id}')" class="w-7 h-7 flex items-center justify-center hover:bg-accent transition-colors rounded-r-md">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="font-semibold text-foreground">৳${item.price * item.quantity}</span>
                            <button onclick="removeFromCart('${item.id}')" class="text-xs text-destructive hover:underline ml-2 mt-1 block">মুছুন</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="space-y-3 pt-4 border-t border-border">
                <div class="flex justify-between text-muted-foreground"><span>সাব-টোটাল</span><span class="font-medium">৳${subtotal}</span></div>
                <div class="flex justify-between text-muted-foreground"><span>ডেলিভারি চার্জ</span><span class="font-medium">${deliveryCharge === 0 ? (isFreeDeliveryApplicable ? 'ফ্রি' : 'জেলা নির্বাচন করুন') : `৳${deliveryCharge}`}</span></div>
                <div class="flex justify-between font-bold text-lg text-foreground pt-2 border-t border-border"><span>মোট</span><span>৳${total}</span></div>
            </div>`;
    }
    checkoutForm.addEventListener('change', e => {
        if (e.target.name === 'division' || e.target.name === 'district') {
            const division = checkoutForm.division.value;
            const districtSelect = checkoutForm.district;
            const thanaSelect = checkoutForm.thana;
            if (e.target.name === 'division') {
                districtSelect.innerHTML = '<option value="" disabled selected>জেলা নির্বাচন করুন</option>';
                thanaSelect.innerHTML = '<option value="" disabled selected>আগে জেলা নির্বাচন করুন</option>';
                thanaSelect.disabled = true;
                if (division) {
                    DIVISIONS_AND_DISTRICTS[division].forEach(d => districtSelect.innerHTML += `<option value="${d}">${d}</option>`);
                    districtSelect.disabled = false;
                }
            } else {
                const district = districtSelect.value;
                thanaSelect.innerHTML = '<option value="" disabled selected>থানা/উপজেলা নির্বাচন করুন</option>';
                if (district && DISTRICTS_AND_THANAS[district]) {
                    DISTRICTS_AND_THANAS[district].forEach(t => thanaSelect.innerHTML += `<option value="${t}">${t}</option>`);
                    thanaSelect.disabled = false;
                }
            }
            renderSummary();
        }
    });
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = checkoutForm.querySelector('button[type="submit"]');
        if (!checkoutForm.checkValidity()) {
            showToast("ত্রুটি", "দয়া করে ফর্মের সমস্ত তথ্য সঠিকভাবে পূরণ করুন।", "destructive");
            checkoutForm.reportValidity();
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'প্রসেসিং...';
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const isFreeDeliveryApplicable = items.every(item => item.freeDelivery);
        let deliveryCharge = 0;
        if (!isFreeDeliveryApplicable) {
            const selectedDistrict = checkoutForm.district.value;
            deliveryCharge = SHIPPING_CHARGES[selectedDistrict] || SHIPPING_CHARGES["অন্যান্য"];
        }
        const total = subtotal + deliveryCharge;
        const fullAddress = `${checkoutForm.address.value}, থানা: ${checkoutForm.thana.value}, জেলা: ${checkoutForm.district.value}, বিভাগ: ${checkoutForm.division.value}`;
        const orderDetailsForConfirmation = { customerName: checkoutForm.customerName.value, phoneNumber: checkoutForm.phoneNumber.value, fullAddress, items, subtotal, deliveryCharge, total };
        const success = await submitToGoogleSheet({ customerName: checkoutForm.customerName.value, phoneNumber: checkoutForm.phoneNumber.value, address: fullAddress, deliveryLocation: checkoutForm.district.value, items: items.map(item => `${item.name} (x${item.quantity})`).join(', '), totalAmount: total });
        if (success) {
            localStorage.setItem('shobkichuOrderConfirmation', JSON.stringify(orderDetailsForConfirmation));
            if (JSON.stringify(CART) === JSON.stringify(items)) {
                CART = [];
                saveCartToStorage();
            }
            localStorage.removeItem('shobkichuCheckout');
            window.location.href = 'thankyou.html';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'অর্ডার কনফার্ম করুন';
        }
    });
    renderSummary();
}

function initializeThankYouPage() {
    const container = document.getElementById('order-summary-details');
    const heading = document.getElementById('thank-you-heading');
    const subheading = document.getElementById('thank-you-subheading');
    if (!container || !heading || !subheading) return;
    const orderDetailsJSON = localStorage.getItem('shobkichuOrderConfirmation');
    if (orderDetailsJSON) {
        const details = JSON.parse(orderDetailsJSON);
        heading.innerHTML = `ধন্যবাদ <span class="text-gradient">${details.customerName}</span>!`;
        subheading.textContent = 'আপনার অর্ডারটি সফলভাবে নিশ্চিত করা হয়েছে। নিচে আপনার অর্ডারের বিবরণ দেওয়া হলো:';
        container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div class="space-y-3">
                    <h4 class="font-semibold text-foreground border-b border-border pb-2">আপনার বিলিং তথ্য</h4>
                    <p class="text-muted-foreground"><strong>নাম:</strong> ${details.customerName}</p>
                    <p class="text-muted-foreground"><strong>ফোন:</strong> ${details.phoneNumber}</p>
                    <p class="text-muted-foreground"><strong>ঠিকানা:</strong> ${details.fullAddress}</p>
                </div>
                 <div class="space-y-3">
                    <h4 class="font-semibold text-foreground border-b border-border pb-2">অর্ডার বিবরণ</h4>
                    <div class="space-y-2">
                        ${details.items.map(item => `
                            <div class="flex justify-between items-center text-muted-foreground">
                                <span>${item.name} (x${item.quantity})</span>
                                <span>৳${item.price * item.quantity}</span>
                            </div>
                        `).join('')}
                    </div>
                    <hr class="border-border !my-4">
                    <div class="space-y-2 pt-2 font-medium">
                         <div class="flex justify-between text-muted-foreground"><span>সাব-টোটাল:</span><span>৳${details.subtotal}</span></div>
                         <div class="flex justify-between text-muted-foreground"><span>ডেলিভারি চার্জ:</span><span>৳${details.deliveryCharge}</span></div>
                         <div class="flex justify-between font-bold text-lg text-foreground"><span>সর্বমোট:</span><span>৳${details.total}</span></div>
                    </div>
                </div>
            </div>
        `;
        localStorage.removeItem('shobkichuOrderConfirmation');
    } else {
        heading.textContent = 'ধন্যবাদ!';
        subheading.textContent = 'আপনার অর্ডারটি সফলভাবে নিশ্চিত করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।';
        container.style.display = 'none';
    }
}

// =================================================================================
// SECTION 8: MAIN APP INITIALIZATION
// =================================================================================
async function loadDataAndInitialize() {
    try {
        const [productsRes, reviewsRes, locationsRes] = await Promise.all([
            fetch('./data/products.json'),
            fetch('./data/reviews.json'),
            fetch('./data/locations.json')
        ]);
        
        PRODUCTS = await productsRes.json();
        REVIEWS = await reviewsRes.json();
        const locations = await locationsRes.json();
        DIVISIONS_AND_DISTRICTS = locations.divisions;
        DISTRICTS_AND_THANAS = locations.districts;

        ACHAR_PRODUCTS = PRODUCTS.filter(p => p.id.startsWith("achar_"));
        BALACHAO_PRODUCTS = PRODUCTS.filter(p => p.id.startsWith("balachao_"));

        // Initialize functionalities that don't depend on page content
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (themeToggleBtn) {
            const preferredTheme = localStorage.getItem('shobkichuTheme');
            if (preferredTheme === 'dark') document.documentElement.classList.add('dark');
            updateTheme();
            themeToggleBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                updateTheme();
            });
        }
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            loadCartFromStorage();
            updateCartCount();
            cartBtn.addEventListener('click', goToCheckout);
        }

        // Page-specific initializers
        if (document.getElementById('product-grid')) initializeHomepage();
        if (document.getElementById('product-details-container')) initializeProductPage();
        if (document.getElementById('review-grid-full')) initializeReviewPage();
        if (document.getElementById('checkout-container')) initializeCheckoutPage();
        if (document.getElementById('thank-you-page-body')) initializeThankYouPage();

    } catch (error) {
        console.error("Failed to load essential data:", error);
        document.body.innerHTML = `<div style="text-align: center; padding-top: 50px;"><h1>Something went wrong!</h1><p>Could not load website data. Please try again later.</p></div>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    DOM_REFERENCES = {
        toastEl: document.getElementById('toast'),
        toastTitleEl: document.getElementById('toast-title'),
        toastDescriptionEl: document.getElementById('toast-description'),
        cartBtn: document.getElementById('cart-btn'),
        cartItemCountEl: document.getElementById('cart-item-count'),
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        themeIconSun: document.getElementById('theme-icon-sun'),
        themeIconMoon: document.getElementById('theme-icon-moon'),
    };
    
    // Moved data loading here
    loadDataAndInitialize();
});