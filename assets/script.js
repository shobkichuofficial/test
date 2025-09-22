// --- Google Sheet Web App URL ---
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzQCjKrtEMu4jj5ppWnnuMpJrOSIkKDVakGgwOeQUfyWWq0lsns14kLd0gMcd0HDS91/exec"; 

// --- Product Data ---
const PRODUCTS = [
  {
    id: "balachao_1kg",
    name: "চিংড়ি বালাচাও (1 কেজি)",
    price: 1099,
    image: "assets/prodact6.jpg",
    description: "বিশেষ অফার! ১ কেজির এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"],
    freeDelivery: true
  },
  {
    id: "balachao_800g",
    name: "চিংড়ি বালাচাও (800 গ্রাম)",
    price: 899,
    image: "assets/prodact5.jpg",
    description: "বিশেষ অফার! ৮০০ গ্রামের এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"],
    freeDelivery: true
  },
  {
    id: "balachao_500g",
    name: "চিংড়ি বালাচাও (500 গ্রাম)",
    price: 649,
    image: "assets/prodact4.jpg",
    description: "বিশেষ অফার! ৫০০ গ্রামের এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"],
    freeDelivery: true
  },
  {
    id: "balachao_300g",
    name: "চিংড়ি বালাচাও (300 গ্রাম)",
    price: 350,
    image: "assets/prodact3.jpg",
    description: "নতুন অফার! ৩০০ গ্রামের প্যাকে ঝালের স্বাদ আর খাঁটি চিংড়ির অনন্য সংমিশ্রণ।",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ প্রযোজ্য"],
    freeDelivery: false
  },
  {
    id: "balachao_150g",
    name: "চিংড়ি বালাচাও (150 গ্রাম)",
    price: 195,
    image: "assets/prodact_150.jpg",
    description: "ঝালের স্বাদ আর খাঁটি চিংড়ির অনন্য সংমিশ্রণ। ঘরে বসেই অর্ডার করুন।",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "উন্নতমানের উপাদান"],
    freeDelivery: false
  },
  {
    id: "balachao_250g",
    name: "চিংড়ি বালাচাও (250 গ্রাম)",
    price: 310,
    image: "assets/prodact_250.jpg",
    description: "বড় প্যাক, বড় স্বাদ। পরিবারের জন্য উপযুক্ত। ঘরে বসেই অর্ডার করুন।",
    features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "উন্নতমানের উপাদান"],
    freeDelivery: false
  }
];

// --- Bangladesh Divisions and Districts Data ---
const DIVISIONS_AND_DISTRICTS = {
  "ঢাকা": ["ঢাকা", "গাজীপুর", "কিশোরগঞ্জ", "মানিকগঞ্জ", "মুন্সিগঞ্জ", "নারায়ণগঞ্জ", "নরসিংদী", "টাঙ্গাইল", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর"],
  "চট্টগ্রাম": ["বান্দরবান", "ব্রাহ্মণবাড়িয়া", "চাঁদপুর", "চট্টগ্রাম", "কুমিল্লা", "কক্সবাজার", "ফেনী", "খাগড়াছড়ি", "লক্ষ্মীপুর", "নোয়াখালী", "রাঙ্গামাটি"],
  "খুলনা": ["বাগেরহাট", "চুয়াডাঙ্গা", "যশোর", "ঝিনাইদহ", "খুলনা", "কুষ্টিয়া", "মাগুরা", "মেহেরপুর", "নড়াইল", "সাতক্ষীরা"],
  "রাজশাহী": ["বগুড়া", "চাঁপাইনবাবগঞ্জ", "জয়পুরহাট", "নওগাঁ", "নাটোর", "পাবনা", "রাজশাহী", "সিরাজগঞ্জ"],
  "বরিশাল": ["বরগুনা", "বরিশাল", "ভোলা", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর"],
  "সিলেট": ["হবিগঞ্জ", "মৌলভীবাজার", "সুনামগঞ্জ", "সিলেট"],
  "রংপুর": ["দিনাজপুর", "গাইবান্ধা", "কুড়িগ্রাম", "লালমনিরহাট", "নীলফামারী", "পঞ্চগড়", "রংপুর", "ঠাকুরগাঁও"],
  "ময়মনসিংহ": ["জামালপুর", "ময়মনসিংহ", "নেত্রকোনা", "শেরপুর"]
};

// --- Districts and Thanas/Upazilas Data ---
const DISTRICTS_AND_THANAS = {
    // ঢাকা বিভাগ
    "ঢাকা": ["রমনা", "মতিঝিল", "কোতোয়ালী", "সূত্রাপুর", "ধানমন্ডি", "মোহাম্মদপুর", "তেজগাঁও", "গুলশান", "লালবাগ", "মিরপুর", "পল্লবী", "সবুজবাগ", "ক্যান্টনমেন্ট", "ডেমরা", "হাজারীবাগ", "শ্যামপুর", "বাড্ডা", "কামরাঙ্গীরচর", "খিলগাঁও", "উত্তরা"],
    "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"],
    "কিশোরগঞ্জ": ["কিশোরগঞ্জ সদর", "অষ্টগ্রাম", "বাজিতপুর", "ভৈরব", "হোসেনপুর", "ইটনা", "করিমগঞ্জ", "কটিয়াদী", "কুলিয়ারচর", "মিঠামইন", "নিকলী", "পাকুন্দিয়া", "তাড়াইল"],
    "মানিকগঞ্জ": ["মানিকগঞ্জ সদর", "দৌলতপুর", "ঘিওর", "হরিরামপুর", "সাটুরিয়া", "শিবালয়", "সিঙ্গাইর"],
    "মুন্সিগঞ্জ": ["মুন্সিগঞ্জ সদর", "গজারিয়া", "লৌহজং", "সিরাজদিখান", "শ্রীনগর", "টঙ্গিবাড়ী"],
    "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "আড়াইহাজার", "বন্দর", "রূপগঞ্জ", "সিদ্ধিরগঞ্জ", "সোনারগাঁও"],
    "নরসিংদী": ["নরসিংদী সদর", "বেলাবো", "মনোহরদী", "পলাশ", "রায়পুরা", "শিবপুর"],
    "টাঙ্গাইল": ["টাঙ্গাইল সদর", "বাসাইল", "ভুঞাপুর", "দেলদুয়ার", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "ধনবাড়ী"],
    "ফরিদপুর": ["ফরিদপুর সদর", "আলফাডাঙ্গা", "ভাঙ্গা", "বোয়ালমারী", "চরভদ্রাসন", "মধুখালী", "নগরকান্দা", "সদরপুর", "সালথা"],
    "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "কোটালীপাড়া", "মুকসুদপুর", "টুঙ্গিপাড়া"],
    "মাদারীপুর": ["মাদারীপুর সদর", "কালকিনি", "রাজৈর", "শিবচর"],
    "রাজবাড়ী": ["রাজবাড়ী সদর", "বালিয়াকান্দি", "গোয়ালন্দ", "পাংশা", "কালুখালী"],
    "শরীয়তপুর": ["শরীয়তপুর সদর", "ভেদরগঞ্জ", "ডামুড্যা", "গোসাইরহাট", "নড়িয়া", "জাজিরা"],
    // চট্টগ্রাম বিভাগ
    "বান্দরবান": ["বান্দরবান সদর", "আলীকদম", "লামা", "নাইক্ষ্যংছড়ি", "রোয়াংছড়ি", "রুমা", "থানচি"],
    "ব্রাহ্মণবাড়িয়া": ["ব্রাহ্মণবাড়িয়া সদর", "আখাউড়া", "আশুগঞ্জ", "বাঞ্ছারামপুর", "কসবা", "নবীনগর", "নাসিরনগর", "সরাইল", "বিজয়নগর"],
    "চাঁদপুর": ["চাঁদপুর সদর", "ফরিদগঞ্জ", "হাইমচর", "হাজীগঞ্জ", "কচুয়া", "মতলব উত্তর", "মতলব দক্ষিণ", "শাহরাস্তি"],
    "চট্টগ্রাম": ["আনোয়ারা", "বাঁশখালী", "বোয়ালখালী", "চন্দনাইশ", "ফটিকছড়ি", "হাটহাজারী", "কর্ণফুলী", "লোহাগড়া", "মীরসরাই", "পটিয়া", "রাঙ্গুনিয়া", "রাউজান", "সন্দ্বীপ", "সাতকানিয়া", "সীতাকুণ্ড"],
    "কুমিল্লা": ["কুমিল্লা সদর", "বরুড়া", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "চৌদ্দগ্রাম", "দাউদকান্দি", "দেবীদ্বার", "হোমনা", "লাকসাম", "মনোহরগঞ্জ", "মেঘনা", "মুরাদনগর", "নাঙ্গলকোট", "তিতাস"],
    "কক্সবাজার": ["কক্সবাজার সদর", "চকরিয়া", "কুতুবদিয়া", "মহেশখালী", "পেকুয়া", "রামু", "টেকনাফ", "উখিয়া"],
    "ফেনী": ["ফেনী সদর", "ছাগলনাইয়া", "দাগনভূঞা", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"],
    "খাগড়াছড়ি": ["খাগড়াছড়ি সদর", "দীঘিনালা", "লক্ষ্মীছড়ি", "মহালছড়ি", "মানিকছড়ি", "মাটিরাঙ্গা", "পানছড়ি", "রামগড়"],
    "লক্ষ্মীপুর": ["লক্ষ্মীপুর সদর", "কমলনগর", "রায়পুর", "রামগঞ্জ", "রামগতি"],
    "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সেনবাগ", "সুবর্ণচর", "কবিরহাট"],
    "রাঙ্গামাটি": ["রাঙ্গামাটি সদর", "বাঘাইছড়ি", "বরকল", "কাপ্তাই", "জুরাছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "বিলাইছড়ি", "কাউনখালী"],
    // খুলনা বিভাগ
    "বাগেরহাট": ["বাগেরহাট সদর", "চিতলমারী", "ফকিরহাট", "কচুয়া", "মোল্লাহাট", "মোংলা", "মোরেলগঞ্জ", "রামপাল", "শরণখোলা"],
    "চুয়াডাঙ্গা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা", "জীবননগর"],
    "যশোর": ["যশোর সদর", "অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "মণিরামপুর", "শার্শা"],
    "ঝিনাইদহ": ["ঝিনাইদহ সদর", "হরিণাকুণ্ডু", "কালীগঞ্জ", "কোটচাঁদপুর", "মহেশপুর", "শৈলকুপা"],
    "খুলনা": ["ডুমুরিয়া", "বটিয়াঘাটা", "দাকোপ", "দিঘলিয়া", "কয়রা", "পাইকগাছা", "ফুলতলা", "রূপসা", "তেরখাদা"],
    "কুষ্টিয়া": ["কুষ্টিয়া সদর", "ভেড়ামারা", "দৌলতপুর", "কুমারখালী", "খোকসা", "মিরপুর"],
    "মাগুরা": ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"],
    "মেহেরপুর": ["মেহেরপুর সদর", "গাংনী", "মুজিবনগর"],
    "নড়াইল": ["নড়াইল সদর", "কালিয়া", "লোহাগড়া"],
    "সাতক্ষীরা": ["সাতক্ষীরা সদর", "কলারোয়া", "আশাশুনি", "দেবহাটা", "কালিগঞ্জ", "শ্যামনগর", "তালা"],
    // রাজশাহী বিভাগ
    "বগুড়া": ["বগুড়া সদর", "আদমদীঘি", "ধুনট", "দুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সারিয়াকান্দি", "শাজাহানপুর", "শেরপুর", "শিবগঞ্জ", "সোনাতলা"],
    "চাঁপাইনবাবগঞ্জ": ["চাঁপাইনবাবগঞ্জ সদর", "গোমস্তাপুর", "নাচোল", "ভোলাহাট", "শিবগঞ্জ"],
    "জয়পুরহাট": ["জয়পুরহাট সদর", "আক্কেলপুর", "কালাই", "ক্ষেতলাল", "পাঁচবিবি"],
    "নওগাঁ": ["নওগাঁ সদর", "আত্রাই", "বদলগাছী", "ধামইরহাট", "মান্দা", "মহাদেবপুর", "নিয়ামতপুর", "পত্নীতলা", "পোরশা", "রানীনগর", "সাপাহার"],
    "নাটোর": ["নাটোর সদর", "বাগাতিপাড়া", "বড়াইগ্রাম", "গুরুদাসপুর", "লালপুর", "সিংড়া", "নলডাঙ্গা"],
    "পাবনা": ["পাবনা সদর", "ঈশ্বরদী", "আটঘরিয়া", "বেড়া", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "সাঁথিয়া", "সুজানগর"],
    "রাজশাহী": ["বাঘা", "বাগমারা", "চারঘাট", "দুর্গাপুর", "গোদাগাড়ী", "মোহনপুর", "পবা", "পুঠিয়া", "তানোর"],
    "সিরাজগঞ্জ": ["সিরাজগঞ্জ সদর", "বেলকুচি", "চৌহালী", "কামারখন্দ", "কাজীপুর", "রায়গঞ্জ", "শাহজাদপুর", "তাড়াশ", "উল্লাপাড়া"],
    // বরিশাল বিভাগ
    "বরগুনা": ["বরগুনা সদর", "আমতলী", "বামনা", "বেতাগী", "পাথরঘাটা", "তালতলী"],
    "বরিশাল": ["বরিশাল সদর", "আগৈলঝাড়া", "বাবুগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "মেহেন্দিগঞ্জ", "মুলাদী", "উজিরপুর", "বাকেরগঞ্জ"],
    "ভোলা": ["ভোলা সদর", "বোরহানউদ্দিন", "চরফ্যাশন", "দৌলতখান", "লালমোহন", "মনপুরা", "তজুমদ্দিন"],
    "ঝালকাঠি": ["ঝালকাঠি সদর", "কাঁঠালিয়া", "নলছিটি", "রাজাপুর"],
    "পটুয়াখালী": ["পটুয়াখালী সদর", "বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "দুমকি", "রাঙ্গাবালী"],
    "পিরোজপুর": ["পিরোজপুর সদর", "ভান্ডারিয়া", "কাউখালী", "মঠবাড়িয়া", "নাজিরপুর", "নেসারেবাদ (স্বরূপকাঠি)", "ইন্দুরকানী"],
    // সিলেট বিভাগ
    "সিলেট": ["সিলেট সদর", "বালাগঞ্জ", "বিয়ানীবাজার", "কোম্পানীগঞ্জ", "ফেঞ্চুগঞ্জ", "গোলাপগঞ্জ", "গোয়াইনঘাট", "জৈন্তাপুর", "কানাইঘাট", "দক্ষিণ সুরমা", "জকিগঞ্জ", "ওসমানী নগর"],
    "হবিগঞ্জ": ["হবিগঞ্জ সদর", "আজমিরীগঞ্জ", "বানিয়াচং", "বাহুবল", "চুনারুঘাট", "লাখাই", "মাধবপুর", "নবীগঞ্জ"],
    "মৌলভীবাজার": ["মৌলভীবাজার সদর", "বড়লেখা", "জুড়ী", "কমলগঞ্জ", "কুলাউড়া", "রাজনগর", "শ্রীমঙ্গল"],
    "সুনামগঞ্জ": ["সুনামগঞ্জ সদর", "বিশ্বম্ভরপুর", "ছাতক", "দিরাই", "ধর্মপাশা", "দোয়ারাবাজার", "জগন্নাথপুর", "জামালগঞ্জ", "শাল্লা", "তাহিরপুর", "দক্ষিণ সুনামগঞ্জ"],
    // রংপুর বিভাগ
    "দিনাজপুর": ["দিনাজপুর সদর", "বিরামপুর", "বীরগঞ্জ", "বিরল", "বোচাগঞ্জ", "চিরিরবন্দর", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "নবাবগঞ্জ", "পার্বতীপুর"],
    "গাইবান্ধা": ["গাইবান্ধা সদর", "ফুলছড়ি", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সাঘাটা", "সুন্দরগঞ্জ"],
    "কুড়িগ্রাম": ["কুড়িগ্রাম সদর", "ভূরুঙ্গামারী", "চর রাজিবপুর", "চিলমারী", "ফুলবাড়ী", "নাগেশ্বরী", "রাজারহাট", "রৌমারী", "উলিপুর"],
    "লালমনিরহাট": ["লালমনিরহাট সদর", "আদিতমারী", "হাতীবান্ধা", "কালীগঞ্জ", "পাটগ্রাম"],
    "নীলফামারী": ["নীলফামারী সদর", "ডোমার", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ", "সৈয়দপুর"],
    "পঞ্চগড়": ["পঞ্চগড় সদর", "আটোয়ারী", "বোদা", "দেবীগঞ্জ", "তেঁতুলিয়া"],
    "রংপুর": ["রংপুর সদর", "বদরগঞ্জ", "গঙ্গাচড়া", "কাউনিয়া", "মিঠাপুকুর", "পীরগাছা", "পীরগঞ্জ", "তারাগঞ্জ"],
    "ঠাকুরগাঁও": ["ঠাকুরগাঁও সদর", "বালিয়াডাঙ্গী", "হরিপুর", "পীরগঞ্জ", "রানীশংকৈল"],
    // ময়মনসিংহ বিভাগ
    "জামালপুর": ["জামালপুর সদর", "বকশীগঞ্জ", "দেওয়ানগঞ্জ", "ইসলামপুর", "মাদারগঞ্জ", "মেলান্দহ", "সরিষাবাড়ী"],
    "ময়মনসিংহ": ["ময়মনসিংহ সদর", "ভালুকা", "ধোবাউড়া", "ফুলবাড়ীয়া", "গফরগাঁও", "গৌরীপুর", "হালুয়াঘাট", "ঈশ্বরগঞ্জ", "মুক্তাগাছা", "নান্দাইল", "ফুলপুর", "তারাকান্দা", "ত্রিশাল"],
    "নেত্রকোনা": ["নেত্রকোনা সদর", "বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া", "কলমাকান্দা", "মদন", "মোহনগঞ্জ", "পূর্বধলা", "খালিয়াজুরী", "আটপাড়া"],
    "শেরপুর": ["শেরপুর সদর", "ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শ্রীবরদী"]
};


// --- App State ---
let CART = [];
let SELECTED_PRODUCT = null;

// --- DOM References ---
const productGrid = document.getElementById('product-grid');
const cartBtn = document.getElementById('cart-btn');
const cartItemCountEl = document.getElementById('cart-item-count');
const modalsContainer = document.getElementById('modals-container');
const toastEl = document.getElementById('toast');
const toastTitleEl = document.getElementById('toast-title');
const toastDescriptionEl = document.getElementById('toast-description');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIconSun = document.getElementById('theme-icon-sun');
const themeIconMoon = document.getElementById('theme-icon-moon');

// --- Utility ---
function showToast(title, description, variant = 'default') {
  toastTitleEl.textContent = title;
  toastDescriptionEl.textContent = description;
  toastEl.classList.remove('destructive');
  if (variant === 'destructive') toastEl.classList.add('destructive');
  toastEl.classList.add('show');
  setTimeout(() => { toastEl.classList.remove('show'); }, 3500);
}
function openModal(html) {
  const w = document.createElement('div');
  w.innerHTML = html;
  modalsContainer.appendChild(w.firstElementChild);
  setTimeout(() => modalsContainer.lastElementChild.classList.remove('hidden'), 10);
  document.body.style.overflow = 'hidden';
}
function closeModal(modalEl) {
  modalEl.classList.add('hidden');
  setTimeout(() => {
    modalEl.remove();
    if (modalsContainer.children.length === 0) document.body.style.overflow = '';
  }, 300);
}
function updateCartCount() {
  const count = CART.reduce((s, i) => s + i.quantity, 0);
  cartItemCountEl.textContent = count;
  cartItemCountEl.classList.toggle('hidden', count === 0);
}
function getCartItem(id) {
  return CART.find(i => i.id === id);
}

// --- Google Sheet Data Submission ---
async function submitToGoogleSheet(data) {
    if (SPREADSHEET_URL === "YOUR_GOOGLE_SHEET_WEB_APP_URL_HERE" || !SPREADSHEET_URL) {
        console.error("Google Sheet URL is not set.");
        showToast("ত্রুটি", "সার্ভার কনফিগারেশন সঠিক নয়।", "destructive");
        return false;
    }
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    try {
        const response = await fetch(SPREADSHEET_URL, {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        if (result.status !== 'success') {
             throw new Error(result.message);
        }
        return true;
    } catch (error) {
        console.error('Error submitting to Google Sheet:', error);
        showToast("ত্রুটি", "অর্ডার পাঠাতে সমস্যা হয়েছে।", "destructive");
        return false;
    }
}

// --- RENDER FUNCTIONS ---
function renderProducts() {
  productGrid.innerHTML = PRODUCTS.map(p => `
  <div class="card-modern group cursor-pointer overflow-hidden animate-fade-in" data-product-id="${p.id}">
    <div class="p-0">
      <div class="relative overflow-hidden" data-action="preview">
        <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        ${p.freeDelivery ? `
          <div class="absolute top-4 right-4 h-20 w-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-center leading-tight shadow-lg animate-pulse z-10">
            <span class="text-lg">ফ্রি<br>ডেলিভারি</span>
          </div>
        ` : ''}

        <button class="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-md flex items-center gap-1 z-10" data-action="preview">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          দেখুন
        </button>
      </div>
      <div class="p-6">
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">${p.name}</h3>
            <div class="flex items-center justify-between mt-2">
              <span class="bg-gradient-secondary text-secondary-foreground font-bold text-lg px-3 py-1 rounded-md">৳${p.price}</span>
              <span class="text-sm text-green-600 font-medium">স্টকে আছে</span>
            </div>
          </div>
          <div class="space-y-2">
            ${p.features.map(f => `<div class="flex items-center gap-2 text-sm text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg><span>${f}</span></div>`).join('')}
          </div>
          <div class="flex gap-2 pt-2">
            <button class="btn-primary flex-1 py-3 px-4 rounded-md text-base" data-action="order">অর্ডার করুন</button>
            <button class="btn-ghost py-3 px-4 rounded-md text-base flex items-center justify-center gap-1" data-action="add_to_cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              কার্ট
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `).join('');
}

function renderPreviewModal(product) {
  return `
  <div class="modal-overlay hidden" data-product-id="${product.id}">
    <div class="modal-content card-modern max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4 rounded-lg">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gradient mb-4">পণ্যের বিস্তারিত</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="relative overflow-hidden rounded-xl">
              <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-4 left-4"><span class="bg-success text-success-foreground text-xs px-2 py-1 rounded-md">স্টকে আছে</span></div>
              ${product.freeDelivery ? `<div class="absolute top-4 right-4"><span class="bg-destructive text-destructive-foreground text-base font-extrabold px-4 py-2 rounded-lg shadow-xl animate-pulse">⚡ ফ্রি ডেলিভারি ⚡</span></div>` : ''}
            </div>
            <div class="flex items-center gap-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-yellow-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
              </div>
              <span class="text-sm text-muted-foreground">(4.8 রেটিং)</span>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-foreground mb-3">${product.name}</h2>
              <div class="flex items-center gap-4 mb-4">
                <span class="bg-gradient-secondary text-secondary-foreground font-bold text-xl px-4 py-2 rounded-md">৳${product.price}</span>
                <span class="text-sm text-muted-foreground line-through">৳${Math.round(product.price * 1.2)}</span>
                <span class="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-md">20% ছাড়</span>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-foreground mb-2">বিবরণ</h3>
              <p class="text-muted-foreground leading-relaxed">${product.description}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-foreground mb-3">বৈশিষ্ট্যসমূহ</h3>
              <div class="space-y-3">${product.features.map(f => `<div class="flex items-center gap-3"><div class="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="20 6 9 17 4 12"></polyline></svg></div><span class="text-foreground">${f}</span></div>`).join('')}</div>
            </div>
            <div class="p-4 bg-gradient-subtle rounded-lg border border-border/50">
              <h4 class="font-semibold text-foreground mb-2">গুণগত মানের নিশ্চয়তা</h4>
              <ul class="text-sm text-muted-foreground space-y-1">
                <li>✓ 100% খাঁটি ও প্রাকৃতিক উপাদান</li>
                <li>✓ গুণগত মান পরীক্ষিত</li>
                <li>✓ দ্রুত ডেলিভারি নিশ্চয়তা</li>
              </ul>
            </div>
            <div class="flex gap-4 pt-4">
              <button data-action="orderFromPreview" class="btn-primary flex-1 text-lg py-3 rounded-md">এখনই অর্ডার করুন</button>
              <button data-action="addToCartFromPreview" class="btn-ghost flex-1 text-lg py-3 rounded-md flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                কার্টে যোগ করুন
              </button>
            </div>
            <div class="text-center text-sm text-muted-foreground pt-4 border-t border-border">
              <p>সরাসরি অর্ডার করতে কল করুন: <span class="font-bold text-primary">+8809638180218</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderOrderModal(product, quantity) {
  const productTotal = product.price * quantity;
  return `
  <div class="modal-overlay hidden" id="order-modal">
    <div class="modal-content card-modern max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4 rounded-lg">
    <div class="p-6 space-y-6"><h2 class="text-2xl font-bold text-gradient">অর্ডার কনফার্ম করুন</h2>
    <div class="flex gap-4 p-4 bg-muted/30 rounded-lg"><img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded-lg" /><div class="flex-1"><h4 class="font-bold text-foreground">${product.name}</h4><p class="text-success font-bold">৳${product.price}</p></div></div>
    <form id="single-order-form" class="space-y-4"><div class="space-y-2"><label class="text-sm font-medium">পরিমাণ</label><div class="flex items-center gap-3"><button type="button" id="single-qty-dec-btn" data-action="dec-single-qty" class="h-8 w-8 border rounded-md flex items-center justify-center">-</button><span id="quantity-value" class="w-12 text-center text-lg font-medium">${quantity}</span><button type="button" data-action="inc-single-qty" class="h-8 w-8 border rounded-md flex items-center justify-center">+</button><span id="product-subtotal" class="ml-4 text-sm text-muted-foreground">সাবটোটাল: ৳${productTotal}</span></div></div><hr/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2"><label for="customerName" class="text-sm font-medium">আপনার নাম *</label><input type="text" id="customerName" name="customerName" required minlength="3" placeholder="নাম লিখুন" class="w-full p-2 border rounded-md bg-input" /></div><div class="space-y-2"><label for="phoneNumber" class="text-sm font-medium">ফোন নম্বর *</label><input type="tel" id="phoneNumber" name="phoneNumber" required minlength="11" maxlength="14" pattern="^\\+?\\d{10,13}$" title="অনুগ্রহ করে + সহ বা ছাড়া ১১ থেকে ১৪ অক্ষরের একটি বৈধ ফোন নম্বর দিন।" placeholder="+88017xxxxxxxx" class="w-full p-2 border rounded-md bg-input" /></div></div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="space-y-2"><label for="division" class="text-sm font-medium">বিভাগ *</label><select name="division" required class="w-full p-2 border rounded-md bg-input"><option value="" disabled selected>বিভাগ নির্বাচন করুন</option>${Object.keys(DIVISIONS_AND_DISTRICTS).map(div => `<option value="${div}">${div}</option>`).join('')}</select></div>
        <div class="space-y-2"><label for="district" class="text-sm font-medium">জেলা *</label><select name="district" required class="w-full p-2 border rounded-md bg-input" disabled><option value="" disabled selected>আগে বিভাগ নির্বাচন করুন</option></select></div>
        <div class="space-y-2"><label for="thana" class="text-sm font-medium">থানা/উপজেলা *</label><select name="thana" required class="w-full p-2 border rounded-md bg-input" disabled><option value="" disabled selected>আগে জেলা নির্বাচন করুন</option></select></div>
    </div>
    <div class="space-y-2"><label for="address" class="text-sm font-medium">বিস্তারিত ঠিকানা *</label><input type="text" id="address" name="address" required placeholder="বাড়ির নম্বর, রাস্তা, এলাকা/গ্রাম ইত্যাদি লিখুন" class="w-full p-2 border rounded-md bg-input" /></div>
    <hr/>
    <div class="space-y-2 p-4 bg-gradient-subtle rounded-lg"><div id="delivery-charge-row" class="flex justify-between text-sm" style="display: none;"><span>ডেলিভারি চার্জ:</span><span id="delivery-charge">৳0</span></div><hr/><div class="flex justify-between text-lg font-bold text-gradient"><span>মোট:</span><span id="total-amount">৳${productTotal}</span></div></div>
    <button type="submit" class="w-full btn-primary text-lg py-3 rounded-md">অর্ডার কনফার্ম করুন</button></form></div></div></div>`;
}

function renderCartModal() {
  const subtotal = CART.reduce((s, i) => s + i.price * i.quantity, 0);
  return `
  <div class="modal-overlay hidden" id="cart-modal">
    <div class="modal-content card-modern max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4 rounded-lg">
    <div class="p-6 space-y-6"><h2 class="text-2xl font-bold text-gradient">আপনার শপিং কার্ট</h2>
    ${CART.length === 0 ? `<div class="text-center py-12"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-muted-foreground mb-4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg><h3 class="text-lg font-medium text-foreground mb-2">আপনার কার্ট খালি</h3><p class="text-muted-foreground">কেনাকাটা শুরু করতে পণ্য যোগ করুন</p></div>` :
      `<div class="space-y-4">${CART.map(i => `<div class="flex items-center justify-between p-4 bg-muted/30 rounded-lg" data-item-id="${i.id}"><div class="flex-1"><h4 class="font-medium text-foreground">${i.name}</h4><p class="text-sm text-muted-foreground">৳${i.price} প্রতিটি</p></div><div class="flex items-center gap-3"><div class="flex items-center gap-2"><button data-action="dec-qty" class="h-8 w-8 border rounded-md flex items-center justify-center">-</button><span id="item-qty" class="w-8 text-center font-medium">${i.quantity}</span><button data-action="inc-qty" class="h-8 w-8 border rounded-md flex items-center justify-center">+</button></div><div class="w-20 text-right"><span id="item-total" class="font-bold">৳${i.price * i.quantity}</span></div><button data-action="remove-item" class="h-8 w-8 text-destructive hover:text-destructive flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></div></div>`).join('')}</div><hr/>
      <form id="cart-order-form" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="space-y-2"><label for="customerName" class="text-sm font-medium">আপনার নাম *</label><input type="text" id="customerName" name="customerName" required minlength="3" placeholder="নাম লিখুন" class="w-full p-2 border rounded-md bg-input" /></div><div class="space-y-2"><label for="phoneNumber" class="text-sm font-medium">ফোন নম্বর *</label><input type="tel" id="phoneNumber" name="phoneNumber" required minlength="11" maxlength="14" pattern="^\\+?\\d{10,13}$" title="অনুগ্রহ করে + সহ বা ছাড়া ১১ থেকে ১৪ অক্ষরের একটি বৈধ ফোন নম্বর দিন।" placeholder="+88017xxxxxxxx" class="w-full p-2 border rounded-md bg-input" /></div></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="space-y-2"><label for="division" class="text-sm font-medium">বিভাগ *</label><select name="division" required class="w-full p-2 border rounded-md bg-input"><option value="" disabled selected>বিভাগ নির্বাচন করুন</option>${Object.keys(DIVISIONS_AND_DISTRICTS).map(div => `<option value="${div}">${div}</option>`).join('')}</select></div>
            <div class="space-y-2"><label for="district" class="text-sm font-medium">জেলা *</label><select name="district" required class="w-full p-2 border rounded-md bg-input" disabled><option value="" disabled selected>আগে বিভাগ নির্বাচন করুন</option></select></div>
            <div class="space-y-2"><label for="thana" class="text-sm font-medium">থানা/উপজেলা *</label><select name="thana" required class="w-full p-2 border rounded-md bg-input" disabled><option value="" disabled selected>আগে জেলা নির্বাচন করুন</option></select></div>
        </div>
        <div class="space-y-2"><label for="address" class="text-sm font-medium">বিস্তারিত ঠিকানা *</label><input type="text" id="address" name="address" required placeholder="বাড়ির নম্বর, রাস্তা, এলাকা/গ্রাম ইত্যাদি লিখুন" class="w-full p-2 border rounded-md bg-input" /></div>
        <hr/>
        <div class="space-y-2 p-4 bg-gradient-subtle rounded-lg"><div class="flex justify-between text-sm"><span>সাবটোটাল:</span><span id="cart-subtotal">৳${subtotal}</span></div><div id="delivery-charge-row" class="flex justify-between text-sm" style="display: none;"><span>ডেলিভারি চার্জ:</span><span id="delivery-charge">৳0</span></div><hr/><div class="flex justify-between text-lg font-bold text-gradient"><span>মোট:</span><span id="total-amount">৳${subtotal}</span></div></div>
        <button type="submit" class="w-full btn-primary text-lg py-3 rounded-md">অর্ডার কনফার্ম করুন</button>
      </form></div>`}
    </div></div>
  </div>`;
}

function getThankYouModalHTML() {
  return `
  <div class="modal-overlay flex items-center justify-center p-4">
    <div class="modal-content card-modern max-w-md w-full text-center py-8 px-6">
      <div class="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> </div>
      <h3 class="text-xl font-bold text-foreground mb-2">অর্ডার সফল!</h3>
      <p class="text-muted-foreground">আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। 😊</p>
    </div>
  </div>`;
}

// --- Events + Logic ---
productGrid.addEventListener('click', e => {
  const card = e.target.closest('[data-product-id]');
  if (!card) return;
  const productId = card.dataset.productId;
  const product = PRODUCTS.find(p => p.id === productId);
  SELECTED_PRODUCT = product;
  const action = e.target.dataset.action || e.target.closest('[data-action]')?.dataset.action;

  if (action === 'add_to_cart') {
    const existing = CART.find(i => i.id === product.id);
    if (existing) existing.quantity += 1;
    else CART.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    updateCartCount();
    showToast("কার্টে যোগ হয়েছে!", `${product.name} সফলভাবে কার্টে যোগ করা হয়েছে।`);
  } else if (action === 'order') {
    openModal(renderOrderModal(product, 1));
  } else if (action === 'preview') {
    openModal(renderPreviewModal(product));
  }
});

cartBtn.addEventListener('click', () => { openModal(renderCartModal()); });

async function handleFormSubmission(form, modal, type) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!form.checkValidity()) {
        showToast("ত্রুটি", "দয়া করে ফর্মের সমস্ত তথ্য সঠিকভাবে পূরণ করুন।", "destructive");
        form.reportValidity();
        return;
    }

    if (!form.division.value || !form.district.value || !form.thana.value) {
        showToast("ত্রুটি", "দয়া করে আপনার বিভাগ, জেলা এবং থানা নির্বাচন করুন।", "destructive");
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'প্রসেসিং...';
    
    const totalAmountText = form.querySelector('#total-amount').textContent;
    const totalAmount = parseFloat(totalAmountText.replace('৳', ''));

    let itemsData;
    let isFreeDelivery = false;

    if (type === 'single') {
        const quantity = parseInt(form.querySelector('#quantity-value').textContent, 10);
        itemsData = `${SELECTED_PRODUCT.name} (পরিমাণ: ${quantity})`;
        isFreeDelivery = SELECTED_PRODUCT.freeDelivery || false;
    } else { // type === 'cart'
        itemsData = CART.map(item => `${item.name} (পরিমাণ: ${item.quantity})`).join(', ');
        isFreeDelivery = CART.length > 0 && CART.every(cartItem => {
            const product = PRODUCTS.find(p => p.id === cartItem.id);
            return product && product.freeDelivery;
        });
    }
    
    const fullAddress = `${form.address.value}, থানা: ${form.thana.value}, জেলা: ${form.district.value}, বিভাগ: ${form.division.value}`;
    
    let deliveryLocationText = 'Not Applicable';
    if(isFreeDelivery) {
        deliveryLocationText = 'Free Delivery Offer';
    } else if (form.district.value) {
        deliveryLocationText = form.district.value === 'ঢাকা' ? 'Inside Dhaka District (70)' : 'Outside Dhaka District (130)';
    }
    
    const orderData = {
        customerName: form.customerName.value,
        phoneNumber: form.phoneNumber.value,
        address: fullAddress,
        deliveryLocation: deliveryLocationText,
        items: itemsData,
        totalAmount: totalAmount,
    };

    const success = await submitToGoogleSheet(orderData);

    if (success) {
        closeModal(modal);
        openModal(getThankYouModalHTML());
        setTimeout(() => closeModal(modalsContainer.lastElementChild), 3000);
        if (type === 'cart') {
            CART = [];
            updateCartCount();
        }
    }
    
    submitBtn.disabled = false;
    submitBtn.textContent = 'অর্ডার কনফার্ম করুন';
}

modalsContainer.addEventListener('change', e => {
    const form = e.target.closest('form');
    if (!form) return;
    
    const formType = form.id.startsWith('cart') ? 'cart' : 'single';
    const districtSelect = form.querySelector('select[name="district"]');
    const thanaSelect = form.querySelector('select[name="thana"]');

    if (e.target.name === 'division') {
        const division = e.target.value;
        
        districtSelect.innerHTML = '<option value="" disabled selected>জেলা নির্বাচন করুন</option>';
        thanaSelect.innerHTML = '<option value="" disabled selected>আগে জেলা নির্বাচন করুন</option>';
        thanaSelect.disabled = true;
        
        if (division && DIVISIONS_AND_DISTRICTS[division]) {
            DIVISIONS_AND_DISTRICTS[division].forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
        districtSelect.value = '';
        thanaSelect.value = '';
        updatePriceSummary(form, formType);
    }

    if (e.target.name === 'district') {
        const district = e.target.value;

        thanaSelect.innerHTML = '<option value="" disabled selected>থানা/উপজেলা নির্বাচন করুন</option>';
        
        if (district && DISTRICTS_AND_THANAS[district]) {
            DISTRICTS_AND_THANAS[district].forEach(thana => {
                const option = document.createElement('option');
                option.value = thana;
                option.textContent = thana;
                thanaSelect.appendChild(option);
            });
            thanaSelect.disabled = false;
        } else {
            thanaSelect.disabled = true;
        }
        thanaSelect.value = '';
        updatePriceSummary(form, formType);
    }
});

modalsContainer.addEventListener('click', async e => {
  const modal = e.target.closest('.modal-overlay');
  if (!modal) return;
  if (e.target === modal) closeModal(modal);

  const action = e.target.dataset.action || e.target.closest('[data-action]')?.dataset.action;
  const form = e.target.closest('form');

  if (form && e.target.type === 'submit') {
      e.preventDefault();
      if (form.id === 'cart-order-form') {
          await handleFormSubmission(form, modal, 'cart');
      } else if (form.id === 'single-order-form') {
          await handleFormSubmission(form, modal, 'single');
      }
  }

  if (action?.includes('single-qty')) {
    const qtyEl = modal.querySelector('#quantity-value');
    let qty = parseInt(qtyEl.textContent, 10);
    if (action === 'inc-single-qty') qty++;
    else if (action === 'dec-single-qty' && qty > 1) qty--;
    qtyEl.textContent = qty;
    modal.querySelector('#single-qty-dec-btn').disabled = (qty <= 1);
    updatePriceSummary(form, 'single');
  } else if (action?.includes('qty')) {
    const itemEl = e.target.closest('[data-item-id]');
    if (!itemEl) return;
    const itemId = itemEl.dataset.itemId;
    const item = CART.find(i => i.id === itemId);
    if (!item) return;
    if (action === 'inc-qty') item.quantity++;
    else if (action === 'dec-qty' && item.quantity > 1) item.quantity--;
    else if (action === 'dec-qty' && item.quantity === 1) { CART = CART.filter(i => i.id !== itemId); itemEl.remove(); }
    if (item) {
      itemEl.querySelector('#item-qty').textContent = item.quantity;
      itemEl.querySelector('#item-total').textContent = `৳${item.price * item.quantity}`;
    }
    updatePriceSummary(modal.querySelector('form'), 'cart');
    updateCartCount();
  }

  if (action === 'remove-item') {
    const itemId = e.target.closest('[data-item-id]').dataset.itemId;
    CART = CART.filter(i => i.id !== itemId);
    e.target.closest('[data-item-id]').remove();
    if (CART.length === 0) {
      closeModal(modal);
      openModal(renderCartModal());
    } else {
        updatePriceSummary(modal.querySelector('form'), 'cart');
    }
    updateCartCount();
  }
  
  if (action === 'orderFromPreview') {
    SELECTED_PRODUCT = PRODUCTS.find(p => p.id === e.target.closest('[data-product-id]').dataset.productId);
    closeModal(modal);
    openModal(renderOrderModal(SELECTED_PRODUCT, 1));
  }
  if (action === 'addToCartFromPreview') {
    const product = PRODUCTS.find(p => p.id === e.target.closest('[data-product-id]').dataset.productId);
    const existing = CART.find(i => i.id === product.id);
    if (existing) existing.quantity += 1;
    else CART.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    updateCartCount();
    showToast("কার্টে যোগ হয়েছে!", `${product.name} সফলভাবে কার্টে যোগ করা হয়েছে।`);
    closeModal(modal);
  }
});

function updatePriceSummary(form, type) {
    if (!form) return;
    const selectedDistrict = form.querySelector('select[name="district"]').value;
    let deliveryCharge = 0;
    let subtotal;
    let isFreeDelivery = false;

    if (type === 'single') {
        const quantity = parseInt(form.querySelector('#quantity-value').textContent, 10);
        subtotal = SELECTED_PRODUCT.price * quantity;
        form.querySelector('#product-subtotal').textContent = `সাবটোটাল: ৳${subtotal}`;
        if (SELECTED_PRODUCT.freeDelivery) {
            isFreeDelivery = true;
        }
    } else { // type === 'cart'
        subtotal = CART.reduce((sum, item) => sum + item.price * item.quantity, 0);
        form.querySelector('#cart-subtotal').textContent = `৳${subtotal}`;
        const allItemsFreeDelivery = CART.every(cartItem => {
            const product = PRODUCTS.find(p => p.id === cartItem.id);
            return product && product.freeDelivery;
        });
        if (CART.length > 0 && allItemsFreeDelivery) {
            isFreeDelivery = true;
        }
    }
    
    if (selectedDistrict && !isFreeDelivery) {
        deliveryCharge = selectedDistrict === 'ঢাকা' ? 70 : 130;
    }
    
    const total = subtotal + deliveryCharge;
    const deliveryChargeEl = form.querySelector('#delivery-charge');

    if (isFreeDelivery) {
        deliveryChargeEl.textContent = 'ফ্রি';
        deliveryChargeEl.classList.add('text-success', 'font-bold');
    } else {
        deliveryChargeEl.textContent = `৳${deliveryCharge}`;
        deliveryChargeEl.classList.remove('text-success', 'font-bold');
    }
    
    form.querySelector('#total-amount').textContent = `৳${total}`;
    form.querySelector('#delivery-charge-row').style.display = selectedDistrict || isFreeDelivery ? 'flex' : 'none';
}

// --- THEME ---
function updateTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  themeIconSun.classList.toggle('hidden', !isDark);
  themeIconMoon.classList.toggle('hidden', isDark);
}
themeToggleBtn.addEventListener('click', () => { document.documentElement.classList.toggle('dark'); updateTheme(); });

// --- INIT ---
renderProducts();
updateTheme();
updateCartCount();