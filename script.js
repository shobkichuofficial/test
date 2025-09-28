// --- Product Data ---
const PRODUCTS = [
  { id: "balachao_1kg", name: "চিংড়ি বালাচাও (1 kg)", name_en: "Chingri Balachao (1 kg)", weight: "1kg", price: 1099, image: "assets/prodact6.jpg", description: "বিশেষ অফার! 1 কেজির এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"], freeDelivery: true },
  { id: "balachao_800g", name: "চিংড়ি বালাচাও (800 g)", name_en: "Chingri Balachao (800 gram)", weight: "800g", price: 899, image: "assets/prodact5.jpg", description: "বিশেষ অফার! 800 গ্রামের এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"], freeDelivery: true },
  { id: "balachao_500g", name: "চিংড়ি বালাচাও (500 g)", name_en: "Chingri Balachao (500 gram)", weight: "500g", price: 649, image: "assets/prodact4.jpg", description: "বিশেষ অফার! 500 গ্রামের এই প্যাকে পাচ্ছেন ফ্রি ডেলিভারি!", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ ফ্রি"], freeDelivery: true },
  { id: "balachao_300g", name: "চিংড়ি বালাচাও (300 g)", name_en: "Chingri Balachao (300 gram)", weight: "300g", price: 350, image: "assets/prodact3.jpg", description: "নতুন অফার! 300 গ্রামের প্যাকে ঝালের স্বাদ আর খাঁটি চিংড়ির অনন্য সংমিশ্রণ।", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "ডেলিভারি চার্জ প্রযোজ্য"], freeDelivery: false },
  { id: "balachao_250g", name: "চিংড়ি বালাচাও (250 g)", name_en: "Chingri Balachao (250 gram)", weight: "250g", price: 310, image: "assets/prodact_250.jpg", description: "বড় প্যাক, বড় স্বাদ। পরিবারের জন্য উপযুক্ত। ঘরে বসেই অর্ডার করুন।", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "উন্নতমানের উপাদান"], freeDelivery: false },
  { id: "balachao_150g", name: "চিংড়ি বালাচাও (150 g)", name_en: "Chingri Balachao (150 gram)", weight: "150g", price: 195, image: "assets/prodact_150.jpg", description: "ঝালের স্বাদ আর খাঁটি চিংড়ির অনন্য সংমিশ্রণ। ঘরে বসেই অর্ডার করুন।", features: ["ফ্রেশ ড্রাই চিংড়ি", "আসল মসলা", "ঝাঁজালো স্বাদ", "হোমমেড ফ্লেভার", "উন্নতমানের উপাদান"], freeDelivery: false }
];

// --- Review Data ---
const REVIEWS = [
    { name: "আরিফ হোসেন", rating: 5, text: "বালাচাও এর স্বাদ মুখে লেগে থাকার মতো। এতো ফ্রেশ আর টেস্টি, বারবার অর্ডার করতে ইচ্ছে করে।" },
    { name: "ইমরান খান", rating: 5, text: "অর্ডার করার ২ দিনের মধ্যেই ডেলিভারি পেয়েছি। প্যাকেজিংও খুব ভালো ছিল। ধন্যবাদ সবকিছু.com।" },
    { name: "সাকিব রহমান", rating: 5, text: "ফ্রি ডেলিভারি অফারটা দারুণ ছিল। স্বাদ আর সার্ভিসে আমি মুগ্ধ। বন্ধুদেরও রিকমেন্ড করেছি।" },
    { name: "সুমন আহমেদ", rating: 5, text: "চিংড়ির পরিমাণ আর মসলার মিশ্রণটা পারফেক্ট। গরম ভাতের সাথে অসাধারণ লাগে।" },
    { name: "জান্নাতুল ফেরদৌস", rating: 5, text: "অনেকদিন ধরেই ভালো মানের বালাচাও খুঁজছিলাম। সবকিছু.com আমার প্রত্যাশা পূরণ করেছে।" },
    { name: "রাকিবুল ইসলাম", rating: 4, text: "প্যাকেজিং খুবই সুন্দর এবং নিরাপদ ছিল। পণ্যের মান নিয়ে কোনো অভিযোগ নেই।" },
    { name: "তাসনিয়া চৌধুরী", rating: 5, text: "দ্বিতীয়বার অর্ডার করলাম। প্রতিবারই একই রকম দারুণ স্বাদ পেয়েছি। ধন্যবাদ।" },
    { name: "মেহেদী হাসান", rating: 5, text: "আমার পুরো পরিবার বালাচাও-এর ফ্যান হয়ে গেছে। বিশেষ করে ঝালটা আমার খুব পছন্দ।" },
    { name: "আয়েশা সিদ্দিকা", rating: 5, text: "হোমমেড খাবারের আসল স্বাদ পেলাম। আপনাদের সার্ভিস সত্যিই প্রশংসার যোগ্য।" },
    { name: "নাজমুল হক", rating: 5, text: "সাশ্রয়ী মূল্যে এত ভালো মানের পণ্য দেওয়ার জন্য সবকিছু.com-কে ধন্যবাদ।" }
];

// --- Bangladesh Divisions and Districts Data ---
const DIVISIONS_AND_DISTRICTS = { "ঢাকা": ["ঢাকা", "গাজীপুর", "কিশোরগঞ্জ", "মানিকগঞ্জ", "মুন্সিগঞ্জ", "নারায়ণগঞ্জ", "নরসিংদী", "টাঙ্গাইল", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর"], "চট্টগ্রাম": ["বান্দরবান", "ব্রাহ্মণবাড়িয়া", "চাঁদপুর", "চট্টগ্রাম", "কুমিল্লা", "কক্সবাজার", "ফেনী", "খাগড়াছড়ি", "লক্ষ্মীপুর", "নোয়াখালী", "রাঙ্গামাটি"], "খুলনা": ["বাগেরহাট", "চুয়াডাঙ্গা", "যশোর", "ঝিনাইদহ", "খুলনা", "কুষ্টিয়া", "মাগুরা", "মেহেরপুর", "নড়াইল", "সাতক্ষীরা"], "রাজশাহী": ["বগুড়া", "চাঁপাইনবাবগঞ্জ", "জয়পুরহাট", "নওগাঁ", "নাটোর", "পাবনা", "রাজশাহী", "সিরাজগঞ্জ"], "বরিশাল": ["বরগুনা", "বরিশাল", "ভোলা", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর"], "সিলেট": ["হবিগঞ্জ", "মৌলভীবাজার", "সুনামগঞ্জ", "সিলেট"], "রংপুর": ["দিনাজপুর", "গাইবান্ধা", "কুড়িগ্রাম", "লালমনিরহাট", "নীলফামারী", "পঞ্চগড়", "রংপুর", "ঠাকুরগাঁও"], "ময়মনসিংহ": ["জামালপুর", "ময়মনসিংহ", "নেত্রকোনা", "শেরপুর"] };
const DISTRICTS_AND_THANAS = { "ঢাকা": ["রমনা", "মতিঝিল", "কোতোয়ালী", "সূত্রাপুর", "ধানমন্ডি", "মোহাম্মদপুর", "তেজগাঁও", "গুলশান", "লালবাগ", "মিরপুর", "পল্লবী", "সবুজবাগ", "ক্যান্টনমেন্ট", "ডেমরা", "হাজারীবাগ", "শ্যামপুর", "বাড্ডা", "কামরাঙ্গীরচর", "খিলগাঁও", "উত্তরা"], "গাজীপুর": ["গাজীপুর সদর", "কালিয়াকৈর", "কালীগঞ্জ", "কাপাসিয়া", "শ্রীপুর"], "কিশোরগঞ্জ": ["কিশোরগঞ্জ সদর", "অষ্টগ্রাম", "বাজিতপুর", "ভৈরব", "হোসেনপুর", "ইটনা", "করিমগঞ্জ", "কটিয়াদী", "কুলিয়ারচর", "মিঠামইন", "নিকলী", "পাকুন্দিয়া", "তাড়াইল"], "মানিকগঞ্জ": ["মানিকগঞ্জ সদর", "দৌলতপুর", "ঘিওর", "হরিরামপুর", "সাটুরিয়া", "শিবালয়", "সিঙ্গাইর"], "মুন্সিগঞ্জ": ["মুন্সিগঞ্জ সদর", "গজারিয়া", "লৌহজং", "সিরাজদিখান", "শ্রীনগর", "টঙ্গিবাড়ী"], "নারায়ণগঞ্জ": ["নারায়ণগঞ্জ সদর", "আড়াইহাজার", "বন্দর", "রূপগঞ্জ", "সিদ্ধিরগঞ্জ", "সোনারগাঁও"], "নরসিংদী": ["নরসিংদী সদর", "বেলাবো", "মনোহরদী", "পলাশ", "রায়পুরা", "শিবপুর"], "টাঙ্গাইল": ["টাঙ্গাইল সদর", "বাসাইল", "ভুঞাপুর", "দেলদুয়ার", "ঘাটাইল", "গোপালপুর", "কালিহাতী", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "ধনবাড়ী"], "ফরিদপুর": ["ফরিদপুর সদর", "আলফাডাঙ্গা", "ভাঙ্গা", "বোয়ালমারী", "চরভদ্রাসন", "মধুখালী", "নগরকান্দা", "সদরপুর", "সালথা"], "গোপালগঞ্জ": ["গোপালগঞ্জ সদর", "কাশিয়ানী", "কোটালীপাড়া", "মুকসুদপুর", "টুঙ্গিপাড়া"], "মাদারীপুর": ["মাদারীপুর সদর", "কালকিনি", "রাজৈর", "শিবচর"], "রাজবাড়ী": ["রাজবাড়ী সদর", "বালিয়াকান্দি", "গোয়ালন্দ", "পাংশা", "কালুখালী"], "শরীয়তপুর": ["শরীয়তপুর সদর", "ভেদরগঞ্জ", "ডামুড্যা", "গোসাইরহাট", "নড়িয়া", "জাজিরা"], "বান্দরবান": ["বান্দরবান সদর", "আলীকদম", "লামা", "নাইক্ষ্যংছড়ি", "রোয়াংছড়ি", "রুমা", "থানচি"], "ব্রাহ্মণবাড়িয়া": ["ব্রাহ্মণবাড়িয়া সদর", "আখাউড়া", "আশুগঞ্জ", "বাঞ্ছারামপুর", "কসবা", "নবীনগর", "নাসিরনগর", "সরাইল", "বিজয়নগর"], "চাঁদপুর": ["চাঁদপুর সদর", "ফরিদগঞ্জ", "হাইমচর", "হাজীগঞ্জ", "কচুয়া", "মতলব উত্তর", "মতলব দক্ষিণ", "শাহরাস্তি"], "চট্টগ্রাম": ["আনোয়ারা", "বাঁশখালী", "বোয়ালখালী", "চন্দনাইশ", "ফটিকছড়ি", "হাটহাজারী", "কর্ণফুলী", "লোহাগড়া", "মীরসরাই", "পটিয়া", "রাঙ্গুনিয়া", "রাউজান", "সন্দ্বীপ", "সাতকানিয়া", "সীতাকুণ্ড"], "কুমিল্লা": ["কুমিল্লা সদর", "বরুড়া", "ব্রাহ্মণপাড়া", "বুড়িচং", "চান্দিনা", "চৌদ্দগ্রাম", "দাউদকান্দি", "দেবীদ্বার", "হোমনা", "লাকসাম", "মনোহরগঞ্জ", "মেঘনা", "মুরাদনগর", "নাঙ্গলকোট", "তিতাস"], "কক্সবাজার": ["কক্সবাজার সদর", "চকরিয়া", "কুতুবদিয়া", "মহেশখালী", "পেকুয়া", "রামু", "টেকনাফ", "উখিয়া"], "ফেনী": ["ফেনী সদর", "ছাগলনাইয়া", "দাগনভূঞা", "পরশুরাম", "সোনাগাজী", "ফুলগাজী"], "খাগড়াছড়ি": ["খাগড়াছড়ি সদর", "দীঘিনালা", "লক্ষ্মীছড়ি", "মহালছড়ি", "মানিকছড়ি", "মাটিরাঙ্গা", "পানছড়ি", "রামগড়"], "লক্ষ্মীপুর": ["লক্ষ্মীপুর সদর", "কমলনগর", "রায়পুর", "রামগঞ্জ", "রামগতি"], "নোয়াখালী": ["নোয়াখালী সদর", "বেগমগঞ্জ", "চাটখিল", "কোম্পানীগঞ্জ", "হাতিয়া", "সেনবাগ", "সুবর্ণচর", "কবিরহাট"], "রাঙ্গামাটি": ["রাঙ্গামাটি সদর", "বাঘাইছড়ি", "বরকল", "কাপ্তাই", "জুরাছড়ি", "লংগদু", "নানিয়ারচর", "রাজস্থলী", "বিলাইছড়ি", "কাউনখালী"], "বাগেরহাট": ["বাগেরহাট সদর", "চিতলমারী", "ফকিরহাট", "কচুয়া", "মোল্লাহাট", "মোংলা", "মোরেলগঞ্জ", "রামপাল", "শরণখোলা"], "চুয়াডাঙ্গা": ["চুয়াডাঙ্গা সদর", "আলমডাঙ্গা", "দামুড়হুদা", "জীবননগর"], "যশোর": ["যশোর সদর", "অভয়নগর", "বাঘারপাড়া", "চৌগাছা", "ঝিকরগাছা", "কেশবপুর", "মণিরামপুর", "শার্শা"], "ঝিনাইদহ": ["ঝিনাইদহ সদর", "হরিণাকুণ্ডু", "কালীগঞ্জ", "কোটচাঁদপুর", "মহেশপুর", "শৈলকুপা"], "খুলনা": ["ডুমুরিয়া", "বটিয়াঘাটা", "দাকোপ", "দিঘলিয়া", "কয়রা", "পাইকগাছা", "ফুলতলা", "রূপসা", "তেরখাদা"], "কুষ্টিয়া": ["কুষ্টিয়া সদর", "ভেড়ামারা", "দৌলতপুর", "কুমারখালী", "খোকসা", "মিরপুর"], "মাগুরা": ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"], "মেহেরপুর": ["মেহেরপুর সদর", "গাংনী", "মুজিবনগর"], "নড়াইল": ["নড়াইল সদর", "কালিয়া", "লোহাগড়া"], "সাতক্ষীরা": ["সাতক্ষীরা সদর", "কলারোয়া", "আশাশুনি", "দেবহাটা", "কালিগঞ্জ", "শ্যামনগর", "তালা"], "বগুড়া": ["বগুড়া সদর", "আদমদীঘি", "ধুনট", "দুপচাঁচিয়া", "গাবতলী", "কাহালু", "নন্দীগ্রাম", "সারিয়াকান্দি", "শাজাহানপুর", "শেরপুর", "শিবগঞ্জ", "সোনাতলা"], "চাঁপাইনবাবগঞ্জ": ["চাঁপাইনবাবগঞ্জ সদর", "গোমস্তাপুর", "নাচোল", "ভোলাহাট", "শিবগঞ্জ"], "জয়পুরহাট": ["জয়পুরহাট সদর", "আক্কেলপুর", "কালাই", "ক্ষেতলাল", "পাঁচবিবি"], "নওগাঁ": ["নওগাঁ সদর", "আত্রাই", "বদলগাছী", "ধামইরহাট", "মান্দা", "মহাদেবপুর", "নিয়ামতপুর", "পত্নীতলা", "পোরশা", "রানীনগর", "সাপাহার"], "নাটোর": ["নাটোর সদর", "বাগাতিপাড়া", "বড়াইগ্রাম", "গুরুদাসপুর", "লালপুর", "সিংড়া", "নলডাঙ্গা"], "পাবনা": ["পাবনা সদর", "ঈশ্বরদী", "আটঘরিয়া", "বেড়া", "ভাঙ্গুড়া", "চাটমোহর", "ফরিদপুর", "সাঁথিয়া", "সুজানগর"], "রাজশাহী": ["বাঘা", "বাগমারা", "চারঘাট", "দুর্গাপুর", "গোদাগাড়ী", "মোহনপুর", "পবা", "পুঠিয়া", "তানোর"], "সিরাজগঞ্জ": ["সিরাজগঞ্জ সদর", "বেলকুচি", "চৌহালী", "কামারখন্দ", "কাজীপুর", "রায়গঞ্জ", "শাহজাদপুর", "তাড়াশ", "উল্লাপাড়া"], "বরগুনা": ["বরগুনা সদর", "আমতলী", "বামনা", "বেতাগী", "পাথরঘাটা", "তালতলী"], "বরিশাল": ["বরিশাল সদর", "আগৈলঝাড়া", "বাবুগঞ্জ", "বানারীপাড়া", "গৌরনদী", "হিজলা", "মেহেন্দিগঞ্জ", "মুলাদী", "উজিরপুর", "বাকেরগঞ্জ"], "ভোলা": ["ভোলা সদর", "বোরহানউদ্দিন", "চরফ্যাশন", "দৌলতখান", "লালমোহন", "মনপুরা", "তজুমদ্দিন"], "ঝালকাঠি": ["ঝালকাঠি সদর", "কাঁঠালিয়া", "নলছিটি", "রাজাপুর"], "পটুয়াখালী": ["পটুয়াখালী সদর", "বাউফল", "দশমিনা", "গলাচিপা", "কলাপাড়া", "মির্জাগঞ্জ", "দুমকি", "রাঙ্গাবালী"], "পিরোজপুর": ["পিরোজপুর সদর", "ভান্ডারিয়া", "কাউখালী", "মঠবাড়িয়া", "নাজিরপুর", "নেসারেবাদ (স্বরূপকাঠি)", "ইন্দুরকানী"], "সিলেট": ["সিলেট সদর", "বালাগঞ্জ", "বিয়ানীবাজার", "কোম্পানীগঞ্জ", "ফেঞ্চুগঞ্জ", "গোলাপগঞ্জ", "গোয়াইনঘাট", "জৈন্তাপুর", "কানাইঘাট", "দক্ষিণ সুরমা", "জকিগঞ্জ", "ওসমানী নগর"], "হবিগঞ্জ": ["হবিগঞ্জ সদর", "আজমিরীগঞ্জ", "বানিয়াচং", "বাহুবল", "চুনারুঘাট", "লাখাই", "মাধবপুর", "নবীগঞ্জ"], "মৌলভীবাজার": ["মৌলভীবাজার সদর", "বড়লেখা", "জুড়ী", "কমলগঞ্জ", "কুলাউড়া", "রাজনগর", "শ্রীমঙ্গল"], "সুনামগঞ্জ": ["সুনামগঞ্জ সদর", "বিশ্বম্ভরপুর", "ছাতক", "দিরাই", "ধর্মপাশা", "দোয়ারাবাজার", "জগন্নাথপুর", "জামালগঞ্জ", "শাল্লা", "তাহিরপুর", "দক্ষিণ সুনামগঞ্জ"], "দিনাজপুর": ["দিনাজপুর সদর", "বিরামপুর", "বীরগঞ্জ", "বিরল", "বোচাগঞ্জ", "চিরিরবন্দর", "ফুলবাড়ী", "ঘোড়াঘাট", "হাকিমপুর", "কাহারোল", "খানসামা", "নবাবগঞ্জ", "পার্বতীপুর"], "গাইবান্ধা": ["গাইবান্ধা সদর", "ফুলছড়ি", "গোবিন্দগঞ্জ", "পলাশবাড়ী", "সাদুল্লাপুর", "সাঘাটা", "সুন্দরগঞ্জ"], "কুড়িগ্রাম": ["কুড়িগ্রাম সদর", "ভূরুঙ্গামারী", "চর রাজিবপুর", "চিলমারী", "ফুলবাড়ী", "নাগেশ্বরী", "রাজারহাট", "রৌমারী", "উলিপুর"], "লালমনিরহাট": ["লালমনিরহাট সদর", "আদিতমারী", "হাতীবান্ধা", "কালীগঞ্জ", "পাটগ্রাম"], "নীলফামারী": ["নীলফামারী সদর", "ডোমার", "ডিমলা", "জলঢাকা", "কিশোরগঞ্জ", "সৈয়দপুর"], "পঞ্চগড়": ["পঞ্চগড় সদর", "আটোয়ারী", "বোদা", "দেবীগঞ্জ", "তেঁতুলিয়া"], "রংপুর": ["রংপুর সদর", "বদরগঞ্জ", "গঙ্গাচড়া", "কাউনিয়া", "মিঠাপুকুর", "পীরগাছা", "পীরগঞ্জ", "তারাগঞ্জ"], "ঠাকুরগাঁও": ["ঠাকুরগাঁও সদর", "বালিয়াডাঙ্গী", "হরিপুর", "পীরগঞ্জ", "রানীশংকৈল"], "জামালপুর": ["জামালপুর সদর", "বকশীগঞ্জ", "দেওয়ানগঞ্জ", "ইসলামপুর", "মাদারগঞ্জ", "মেলান্দহ", "সরিষাবাড়ী"], "ময়মনসিংহ": ["ময়মনসিংহ সদর", "ভালুকা", "ধোবাউড়া", "ফুলবাড়ীয়া", "গফরগাঁও", "গৌরীপুর", "হালুয়াঘাট", "ঈশ্বরগঞ্জ", "মুক্তাগাছা", "নান্দাইল", "ফুলপুর", "তারাকান্দা", "ত্রিশাল"], "নেত্রকোনা": ["নেত্রকোনা সদর", "বারহাট্টা", "দুর্গাপুর", "কেন্দুয়া", "কলমাকান্দা", "মদন", "মোহনগঞ্জ", "পূর্বধলা", "খালিয়াজুরী", "আটপাড়া"], "শেরপুর": ["শেরপুর সদর", "ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শ্রীবরদী"] };
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbzQCjKrtEMu4jj5ppWnnuMpJrOSIkKDVakGgwOeQUfyWWq0lsns14kLd0gMcd0HDS91/exec";

// --- App State & Local Storage ---
let CART = [];
let DOM_REFERENCES = {};

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
  if (variant === 'destructive') toastEl.classList.add('destructive');
  toastEl.classList.add('show');
  setTimeout(() => { toastEl.classList.remove('show'); }, 3500);
}

function getThankYouModalHTML() {
  return `<div class="modal-overlay flex items-center justify-center p-4" style="animation: scale-in 0.3s ease-out;"><div class="modal-content card-modern max-w-md w-full text-center py-8 px-6"><div class="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4"> <span class="text-4xl">🎉</span> </div><h3 class="text-xl font-bold text-foreground mb-2">অর্ডার সফল!</h3><p class="text-muted-foreground">আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। 😊</p></div></div>`;
}

function updateCartCount() {
  const count = CART.reduce((sum, item) => sum + item.quantity, 0);
  if (DOM_REFERENCES.cartItemCountEl) {
    DOM_REFERENCES.cartItemCountEl.textContent = count;
    DOM_REFERENCES.cartItemCountEl.classList.toggle('hidden', count === 0);
  }
}

// --- NEW: Function to submit data to Google Sheet ---
async function submitToGoogleSheet(formData) {
    // Create a new FormData object to send the data
    const data = new FormData();
    // Append each piece of form data to the FormData object
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
        // Check if the request was successful
        if (response.ok) {
            showToast("সফল!", "আপনার অর্ডারটি সফলভাবে পাঠানো হয়েছে।");
            return true;
        } else {
            // If server responds with an error
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
  if (productsToRender.length === 0) {
    gridElement.innerHTML = `<div class="col-span-full text-center py-16"><h3 class="text-2xl font-bold text-foreground">দুঃখিত!</h3><p class="text-muted-foreground mt-2">আপনার সার্চের সাথে মিলে এমন কোনো পণ্য পাওয়া যায়নি।</p></div>`;
  } else {
    gridElement.innerHTML = productsToRender.map(createProductCardHTML).join('');
  }
}

function createProductCardHTML(p) {
  return `
  <div class="card-modern group overflow-hidden block" style="animation: fade-in 0.5s ease-out;">
    <a href="product.html?id=${p.id}" class="p-0 block">
      <div class="relative overflow-hidden">
        <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        ${p.freeDelivery ? `<div class="absolute top-3 right-3 bg-destructive text-destructive-foreground font-bold text-xs px-2 py-1 rounded-md shadow-lg z-10">ফ্রি ডেলিভারি</div>` : ''}
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
        <button class="btn-primary flex-1 py-3 px-4 rounded-md text-base" onclick="orderNow('${p.id}')">অর্ডার করুন</button>
        <button class="btn-ghost py-3 px-4 rounded-md text-base flex items-center justify-center gap-1" onclick="addToCart('${p.id}')">🛒</button>
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

// --- Cart & Order Logic ---
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = CART.find(i => i.id === product.id);
    if (existing) {
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
    if (!product) return;
    const itemForCheckout = [{ ...product, quantity: 1 }];
    localStorage.setItem('shobkichuCheckout', JSON.stringify(itemForCheckout));
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
function normalizeSearchTerm(str) {
  return str.toLowerCase().replace(/\s/g, '').replace(/গ্রাম/g, 'g').replace(/কেজি/g, 'kg');
}

function handleSearch(event) {
    const searchTerm = event.target.value.trim();
    const { searchBar, mobileSearchBar, heroSection, productsSection, productGrid, offerGrid, offersSection } = DOM_REFERENCES;
    
    // Sync both search bars
    if (searchBar && mobileSearchBar) {
        if (event.target.id === 'search-bar') mobileSearchBar.value = event.target.value;
        else searchBar.value = event.target.value;
    }

    const isSearchActive = searchTerm !== '';
    // Hide sections only if they exist on the current page
    if (heroSection) heroSection.style.display = isSearchActive ? 'none' : 'flex';
    if (offersSection) offersSection.style.display = isSearchActive ? 'none' : 'block';


    // Scroll to products only when starting to type
    if (isSearchActive && searchTerm.length === 1 && productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const filteredProducts = isSearchActive ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        normalizeSearchTerm(p.weight).includes(normalizeSearchTerm(searchTerm))
    ) : PRODUCTS;
    
    renderProducts(filteredProducts.filter(p => !p.freeDelivery), productGrid);
    renderProducts(filteredProducts.filter(p => p.freeDelivery), offerGrid);
}


// --- THEME & UI LOGIC ---
function updateTheme() {
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
    
    renderProducts(PRODUCTS.filter(p => !p.freeDelivery), DOM_REFERENCES.productGrid);
    renderProducts(PRODUCTS.filter(p => p.freeDelivery), DOM_REFERENCES.offerGrid);
    if(DOM_REFERENCES.reviewGrid) renderReviews(REVIEWS.slice(0, 3), DOM_REFERENCES.reviewGrid);
    
    DOM_REFERENCES.searchBar.addEventListener('input', handleSearch);
    DOM_REFERENCES.mobileSearchBar.addEventListener('input', handleSearch);
    DOM_REFERENCES.mobileMenuBtn.addEventListener('click', () => DOM_REFERENCES.mobileMenu.classList.toggle('hidden'));
    
    // Desktop Search Bar visibility logic
    DOM_REFERENCES.desktopSearchIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        const { desktopSearchContainer, desktopSearchIcon, searchBar } = DOM_REFERENCES;
        desktopSearchContainer.classList.remove('scale-x-0', 'opacity-0');
        desktopSearchContainer.classList.add('scale-x-100', 'opacity-100');
        desktopSearchIcon.classList.add('hidden');
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
                desktopSearchIcon.classList.remove('hidden');
            }
        }
    });
}

function initializeReviewPage() {
    const reviewGrid = document.getElementById('review-grid-full');
    if(reviewGrid) renderReviews(REVIEWS, reviewGrid);
}

function initializeProductPage() {
    const container = document.getElementById('product-details-container');
    if(!container) return;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = PRODUCTS.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} - সবকিছু.com`;
        container.innerHTML = `
          <div class="animate-fade-in">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div class="relative overflow-hidden rounded-xl card-modern p-2">
                      <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover rounded-lg" />
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
                          <button class="btn-primary flex-1 text-lg py-3 rounded-md" onclick="orderNow('${product.id}')">এখনই অর্ডার করুন</button>
                          <button class="btn-ghost flex-1 text-lg py-3 rounded-md flex items-center justify-center gap-2" onclick="addToCart('${product.id}')">🛒 কার্টে যোগ করুন</button>
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
    
    // Populate divisions
    const divisionSelect = checkoutForm.division;
    divisionSelect.innerHTML = '<option value="" disabled selected>বিভাগ নির্বাচন করুন</option>';
    for (const division in DIVISIONS_AND_DISTRICTS) {
        divisionSelect.innerHTML += `<option value="${division}">${division}</option>`;
    }

    // New function to remove item from cart
    window.removeFromCart = function(productId) {
        const itemIndex = items.findIndex(i => i.id === productId);
        if (itemIndex > -1) {
            const removedItemName = items[itemIndex].name;
            items.splice(itemIndex, 1); // Remove from current checkout list

            // Update global CART variable and its storage
            CART = CART.filter(item => item.id !== productId);
            saveCartToStorage();
            
            // Update checkout-specific storage
            localStorage.setItem('shobkichuCheckout', JSON.stringify(items));

            // Update UI
            renderSummary();
            updateCartCount();
            showToast("পণ্য মুছে ফেলা হয়েছে", `${removedItemName} কার্ট থেকে মুছে ফেলা হয়েছে।`);

            // If cart becomes empty, show the message
            if (items.length === 0) {
                container.innerHTML = `<div class="text-center py-20 card-modern"><h2 class="text-2xl font-bold">আপনার কার্ট খালি</h2><p class="text-muted-foreground mt-2">অর্ডার করার জন্য কোনো পণ্য নির্বাচন করা হয়নি।</p><a href="index.html" class="btn-primary mt-6 inline-block px-6 py-2">কেনাকাটা শুরু করুন</a></div>`;
            }
        }
    }


    function renderSummary() {
        if (items.length === 0) {
            orderSummaryEl.innerHTML = ''; // Clear summary if no items
            return;
        }

        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const productIdsInCheckout = items.map(item => item.id);
        const productsData = PRODUCTS.filter(p => productIdsInCheckout.includes(p.id));
        const isFreeDelivery = productsData.length > 0 && productsData.every(p => p.freeDelivery);

        const selectedDistrict = checkoutForm.district.value;
        let deliveryCharge = 0;
        if (!isFreeDelivery) {
            if (selectedDistrict === 'ঢাকা') deliveryCharge = 70;
            else if (selectedDistrict) deliveryCharge = 130;
        }
        
        const total = subtotal + deliveryCharge;

        orderSummaryEl.innerHTML = `
            <h3 class="text-2xl font-bold text-gradient mb-6">অর্ডার সারাংশ</h3>
            <div class="space-y-4 mb-6">
                ${items.map(item => `
                    <div class="flex justify-between items-center text-sm">
                        <div class="flex items-center gap-3">
                            <img src="${item.image}" class="w-12 h-12 rounded-md object-cover">
                            <div>
                                <p class="font-medium text-foreground">${item.name}</p>
                                <p class="text-muted-foreground">পরিমাণ: ${item.quantity}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <p class="font-medium text-foreground">৳${item.price * item.quantity}</p>
                            <button onclick="removeFromCart('${item.id}')" title="মুছে ফেলুন" class="p-1 text-muted-foreground hover:text-destructive transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="space-y-3 pt-4 border-t border-border">
                <div class="flex justify-between text-muted-foreground"><span>সাব-টোটাল</span><span class="font-medium">৳${subtotal}</span></div>
                <div class="flex justify-between text-muted-foreground"><span>ডেলিভারি চার্জ</span><span class="font-medium">${deliveryCharge === 0 ? (isFreeDelivery ? 'ফ্রি' : '৳0') : `৳${deliveryCharge}`}</span></div>
                <div class="flex justify-between font-bold text-lg text-foreground pt-2 border-t border-border"><span>মোট</span><span>৳${total}</span></div>
            </div>
        `;
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
                if (division && DIVISIONS_AND_DISTRICTS[division]) {
                    DIVISIONS_AND_DISTRICTS[division].forEach(d => { districtSelect.innerHTML += `<option value="${d}">${d}</option>`; });
                    districtSelect.disabled = false;
                } else {
                    districtSelect.disabled = true;
                }
            } else if (e.target.name === 'district') {
                const district = districtSelect.value;
                thanaSelect.innerHTML = '<option value="" disabled selected>থানা/উপজেলা নির্বাচন করুন</option>';
                if (district && DISTRICTS_AND_THANAS[district]) {
                    DISTRICTS_AND_THANAS[district].forEach(t => { thanaSelect.innerHTML += `<option value="${t}">${t}</option>`; });
                    thanaSelect.disabled = false;
                } else {
                    thanaSelect.disabled = true;
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
        const productIdsInCheckout = items.map(item => item.id);
        const productsData = PRODUCTS.filter(p => productIdsInCheckout.includes(p.id));
        const isFreeDelivery = productsData.length > 0 && productsData.every(p => p.freeDelivery);
        let deliveryCharge = 0;
        if (!isFreeDelivery) {
            if (checkoutForm.district.value === 'ঢাকা') deliveryCharge = 70;
            else if (checkoutForm.district.value) deliveryCharge = 130;
        }
        const total = subtotal + deliveryCharge;
        const itemsData = items.map(item => `${item.name} (পরিমাণ: ${item.quantity})`).join(', ');
        
        const fullAddress = `${checkoutForm.address.value}, থানা: ${checkoutForm.thana.value}, জেলা: ${checkoutForm.district.value}, বিভাগ: ${checkoutForm.division.value}`;
        
        const success = await submitToGoogleSheet({
            customerName: checkoutForm.customerName.value,
            phoneNumber: checkoutForm.phoneNumber.value,
            address: fullAddress,
            deliveryLocation: checkoutForm.district.value,
            items: itemsData,
            totalAmount: total
        });
        
        if (success) {
            // Clear cart only if items came from the main cart, not from "Order Now"
            if (JSON.stringify(CART) === JSON.stringify(items)) {
                CART = [];
                saveCartToStorage();
            }
            localStorage.removeItem('shobkichuCheckout');
            DOM_REFERENCES.modalsContainer.innerHTML = getThankYouModalHTML();
            setTimeout(() => { window.location.href = 'index.html'; }, 4000);
        }

        submitBtn.disabled = false;
        submitBtn.textContent = 'অর্ডার কনফার্ম করুন';
    });
    
    renderSummary();
}


// --- GLOBAL INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    DOM_REFERENCES = {
        mainHeader: document.getElementById('main-header'),
        cartBtn: document.getElementById('cart-btn'),
        cartItemCountEl: document.getElementById('cart-item-count'),
        modalsContainer: document.getElementById('modals-container'),
        toastEl: document.getElementById('toast'),
        toastTitleEl: document.getElementById('toast-title'),
        toastDescriptionEl: document.getElementById('toast-description'),
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        themeIconSun: document.getElementById('theme-icon-sun'),
        themeIconMoon: document.getElementById('theme-icon-moon'),
    };
    
    const preferredTheme = localStorage.getItem('shobkichuTheme');
    if (preferredTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateTheme();
    
    loadCartFromStorage();
    updateCartCount();
    
    // Page specific initializers
    if (document.getElementById('product-grid')) initializeHomepage();
    if (document.getElementById('product-details-container')) initializeProductPage();
    if (document.getElementById('review-grid-full')) initializeReviewPage();
    if (document.getElementById('checkout-container')) initializeCheckoutPage();

    // Common Event Listeners
    if (DOM_REFERENCES.themeToggleBtn) {
        DOM_REFERENCES.themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            updateTheme();
        });
    }
    if (DOM_REFERENCES.cartBtn) {
        DOM_REFERENCES.cartBtn.addEventListener('click', goToCheckout);
    }
});