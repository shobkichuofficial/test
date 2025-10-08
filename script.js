// --- Global State ---
let ALL_PRODUCTS = [];
let ALL_REVIEWS = [];
let CART = [];
let DOM_REFERENCES = {};

// --- Shipping Charges & Other Constants ---
const SHIPPING_CHARGES = {
  "ঢাকা": 70,
  "চট্টগ্রাম": 130,
  "অন্যান্য": 130,
};
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzQCjKrtEMu4jj5ppWnnuMpJrOSIkKDVakGgwOeQUfyWWq0lsns14kLd0gMcd0HDS91/exec";

// --- Location Data (Remains static) ---
const DIVISIONS_AND_DISTRICTS = { "ঢাকা": ["ঢাকা", "গাজীপুর", "কিশোরগঞ্জ", "মানিকগঞ্জ", "মুন্সিগঞ্জ", "নারায়ণগঞ্জ", "নরসিংদী", "টাঙ্গাইল", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর"], "চট্টগ্রাম": ["বান্দরবান", "ব্রাহ্মণবাড়িয়া", "চাঁদপুর", "চট্টগ্রাম", "কুমিল্লা", "কক্সবাজার", "ফেনী", "খাগড়াছড়ি", "লক্ষ্মীপুর", "নোয়াখালী", "রাঙ্গামাটি"], "খুলনা": ["বাগেরহাট", "চুয়াডাঙ্গা", "যশোর", "ঝিনাইদহ", "খুলনা", "কুষ্টিয়া", "মাগুরা", "মেহেরপুর", "নড়াইল", "সাতক্ষীরা"], "রাজশাহী": ["বগুড়া", "চাঁপাইনবাবগঞ্জ", "জয়পুরহাট", "নওগাঁ", "নাটোর", "পাবনা", "রাজশাহী", "সিরাজগঞ্জ"], "বরিশাল": ["বরগুনা", "বরিশাল", "ভোলা", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর"], "সিলেট": ["হবিগঞ্জ", "মৌলভীবাজার", "সুনামগঞ্জ", "সিলেট"], "রংপুর": ["দিনাজপুর", "গাইবান্ধা", "কুড়িগ্রাম", "লালমনিরহাট", "নীলফামারী", "পঞ্চগড়", "রংপুর", "ঠাকুরগাঁও"], "ময়মনসিংহ": ["জামালপুর", "ময়মনসিংহ", "নেত্রকোনা", "শেরপুর"] };
const DISTRICTS_AND_THANAS = { "ঢাকা": ["রমনা", "মতিঝিল", "কোতোয়ালী", "সূত্রাপুর", "ধানমন্ডি", "মোহাম্মদপুর", "তেজগাঁও", "গুলশান", "লালবাগ", "মিরপুর", "পল্লবী", "সবুজবাগ", "ক্যান্টনমেন্ট", "ডেমরা", "হাজারীবাগ", "শ্যামপুর", "বাড্ডা", "কামরাঙ্গীরচর", "খিলগাঁও", "উত্তরা"], "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"], "কিশোরগঞ্জ": ["কিশোরগঞ্জ সদর", "অষ্টগ্রাম", "বাজিতপুর", "ভৈরব", "হোসেনপুর", "ইটনা", "করিমগঞ্জ", "কটিয়াদী", "কুলিয়ারচর", "মিঠামইন", "নিকলী", "পাকুন্দিয়া", "তাড়াইল"], "মানিকগঞ্জ": ["মানিকগঞ্জ সদর", "দৌলতপুর", "ঘিওর", "হরিরামপুর", "সাটুরিয়া", "শিবালয়", "সিঙ্গাইর"], "মুন্সিগঞ্জ": ["মুন্সিগঞ্জ সদর", "গজারিয়া", "লৌহজং", "সিরাজদিখান", "শ্রীনগর", "টঙ্গিবাড়ী"], "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "আড়াইহাজার", "বন্দর", "রূপগঞ্জ", "সিদ্ধিরগঞ্জ", "সোনারগাঁও"], "নরসিংদী": ["নরসিংদী সদর", "বেলাবো", "মনোহরদী", "পলাশ", "রায়পুরা", "শিবপুর"], "টাঙ্গাইল": ["টাঙ্গাইল সদর", "বাসাইল", "ভুঞাপুর", "দেলদুয়ার", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "ধনবাড়ী"], "ফরিদপুর": ["ফরিদপুর সদর", "আলফাডাঙ্গা", "ভাঙ্গা", "বোয়ালমারী", "চরভদ্রাসন", "মধুখালী", "নগরকান্দা", "সদরপুর", "সালথা"], "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "কোটালীপাড়া", "মুকসুদপুর", "টুঙ্গিপাড়া"], "মাদারীপুর": ["মাদারীপুর সদর", "কালকিনি", "রাজৈর", "শিবচর"], "রাজবাড়ী": ["রাজবাড়ী সদর", "বালিয়াকান্দি", "গোয়ালন্দ", "পাংশা", "কালুখালী"], "শরীয়তপুর": ["শরীয়তপুর সদর", "ভেদরগঞ্জ", "ডামুড্যা", "গোসাইরহাট", "নড়িয়া", "জাজিরা"], "বান্দরবান": ["বান্দরবান সদর", "আলীকদম", "লামা", "নাইক্ষ্যংছড়ি", "রোয়াংছড়ি", "রুমা", "থানচি"], "ব্রাহ্মণবাড়িয়া": ["ব্রাহ্মণবাড়িয়া সদর", "আখাউড়া", "আশুগঞ্জ", "বাঞ্ছারামপুর", "কসবা", "নবীনগর", "নাসিরনগর", "সরাইল", "বিজয়নগর"], "চাঁদপুর": ["চাঁদপুর সদর", "ফরিদগঞ্জ", "হাইমচর", "হাজীগঞ্জ", "কচুয়া", "মতলব উত্তর", "মতলব দক্ষিণ", "শাহরাস্তি"], "চট্টগ্রাম": ["আনোয়ারা", "বাঁশখালী", "বোয়ালখালী", "চন্দনাইש", "ফটিকছড়ি", "হাটহাজারী", "কর্ণফুলী", "লোহাগড়া", "মীরসরাই", "পটিয়া", "রাঙ্গুনিয়া", "রাউজান", "সন্দ্বীপ", "সাতকানিয়া", "সীতাকুণ্ড"], "কুমিল্লা": ["কুমিল্লা সদর", "বরুড়া", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "চৌদ্দগ্রাম", "দাউদকান্দি", "দেবীদ্বার", "হোমনা", "লাকসাম", "মনোহরগঞ্জ", "মেঘনা", "মুরাদনগর", "নাঙ্গলকোট", "তিতাস"], "কক্সবাজার": ["কক্সবাজার সদর", "চকরিয়া", "কুতুবদিয়া", "মহেশখালী", "পেকুয়া", "রামু", "টেকনাফ", "উখিয়া"], "ফেনী": ["ফেনী সদর", "ছাগলনাইয়া", "দাগনভূঞা", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"], "খাগড়াছড়ি": ["খাগড়াছড়ি সদর", "দীঘিনালা", "লক্ষ্মীছড়ি", "মহালছড়ি", "মানিকছড়ি", "মাটিরাঙ্গা", "পানছড়ি", "রামগড়"], "লক্ষ্মীপুর": ["লক্ষ্মীপুর সদর", "কমলনগর", "রায়পুর", "রামগঞ্জ", "রামগতি"], "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সেনবাগ", "সুবর্ণচর", "কবিরহাট"], "রাঙ্গামাটি": ["রাঙ্গামাটি সদর", "বাঘাইছড়ি", "বরকল", "কাপ্তাই", "জুরাছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "বিলাইছড়ি", "কাউনখালী"], "বাগেরহাট": ["বাগেরহাট সদর", "চিতলমারী", "ফকিরহাট", "কচুয়া", "মোল্লাহাট", "মোংলা", "মোরেলগঞ্জ", "রামপাল", "শরণখোলা"], "চুয়াডাঙ্গা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা", "জীবননগর"], "যশোর": ["যশোর সদর", "অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "মণিরামপুর", "শার্শা"], "ঝিনাইদহ": ["ঝিনাইদহ সদর", "হরিণাকুণ্ডু", "কালীগঞ্জ", "কোটচাঁদপুর", "মহেশপুর", "শৈলকুপা"], "খুলনা": ["ডুমুরিয়া", "বটিয়াঘাটা", "দাকোপ", "দিঘলিয়া", "কয়রা", "পাইকগাছা", "ফুলতলা", "রূপসা", "তেরখাদা"], "কুষ্টিয়া": ["কুষ্টিয়া সদর", "ভেড়ামারা", "দৌলতপুর", "কুমারখালী", "খোকসা", "মিরপুর"], "মাগুরা": ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"], "মেহেরপুর": ["মেহেরপুর সদর", "গাংনী", "মুজিবনগর"], "নড়াইল": ["নড়াইল সদর", "কালিয়া", "লোহাগড়া"], "সাতক্ষীরা": ["সাতক্ষীরা সদর", "কলারোয়া", "আশাশুনি", "দেবহাটা", "কালিগঞ্জ", "শ্যামনগর", "তালা"], "বগুড়া": ["বগুড়া সদর", "আদমদীঘি", "ধুনট", "দুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সারিয়াকান্দি", "שাজাহানপুর", "শেরপুর", "শিবগঞ্জ", "সোনাতলা"], "চাঁপাইনবাবগঞ্জ": ["চাঁপাইনবাবগঞ্জ সদর", "গোমস্তাপুর", "নাচোল", "ভোলাহাট", "শিবগঞ্জ"], "জয়পুরহাট": ["জয়পুরহাট সদর", "আক্কেলপুর", "কালাই", "ক্ষেতলাল", "পাঁচবিবি"], "নওগাঁ": ["নওগাঁ সদর", "আত্রাই", "বদলগাছী", "ধামইরহাট", "মান্দা", "মহাদেবপুর", "নিয়ামতপুর", "পত্নীতলা", "পোরশা", "রানীনগর", "সাপাহার"], "নাটোর": ["নাটোর সদর", "বাগাতিপাড়া", "বড়াইগ্রাম", "গুরুদাসপুর", "লালপুর", "সিংড়া", "নলডাঙ্গা"], "পাবনা": ["পাবনা সদর", "ঈশ্বরদী", "আটঘরিয়া", "বেড়া", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "সাঁথিয়া", "সুজানগর"], "রাজশাহী": ["বাঘা", "বাগমারা", "চারঘাট", "দুর্গাপুর", "গোদাগাড়ী", "মোহনপুর", "পবা", "পুঠিয়া", "তানোর"], "সিরাজগঞ্জ": ["সিরাজগঞ্জ সদর", "বেলকুচি", "চৌহালী", "কামারখন্দ", "কাজীপুর", "রায়গঞ্জ", "শাহজাদপুর", "তাড়াশ", "উল্লাপাড়া"], "বরগুনা": ["বরগুনা সদর", "আমতলী", "বামনা", "বেতাগী", "পাথরঘাটা", "তালতলী"], "বরিশাল": ["বরিশাল সদর", "আগৈলঝাড়া", "বাবুগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "মেহেন্দিগঞ্জ", "মুলাদী", "উজিরপুর", "বাকেরগঞ্জ"], "ভোলা": ["ভোলা সদর", "বোরহানউদ্দিন", "চরফ্যাশন", "দৌলতখান", "লালমোহন", "মনপুরা", "তজুমদ্দিন"], "ঝালকাঠি": ["ঝালকাঠি সদর", "কাঁঠালিয়া", "নলছিটি", "রাজাপুর"], "পটুয়াখালী": ["পটুয়াখালী সদর", "বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "দুমকি", "রাঙ্গাবালী"], "পিরোজপুর": ["পিরোজপুর সদর", "ভান্ডারিয়া", "কাউখালী", "মঠবাড়িয়া", "নাজিরপুর", "নেসারেবাদ (স্বরূপকাঠি)", "ইন্দুরকানী"], "সিলেট": ["সিলেট সদর", "বালাগঞ্জ", "বিয়ানীবাজার", "কোম্পানীগঞ্জ", "ফেঞ্চুগঞ্জ", "গোলাপগঞ্জ", "গোয়াইনঘাট", "জৈন্তাপুর", "কানাইঘাট", "দক্ষিণ সুরমা", "জকিগঞ্জ", "ওসমানী নগর"], "হবিগঞ্জ": ["হবিগঞ্জ সদর", "আজমিরীগঞ্জ", "বানিয়াচং", "বাহুবল", "চুনারুঘাট", "লাখাই", "মাধবপুর", "নবীগঞ্জ"], "মৌলভীবাজার": ["মৌলভীবাজার সদর", "বড়লেখা", "জুড়ী", "কমলগঞ্জ", "কুলাউড়া", "রাজনগর", "শ্রীমঙ্গল"], "সুনামগঞ্জ": ["সুনামগঞ্জ সদর", "বিশ্বম্ভরপুর", "ছাতক", "দিরাই", "ধর্মপাশা", "দোয়ারাবাজার", "জগন্নাথপুর", "জামালগঞ্জ", "শাল্লা", "তাহিরপুর", "দক্ষিণ সুনামগঞ্জ"], "দিনাজপুর": ["দিনাজপুর সদর", "বিরামপুর", "বীরগঞ্জ", "বিরল", "বোচাগঞ্জ", "চিরিরবন্দর", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "নবাবগঞ্জ", "পার্বতীপুর"], "গাইবান্ধা": ["গাইবান্ধা সদর", "ফুলছড়ি", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সাঘাটা", "সুন্দরগঞ্জ"], "কুড়িগ্রাম": ["কুড়িগ্রাম সদর", "ভূরুঙ্গামারী", "চর রাজিবপুর", "চিলমারী", "ফুলবাড়ী", "নাগেশ্বরী", "রাজারহাট", "রৌমারী", "উলিপুর"], "লালমনিরহাট": ["লালমনিরহাট সদর", "আদিতমারী", "হাতীবান্ধা", "কালীগঞ্জ", "পাটগ্রাম"], "নীলফামারী": ["নীলফামারী সদর", "ডোমার", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ", "সৈয়দপুর"], "পঞ্চগড়": ["পঞ্চগড় সদর", "আটোয়ারী", "বোদা", "দেবীগঞ্জ", "তেঁতুলিয়া"], "রংপুর": ["রংপুর সদর", "বদরগঞ্জ", "গঙ্গাচড়া", "কাউনিয়া", "মিঠাপুকুর", "পীরগাছা", "পীরগঞ্জ", "তারাগঞ্জ"], "ঠাকুরগাঁও": ["ঠাকুরগাঁও সদর", "বালিয়াডাঙ্গী", "হরিপুর", "পীরগঞ্জ", "রানীশংকৈল"], "জামালপুর": ["জামালপুর সদর", "বকশীগঞ্জ", "দেওয়ানগঞ্জ", "ইসলামপুর", "মাদারগঞ্জ", "মেলান্দহ", "সরিষাবাড়ী"], "ময়মনসিংহ": ["ময়মনসিংহ সদর", "ভালুকা", "ধোবাউড়া", "ফুলবাড়ীয়া", "গফরগাঁও", "গৌরীপুর", "হালুয়াঘাট", "ঈশ্বরগঞ্জ", "মুক্তাগাছা", "নান্দাইল", "ফুলপুর", "তারাকান্দা", "ত্রিশাল"], "নেত্রকোনা": ["নেত্রকোনা সদর", "বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া", "কলমাকান্দা", "মদন", "মোহনগঞ্জ", "পূর্বধলা", "খালিয়াজুরী", "আটপাড়া"], "শেরপুর": ["শেরপুর সদর", "ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শ্রীবরদী"] };

// --- App State & Local Storage ---
function saveCartToStorage() {
  localStorage.setItem('shobkichuCart', JSON.stringify(CART));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem('shobkichuCart');
  CART = storedCart ? JSON.parse(storedCart) : [];
}

// --- Utility Functions ---
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

async function submitToGoogleSheet(formData) {
    const data = new FormData();
    data.append('customerName', formData.customerName);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('address', formData.address);
    data.append('deliveryLocation', formData.deliveryLocation);
    data.append('items', formData.items);
    data.append('totalAmount', formData.totalAmount);
    
    try {
        const response = await fetch(SPREADSHEET_URL, {
            method: 'POST',
            body: data,
        });
        if (response.ok) {
            return true;
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Error submitting to Google Sheet:', error);
        showToast("ত্রুটি", "অর্ডার পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।", "destructive");
        return false;
    }
}

// --- RENDER FUNCTIONS ---
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
        <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
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
        <button class="btn-primary flex-1 py-3 px-4 rounded-md text-base js-order-now" data-product-id="${p.id}" ${isOutOfStock ? 'disabled' : ''}>${isOutOfStock ? 'স্টক আউট' : 'অর্ডার করুন'}</button>
        <button class="btn-ghost py-3 px-4 rounded-md text-base flex items-center justify-center gap-1 js-add-to-cart" data-product-id="${p.id}" ${isOutOfStock ? 'disabled' : ''}>🛒</button>
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
    if (!container) return;
    const ACHAR_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("achar_"));
    const optionsHTML = ACHAR_PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');

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
                    <select id="achar1" class="w-full p-2 border rounded-md bg-input">${optionsHTML}</select>
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

    function updateAcharComboUI() {
        const selectedAchar1Id = achar1Select.value;
        const filteredOptions = ACHAR_PRODUCTS.filter(p => p.id !== selectedAchar1Id);
        achar2Select.innerHTML = filteredOptions.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
        
        const selectedAchar2Id = achar2Select.value;
        const product1 = ACHAR_PRODUCTS.find(p => p.id === selectedAchar1Id);
        const product2 = ACHAR_PRODUCTS.find(p => p.id === selectedAchar2Id);
        
        if (product1) achar1Img.src = product1.image;
        if (product2) achar2Img.src = product2.image;
    }

    achar1Select.addEventListener('change', updateAcharComboUI);
    achar2Select.addEventListener('change', updateAcharComboUI);
    updateAcharComboUI();
}

function renderBalachaoAcharCombo() {
    const container = document.getElementById('balachao-achar-combo-creator');
    if (!container) return;

    const BALACHAO_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("balachao_"));
    const ACHAR_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("achar_"));

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

// --- Cart & Order Logic ---
function addToCart(productId) {
    const product = ALL_PRODUCTS.find(p => p.id === productId);
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
    const product = ALL_PRODUCTS.find(p => p.id === productId);
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
    const ACHAR_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("achar_"));
    const p1 = ACHAR_PRODUCTS.find(p => p.id === achar1Id);
    const p2 = ACHAR_PRODUCTS.find(p => p.id === achar2Id);
    if (!p1 || !p2) {
        showToast("ত্রুটি", "অনুগ্রহ করে দুটি আচার নির্বাচন করুন।", "destructive");
        return;
    }
    const comboItem = {
        id: `combo_achar_${p1.id}_${p2.id}`,
        name: `আচার কম্বো (${p1.name_en} + ${p2.name_en})`,
        price: 900,
        quantity: 1,
        image: 'assets/achar_mixed.jpg',
        freeDelivery: true,
        isCombo: true
    };
    localStorage.setItem('shobkichuCheckout', JSON.stringify([comboItem]));
    window.location.href = 'checkout.html';
}

function orderBalachaoAcharCombo() {
    const balachaoId = document.getElementById('balachao-select').value;
    const acharId = document.getElementById('achar-select').value;
    const BALACHAO_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("balachao_"));
    const ACHAR_PRODUCTS = ALL_PRODUCTS.filter(p => p.id.startsWith("achar_"));
    const balachaoProduct = BALACHAO_PRODUCTS.find(p => p.id === balachaoId);
    const acharProduct = ACHAR_PRODUCTS.find(p => p.id === acharId);
    if (!balachaoProduct || !acharProduct) {
        showToast("ত্রুটি", "অনুগ্রহ করে একটি বালাচাও ও একটি আচার নির্বাচন করুন।", "destructive");
        return;
    }
    const totalPrice = balachaoProduct.price + acharProduct.price;
    const comboItem = {
        id: `combo_ba_${balachaoProduct.id}_${acharProduct.id}`,
        name: `বালাচাও-আচার কম্বো (${balachaoProduct.name_en} + ${acharProduct.name_en})`,
        price: totalPrice,
        quantity: 1,
        image: balachaoProduct.image,
        freeDelivery: true,
        isCombo: true
    };
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

// --- Search Logic ---
function handleSearch(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const { 
        searchBar, mobileSearchBar, heroSection, productsSection, productGrid, 
        offerGrid, offersSection, faqSection, searchNoResultsEl
    } = DOM_REFERENCES;
    
    if (searchBar && mobileSearchBar) {
        if (event.target.id === 'search-bar') mobileSearchBar.value = event.target.value;
        else searchBar.value = event.target.value;
    }

    const isSearchActive = searchTerm !== '';
    if (heroSection) heroSection.style.display = isSearchActive ? 'none' : 'flex';
    if (faqSection) faqSection.style.display = isSearchActive ? 'none' : 'block';
    
    if (!isSearchActive) {
        if (offersSection) offersSection.style.display = 'block';
        if (productsSection) productsSection.style.display = 'block';
        if (searchNoResultsEl) searchNoResultsEl.classList.add('hidden');
        renderProducts(ALL_PRODUCTS.filter(p => p.freeDelivery), offerGrid);
        renderProducts(ALL_PRODUCTS, productGrid);
        return;
    }
    
    const filteredProducts = ALL_PRODUCTS.filter(p => 
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
        if (productsSection) productsSection.style.display = filteredProducts.length > 0 ? 'block' : 'none';
        renderProducts(offerProducts, offerGrid);
        renderProducts(filteredProducts, productGrid);
    }
}

// --- THEME & UI LOGIC ---
function updateTheme() {
    if (!DOM_REFERENCES.themeIconSun || !DOM_REFERENCES.themeIconMoon) return;
    const isDark = document.documentElement.classList.contains('dark');
    DOM_REFERENCES.themeIconSun.classList.toggle('hidden', !isDark);
    DOM_REFERENCES.themeIconMoon.classList.toggle('hidden', isDark);
    localStorage.setItem('shobkichuTheme', isDark ? 'dark' : 'light');
}

// --- Page Initializers ---
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
    
    renderProducts(ALL_PRODUCTS, DOM_REFERENCES.productGrid);
    renderProducts(ALL_PRODUCTS.filter(p => p.freeDelivery), DOM_REFERENCES.offerGrid);
    renderComboCreator();
    renderBalachaoAcharCombo();
    if(DOM_REFERENCES.reviewGrid) renderReviews(ALL_REVIEWS.slice(0, 3), DOM_REFERENCES.reviewGrid);
    
    // Event Delegation for Product Cards
    function handleProductGridClick(event) {
        const orderBtn = event.target.closest('.js-order-now');
        if (orderBtn) {
            orderNow(orderBtn.dataset.productId);
            return;
        }
        const cartBtn = event.target.closest('.js-add-to-cart');
        if (cartBtn) {
            addToCart(cartBtn.dataset.productId);
        }
    }
    DOM_REFERENCES.offerGrid.addEventListener('click', handleProductGridClick);
    DOM_REFERENCES.productGrid.addEventListener('click', handleProductGridClick);

    // Search and Menu Listeners
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
        let sortedReviews = [...ALL_REVIEWS];
        if (sortBy === 'highest_rating') {
            sortedReviews.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'most_recent') {
            sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
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
    const product = ALL_PRODUCTS.find(p => p.id === productId);

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
                          <button class="btn-primary flex-1 text-lg py-3 rounded-md js-order-now" data-product-id="${product.id}" ${isOutOfStock ? 'disabled' : ''}>${isOutOfStock ? 'স্টক আউট' : 'এখনই অর্ডার করুন'}</button>
                          <button class="btn-ghost flex-1 text-lg py-3 rounded-md flex items-center justify-center gap-2 js-add-to-cart" data-product-id="${product.id}" ${isOutOfStock ? 'disabled' : ''}>🛒 কার্টে যোগ করুন</button>
                      </div>
                  </div>
              </div>
          </div>`;
          container.addEventListener('click', (event) => {
              const orderBtn = event.target.closest('.js-order-now');
              if(orderBtn) orderNow(orderBtn.dataset.productId);
              const cartBtn = event.target.closest('.js-add-to-cart');
              if(cartBtn) addToCart(cartBtn.dataset.productId);
          });
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
        const product = ALL_PRODUCTS.find(p => p.id === productId);
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
                if (district) {
                    DISTRICTS_AND_THANAS[district]?.forEach(t => thanaSelect.innerHTML += `<option value="${t}">${t}</option>`);
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
        
        const success = await submitToGoogleSheet({
            customerName: checkoutForm.customerName.value,
            phoneNumber: checkoutForm.phoneNumber.value,
            address: fullAddress,
            deliveryLocation: checkoutForm.district.value,
            items: items.map(item => `${item.name} (x${item.quantity})`).join(', '),
            totalAmount: total
        });
        
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

function runPageInitializers() {
    // Cart logic needs product data for `addToCart` and `orderNow`,
    // so it's essential this runs after the data fetch.
    if (DOM_REFERENCES.cartBtn && DOM_REFERENCES.cartItemCountEl) {
        loadCartFromStorage();
        updateCartCount();
        DOM_REFERENCES.cartBtn.addEventListener('click', goToCheckout);
    }

    // Page-specific initializers that depend on data
    if (document.getElementById('product-grid')) initializeHomepage();
    if (document.getElementById('product-details-container')) initializeProductPage();
    if (document.getElementById('review-grid-full')) initializeReviewPage();
    if (document.getElementById('checkout-container')) initializeCheckoutPage();
    if (document.getElementById('thank-you-page-body')) initializeThankYouPage();
}

// --- GLOBAL INITIALIZATION ---
document.addEventListener('DOMContentLoaded', async () => {
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
    
    // Initialize theme toggle immediately as it doesn't depend on fetched data
    if (DOM_REFERENCES.themeToggleBtn && DOM_REFERENCES.themeIconSun && DOM_REFERENCES.themeIconMoon) {
        const preferredTheme = localStorage.getItem('shobkichuTheme');
        document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
        updateTheme();
        DOM_REFERENCES.themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            updateTheme();
        });
    }

    // Fetch data and then run all page-specific logic
    try {
        const [productsResponse, reviewsResponse] = await Promise.all([
            fetch('products.json'),
            fetch('reviews.json')
        ]);
        ALL_PRODUCTS = await productsResponse.json();
        ALL_REVIEWS = await reviewsResponse.json();

        // Now that data is loaded, initialize all page functionality
        runPageInitializers();
    } catch (error) {
        console.error("Failed to load initial site data:", error);
        document.body.innerHTML = `<div style="text-align: center; padding: 4rem 1rem; font-family: sans-serif; color: #dc2626;"><h2>দুঃখিত, সাইট লোড করা যায়নি</h2><p>অনুগ্রহ করে পৃষ্ঠাটি রিফ্রেশ করার চেষ্টা করুন।</p></div>`;
    }
});