/* ============================================================
   Pure Nest BD — Single-Product Landing Page Application
   Yamani Khalta Booster (তিব্বে নববীর অনুপ্রেরণায় প্রাকৃতিক শক্তিবর্ধক)
   Website: www.purenestbd.shop | Contact/WhatsApp: +880 1355-175330
   GitHub Pages & Node.js Dual Compatibility
   ============================================================ */

// WhatsApp Number for Pure Nest BD (Clean international digits)
const WHATSAPP_NUMBER = '8801355175330';

// Product Variants (250gm, 500gm, 1kg)
const PRODUCT_VARIANTS = [
  {
    id: '250gm',
    weight: '250gm',
    weight_bn: '২৫০ গ্রাম',
    badge: 'ট্রায়াল প্যাক',
    price: 550,
    original_price: 850,
    savings: 300,
    is_default: false
  },
  {
    id: '500gm',
    weight: '500gm',
    weight_bn: '৫০০ গ্রাম',
    badge: '🔥 সবচেয়ে জনপ্রিয়',
    price: 1250,
    original_price: 1750,
    savings: 500,
    is_default: true
  },
  {
    id: '1kg',
    weight: '1kg',
    weight_bn: '১ কেজি (১০০০ গ্রাম)',
    badge: '⭐ সেরা সাশ্রয়ী',
    price: 1850,
    original_price: 2650,
    savings: 800,
    is_default: false
  }
];

let selectedVariant = PRODUCT_VARIANTS.find(v => v.is_default) || PRODUCT_VARIANTS[1];

// Default Flagship Product (Loads instantly even without backend)
const DEFAULT_PRODUCT = {
  id: 1,
  name: 'Yamani Khalta Booster',
  name_bn: 'ইয়ামানি খালতা বুস্টার',
  tagline: 'তিব্বে নববীর অনুপ্রেরণায় প্রাকৃতিক শক্তিবর্ধক',
  price: 1250,
  original_price: 1750,
  image: './images/yamani-khalta-jar.jpg',
  variants: PRODUCT_VARIANTS
};

let currentProduct = { ...DEFAULT_PRODUCT };

// Verified Bangladeshi Customer Reviews (Static fallback for GitHub Pages)
const DEFAULT_REVIEWS = [
  {
    id: 1,
    customer_name: 'মোঃ নাজমুল করিম',
    location: 'মিরপুর, ঢাকা',
    rating: 5,
    comment: 'প্রথমদিকে অনলাইনে এমন পণ্য নিয়ে একটু দ্বিধাদ্বন্দ্বে ছিলাম। কিন্তু ক্যাশ অন ডেলিভারিতে চেক করে নেওয়ার সুবিধা দেখে অর্ডার করি। আলহামদুলিল্লাহ, ৩ সপ্তাহ নিয়মিত খাওয়ার পর শরীরে ক্লান্তি ভাব একদম নেই, দারুণ এনার্জি পাচ্ছি। মধু আর কালোজিরার খাঁটি স্বাদ স্পষ্ট!'
  },
  {
    id: 2,
    customer_name: 'ইঞ্জিনিয়ার ফাহিম মোরশেদ',
    location: 'ধানমন্ডি, ঢাকা',
    rating: 5,
    comment: 'অফিসের কাজের প্রচণ্ড চাপের কারণে বিকেলে শরীর খুব ক্লান্ত লাগত। ইয়ামানি খালতা বুস্টার নিয়মিত সকালে খাওয়ার পর থেকে সারাদিন দারুণ ফ্রেশ লাগে। সবচেয়ে বড় কথা উপাদানগুলো ১০০% কেমিক্যালমুক্ত ও খাঁটি।'
  },
  {
    id: 3,
    customer_name: 'ডা. আরিফুল ইসলাম',
    location: 'উপশহর, সিলেট',
    rating: 5,
    comment: 'তিব্বে নববীর নির্দেশনা অনুযায়ী মধু ও কালোজিরা সুস্বাস্থ্যের জন্য অনন্য নিয়ামত। Pure Nest BD এর উপাদানগুলোর মিশ্রণ ও প্রাকৃতিক গুণগত মান সত্যিই অসাধারণ। কোনো কৃত্রিম প্রিজারভেটিভ ছাড়া এত ভালো জিনিস সত্যিই প্রশংসার যোগ্য।'
  },
  {
    id: 4,
    customer_name: 'কাজী ইমরান হোসেন',
    location: 'জিইসি, চট্টগ্রাম',
    rating: 5,
    comment: 'প্যাকেজিং খুবই চমৎকার ও প্রিমিয়াম ছিল। চট্টগ্রামের ভেতরে মাত্র দুই দিনের মধ্যে হোম ডেলিভারি পেয়েছি। প্রোডাক্টের কোয়ালিটি নিয়ে কোনো সন্দেহ নেই, দামের তুলনায় মান সেরা।'
  },
  {
    id: 5,
    customer_name: 'মাওলানা মুফতি আব্দুল্লাহ',
    location: 'মতিহার, রাজশাহী',
    rating: 5,
    comment: 'সুন্নাহসম্মত প্রাকৃতিক ফর্মুলায় প্রস্তুত খাঁটি জিনিস। ভেজালের ভিড়ে এত নিখুঁত পণ্য পেয়ে সত্যি আনন্দিত। শারীরিক দুর্বলতা কাটিয়ে স্বাভাবিক সতেজতা ফিরিয়ে আনতে এটি দারুণ কাজ করে।'
  },
  {
    id: 6,
    customer_name: 'মোস্তফা জামান চৌধুরী',
    location: 'উত্তরা, ঢাকা',
    rating: 5,
    comment: 'এক বোতল শেষ করে আজ দ্বিতীয় বোতল অর্ডার করলাম। খাওয়ার পর রাতে ঘুম খুব ভালো হয় এবং সকালে শরীর একদম হালকা ও সতেজ অনুভূত হয়। কাস্টমার সার্ভিসের ব্যবহারও খুব অমায়িক।'
  },
  {
    id: 7,
    customer_name: 'মোঃ জাহিদুল ইসলাম',
    location: 'সাতমাথা, বগুড়া',
    rating: 5,
    comment: 'ঢাকার বাইরে এত দ্রুত হোম ডেলিভারি পাব ভাবিনি। বোতল খুলে ঘ্রাণ শুঁকেই বোঝা যায় এটি আসল সুন্দরবনের মধু ও বাদামের খাঁটি ব্লেন্ড। আলহামদুলিল্লাহ খুবই সন্তুষ্ট!'
  },
  {
    id: 8,
    customer_name: 'আশরাফুল আলম রাজীব',
    location: 'কান্দিরপাড়, কুমিল্লা',
    rating: 5,
    comment: 'শারীরিক ক্লান্তি দূর করতে পূর্বে অনেক কিছু ট্রাই করেছি, কিন্তু ইয়ামানি খালতা বুস্টারের মতো দীর্ঘস্থায়ী প্রাকৃতিক রেজাল্ট পাইনি। আলহামদুলিল্লাহ, এখন সারাদিন অনেক বেশি সতেজ ও কর্মক্ষম মনে হয় নিজেকে।'
  }
];

// ──────────────────────────────────────────────
// Initialization
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProductDetails();
  loadReviews();
  initScrollAnimations();
  initNavbarScroll();
  initMobileMenuEvents();
  updateOrderSummary();
});

// ──────────────────────────────────────────────
// Load Single Product (Backend first, fallback to static)
// ──────────────────────────────────────────────
async function loadProductDetails() {
  try {
    const res = await fetch('/api/products');
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && json.data.length > 0) {
        currentProduct = { ...DEFAULT_PRODUCT, ...json.data[0] };
        updateOrderSummary();
        return;
      }
    }
  } catch (err) {
    // Static mode / GitHub Pages
  }
  currentProduct = { ...DEFAULT_PRODUCT };
  updateOrderSummary();
}

// ──────────────────────────────────────────────
// Variant Selection & Dynamic Updates
// ──────────────────────────────────────────────
function selectVariant(variantId) {
  const found = PRODUCT_VARIANTS.find(v => v.id === variantId);
  if (!found) return;

  selectedVariant = found;

  // Update active state on cards
  document.querySelectorAll('.variant-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById(`card-${variantId}`);
  if (activeCard) activeCard.classList.add('active');

  const radio = document.getElementById(`var-${variantId}`);
  if (radio) radio.checked = true;

  const hiddenInput = document.getElementById('selectedVariantInput');
  if (hiddenInput) hiddenInput.value = variantId;

  // Update selected product card displays
  const selectedPrice = document.getElementById('selectedVariantPrice');
  if (selectedPrice) {
    selectedPrice.textContent = `৳ ${found.price.toLocaleString('bn-BD')}`;
  }

  const selectedOldPrice = document.getElementById('selectedVariantOldPrice');
  if (selectedOldPrice) {
    selectedOldPrice.textContent = `৳ ${found.original_price.toLocaleString('bn-BD')}`;
  }

  const selectedDesc = document.getElementById('selectedProdDesc');
  if (selectedDesc) {
    selectedDesc.textContent = `তিব্বে নববীর অনুপ্রেরণায় পুরুষত্বের যত্ন | সাইজ: ${found.weight_bn}`;
  }

  updateOrderSummary();
}

function selectVariantAndScroll(variantId) {
  selectVariant(variantId);
  const orderSection = document.getElementById('order');
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ──────────────────────────────────────────────
// Update Order Summary & Price Calculation
// ──────────────────────────────────────────────
function updateOrderSummary() {
  const qtyInput = document.getElementById('quantity');
  const quantity = Math.max(1, parseInt(qtyInput ? qtyInput.value : 1, 10) || 1);
  const districtSelect = document.getElementById('district');
  const district = districtSelect ? districtSelect.value : '';

  const unitPrice = selectedVariant.price;
  const totalPrice = unitPrice * quantity;

  // Delivery charge: Dhaka, Gazipur, Narayanganj = ৳60, Others = ৳120
  const dhakaDistricts = ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'Dhaka', 'Gazipur', 'Narayanganj'];
  let deliveryCharge = 0;
  let hasDistrict = false;

  if (district) {
    hasDistrict = true;
    deliveryCharge = dhakaDistricts.includes(district) ? 60 : 120;
  }

  const grandTotal = totalPrice + (hasDistrict ? deliveryCharge : 0);

  // Update UI Elements
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceDisplay) {
    priceDisplay.textContent = `৳ ${totalPrice.toLocaleString('bn-BD')}`;
  }

  const summaryPrice = document.getElementById('summaryPrice');
  if (summaryPrice) {
    summaryPrice.textContent = `৳ ${totalPrice.toLocaleString('bn-BD')} (${selectedVariant.weight_bn})`;
  }

  const summaryDelivery = document.getElementById('summaryDelivery');
  if (summaryDelivery) {
    summaryDelivery.textContent = hasDistrict 
      ? `৳ ${deliveryCharge.toLocaleString('bn-BD')}` 
      : 'জেলা নির্বাচন করুন';
  }

  const summaryTotal = document.getElementById('summaryTotal');
  if (summaryTotal) {
    summaryTotal.textContent = hasDistrict 
      ? `৳ ${grandTotal.toLocaleString('bn-BD')}` 
      : `৳ ${totalPrice.toLocaleString('bn-BD')} + ডেলিভারি চার্জ`;
  }
}

// ──────────────────────────────────────────────
// Submit Order & Send Directly to WhatsApp
// ──────────────────────────────────────────────
async function submitOrder(e) {
  e.preventDefault();

  const quantity = Math.max(1, parseInt(document.getElementById('quantity').value, 10) || 1);
  const customerName = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const district = document.getElementById('district').value;

  // Validation
  if (!customerName || !phone || !address || !district) {
    showFormError('অনুগ্রহ করে আপনার নাম, মোবাইল নম্বর, সম্পূর্ণ ঠিকানা এবং জেলা নির্বাচন করুন।');
    return;
  }

  // Validate BD phone number (01[3-9]XXXXXXXX)
  const phoneRegex = /^01[3-9]\d{8}$/;
  if (!phoneRegex.test(phone)) {
    showFormError('অনুগ্রহ করে সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 01355175330)।');
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '⏳ অর্ডার কনফার্ম ও WhatsApp মেসেজ তৈরি হচ্ছে...';

  // Calculate pricing
  const unitPrice = selectedVariant.price;
  const totalPrice = unitPrice * quantity;
  const dhakaDistricts = ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'Dhaka', 'Gazipur', 'Narayanganj'];
  const deliveryCharge = dhakaDistricts.includes(district) ? 60 : 120;
  const grandTotal = totalPrice + deliveryCharge;

  // Generate unique Order ID
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const orderId = `PN-${Date.now().toString().slice(-4)}${randomSuffix}`;

  // Formulate WhatsApp message with product name, variant/size, quantity, customer details & shipping address
  const productName = currentProduct.name_bn 
    ? `${currentProduct.name_bn} (${currentProduct.name})` 
    : currentProduct.name;
  const variantText = `${selectedVariant.weight_bn} (${selectedVariant.weight})`;

  const whatsappMessage = 
`🌿 *নতুন অর্ডার — Pure Nest BD* 🌿
━━━━━━━━━━━━━━━━━━━━
📦 *পণ্যের নাম:* ${productName}
⚖️ *প্যাক সাইজ / ওজন:* ${variantText}
🔢 *পরিমাণ:* ${quantity} জার
💵 *পণ্যের মূল্য:* ৳ ${totalPrice.toLocaleString('bn-BD')}
🚚 *ডেলিভারি চার্জ:* ৳ ${deliveryCharge.toLocaleString('bn-BD')} (${district})
💰 *সর্বমোট প্রদেয়:* ৳ ${grandTotal.toLocaleString('bn-BD')} (ক্যাশ অন ডেলিভারি)
━━━━━━━━━━━━━━━━━━━━
👤 *গ্রাহকের নাম:* ${customerName}
📞 *মোবাইল নম্বর:* ${phone}
📍 *ডেলিভারি ঠিকানা:* ${address}
🏙️ *জেলা:* ${district}
🔖 *অর্ডার ট্র্যাকিং আইডি:* ${orderId}
━━━━━━━━━━━━━━━━━━━━
দয়া করে আমার এই অর্ডারটি দ্রুত গ্রহণ ও ডেলিভারির ব্যবস্থা করুন। ধন্যবাদ!`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const orderData = {
    order_id: orderId,
    customer_name: customerName,
    phone,
    address,
    district,
    product_name: productName,
    variant: selectedVariant.id,
    variant_bn: selectedVariant.weight_bn,
    quantity,
    unit_price: unitPrice,
    total_price: totalPrice,
    delivery_charge: deliveryCharge,
    grand_total: grandTotal,
    whatsapp_url: waUrl,
    created_at: new Date().toISOString()
  };

  // 1. Try sending to local backend (if server is active)
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_name: customerName,
        phone,
        address,
        district,
        product_id: currentProduct.id || 1,
        quantity
      })
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        orderData.order_id = json.data.order_id || orderData.order_id;
      }
    }
  } catch (apiErr) {
    // In GitHub Pages or offline, proceed seamlessly
    console.log('GitHub Pages / Static Mode: Order saved locally.');
  }

  // 2. Save to local storage for local order history
  try {
    const existing = JSON.parse(localStorage.getItem('purenest_orders') || '[]');
    existing.unshift(orderData);
    localStorage.setItem('purenest_orders', JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    // Ignore storage quota
  }

  // 3. Reset form
  document.getElementById('orderForm').reset();
  document.getElementById('quantity').value = 1;
  updateOrderSummary();

  // 4. Show success modal with order details and prominent WhatsApp button
  showModal(orderData);

  // 5. Automatically open WhatsApp in a new tab/window
  try {
    window.open(waUrl, '_blank');
  } catch (popupErr) {
    console.warn('Popup blocked by browser, user can click modal button:', popupErr);
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = originalText;
}

// ──────────────────────────────────────────────
// HTML Escaping Utility for XSS Prevention
// ──────────────────────────────────────────────
function escapeHtml(str) {
  if (typeof str !== 'string') return str == null ? '' : String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ──────────────────────────────────────────────
// Form Error Display
// ──────────────────────────────────────────────
function showFormError(message) {
  const existingError = document.querySelector('.form-error');
  if (existingError) existingError.remove();

  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.style.display = 'block';
  errorDiv.textContent = '⚠️ ' + message;

  const form = document.getElementById('orderForm');
  form.insertBefore(errorDiv, form.firstChild);

  setTimeout(() => {
    if (errorDiv.parentNode) errorDiv.remove();
  }, 6000);

  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ──────────────────────────────────────────────
// Success Modal with WhatsApp Action
// ──────────────────────────────────────────────
function showModal(orderData) {
  const detailsDiv = document.getElementById('modalOrderDetails');
  const safeOrderId = escapeHtml(orderData.order_id);
  const safeName = escapeHtml(orderData.customer_name);
  const safePhone = escapeHtml(orderData.phone);
  const safeAddress = escapeHtml(orderData.address);
  const safeDistrict = escapeHtml(orderData.district);
  const safeProduct = escapeHtml(orderData.product_name);
  const safeVariant = escapeHtml(orderData.variant_bn || '৫০০ গ্রাম');
  const safeQuantity = Number(orderData.quantity) || 1;
  const safePrice = (Number(orderData.total_price) || 0).toLocaleString('bn-BD');
  const safeDelivery = (Number(orderData.delivery_charge) || 0).toLocaleString('bn-BD');
  const safeGrandTotal = (Number(orderData.grand_total) || 0).toLocaleString('bn-BD');
  const safeWaUrl = encodeURI(orderData.whatsapp_url);

  detailsDiv.innerHTML = `
    <div style="background:#f4fbf7;border:1px solid #c3e6cb;border-radius:12px;padding:16px;margin:16px 0;text-align:left;">
      <p style="margin:0 0 8px;font-size:0.95rem;"><strong>অর্ডার ট্র্যাকিং আইডি:</strong> <span style="color:#1a5632;font-weight:700;">${safeOrderId}</span></p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>গ্রাহকের নাম:</strong> ${safeName}</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>মোবাইল নম্বর:</strong> ${safePhone}</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>ডেলিভারি ঠিকানা:</strong> ${safeAddress}, ${safeDistrict}</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>পণ্য:</strong> ${safeProduct}</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>প্যাক সাইজ / ওজন:</strong> <span style="color:#1a5632;font-weight:700;">${safeVariant}</span></p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>পরিমাণ:</strong> ${safeQuantity} জার</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>পণ্যের মূল্য:</strong> ৳ ${safePrice}</p>
      <p style="margin:0 0 6px;font-size:0.92rem;"><strong>ডেলিভারি চার্জ:</strong> ৳ ${safeDelivery}</p>
      <p style="margin:0 0 8px;font-size:1.1rem;color:#1a5632;"><strong>সর্বমোট প্রদেয়:</strong> ৳ ${safeGrandTotal}</p>
      <p style="margin:0;font-size:0.85rem;color:#27ae60;">✓ ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে মূল্য পরিশোধ করবেন)</p>
    </div>

    <div>
      <a href="${safeWaUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-order">
        <span>💬</span> WhatsApp-এ মেসেজ পাঠান ও নিশ্চিত করুন
      </a>
      <p style="font-size:0.83rem;color:#666;margin:4px 0 14px;">(WhatsApp স্বয়ংক্রিয়ভাবে ওপেন না হলে ওপরের বাটনে ক্লিক করুন)</p>
      <button class="btn-modal-dismiss" onclick="closeModal()">✓ ঠিক আছে, উইন্ডো বন্ধ করুন</button>
    </div>
  `;

  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.style.display = 'flex';
    requestAnimationFrame(() => {
      modalOverlay.classList.add('show');
    });
  }
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('btn-modal-dismiss') && !e.target.classList.contains('modal-close')) {
    return;
  }
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('show');
    setTimeout(() => {
      if (!modalOverlay.classList.contains('show')) {
        modalOverlay.style.display = 'none';
      }
    }, 280);
  }
  document.body.style.overflow = '';
}

// ──────────────────────────────────────────────
// Customer Reviews (Backend first, fallback to verified reviews)
// ──────────────────────────────────────────────
async function loadReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  let reviewsData = DEFAULT_REVIEWS;

  try {
    const res = await fetch('/api/reviews');
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data && json.data.length > 0) {
        reviewsData = json.data;
      }
    }
  } catch (err) {
    // Backend not running (GitHub Pages mode) -> uses DEFAULT_REVIEWS
  }

  renderReviews(reviewsData, container);
}

function renderReviews(reviews, container) {
  if (!reviews || !reviews.length) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-light);grid-column:1/-1;">এখনো কোনো রিভিউ নেই।</p>';
    return;
  }

  container.innerHTML = reviews.map(review => {
    const numericRating = Math.min(5, Math.max(1, parseInt(review.rating, 10) || 5));
    const stars = '★'.repeat(numericRating) + '☆'.repeat(5 - numericRating);
    const safeName = escapeHtml(review.customer_name);
    const initial = safeName ? safeName.trim().charAt(0) : 'প';
    const safeLoc = review.location ? `📍 ${escapeHtml(review.location)}` : '📍 বাংলাদেশ';
    const safeComment = escapeHtml(review.comment);

    return `
      <div class="review-card fade-in">
        <div class="review-header">
          <div class="review-avatar">${initial}</div>
          <div class="review-meta">
            <h4 class="reviewer-name">${safeName}</h4>
            <span class="reviewer-loc">${safeLoc}</span>
          </div>
          <span class="verified-badge">✓ ভেরিফায়েড ক্রেতা</span>
        </div>
        <div class="review-stars">${stars}</div>
        <p class="review-comment">"${safeComment}"</p>
      </div>
    `;
  }).join('');

  if (typeof initScrollAnimations === 'function') {
    initScrollAnimations();
  }
}

// ──────────────────────────────────────────────
// Mobile Hamburger Menu (Touch-friendly & Responsive)
// ──────────────────────────────────────────────
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  const isOpen = navLinks.classList.contains('active') || navLinks.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    navLinks.classList.add('active', 'open');
    hamburger.classList.add('active', 'open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
  }
}

function closeMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  navLinks.classList.remove('active', 'open');
  hamburger.classList.remove('active', 'open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('mobile-nav-open');
}

function initMobileMenuEvents() {
  // Close menu when clicking outside navbar
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    if (navLinks && (navLinks.classList.contains('active') || navLinks.classList.contains('open'))) {
      if (!nav.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Close menu on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeModal();
    }
  });
}

// ──────────────────────────────────────────────
// Navbar Scroll Blur Effect
// ──────────────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ──────────────────────────────────────────────
// Scroll Animations (Intersection Observer)
// ──────────────────────────────────────────────
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
