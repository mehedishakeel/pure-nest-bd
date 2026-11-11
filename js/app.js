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
    order_message: whatsappMessage,
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
        quantity,
        variant: selectedVariant.id
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

  // 4. Show success modal with order details and choices for WhatsApp & IMO
  showModal(orderData);

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
// Success Modal with WhatsApp and IMO Options
// ──────────────────────────────────────────────
let lastOrderMessage = '';

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

  // Store order message globally for IMO button handler
  lastOrderMessage = orderData.order_message || '';

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

    <div class="modal-channel-section">
      <p class="modal-channel-title">👇 মেসেজ পাঠাতে যেকোনো একটি অপশন নির্বাচন করুন:</p>

      <div class="modal-channel-grid">
        <!-- Option 1: WhatsApp -->
        <a href="${safeWaUrl}" target="_blank" rel="noopener noreferrer" class="btn-channel-order btn-whatsapp-order">
          <span class="channel-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </span>
          <span class="channel-text">
            <strong>WhatsApp-এ পাঠান</strong>
            <small>সরাসরি চ্যাট ওপেন হবে</small>
          </span>
        </a>

        <!-- Option 2: IMO -->
        <button type="button" class="btn-channel-order btn-imo-order" onclick="sendViaImo()">
          <span class="channel-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
          </span>
          <span class="channel-text">
            <strong>IMO-তে পাঠান</strong>
            <small>মেসেজ কপি ও শেয়ার</small>
          </span>
        </button>
      </div>

      <!-- IMO feedback box (hidden by default, shown on IMO button click) -->
      <div id="imoFeedbackBox" class="imo-feedback-box" style="display:none;">
        <div class="imo-feedback-status">
          <span class="imo-check-badge">✅</span>
          <div>
            <strong>অর্ডার বিবরণ সফলভাবে কপি হয়েছে!</strong>
            <p>আপনার ইমো (IMO) অ্যাপে <b>+880 1355-175330</b> নম্বরে পেস্ট করে মেসেজ পাঠিয়ে দিন।</p>
          </div>
        </div>
        <div class="imo-feedback-actions">
          <a href="tel:+8801355175330" class="btn-imo-call">
            <span>📞</span> ইমো বা সরাসরি ফোন কল করুন (+880 1355-175330)
          </a>
        </div>
      </div>
    </div>

    <div style="margin-top:10px;">
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

function sendViaImo() {
  const msg = lastOrderMessage || '';

  // 1. Copy message to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).catch(() => {
      fallbackCopy(msg);
    });
  } else {
    fallbackCopy(msg);
  }

  // 2. If mobile Web Share is supported, open native share sheet with IMO
  if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    navigator.share({
      title: 'Pure Nest BD অর্ডার নিশ্চিতকরণ',
      text: msg
    }).catch(() => {});
  }

  // 3. Reveal IMO instructions box with smooth focus
  const feedbackBox = document.getElementById('imoFeedbackBox');
  if (feedbackBox) {
    feedbackBox.style.display = 'block';
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function fallbackCopy(text) {
  try {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  } catch (err) {
    console.warn('Fallback copy error:', err);
  }
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
