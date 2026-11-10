const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// ============================================================
// Pure Nest BD — Express Server
// Premium Men's Wellness & Grooming E-Commerce Backend
// ============================================================

const app = express();
const PORT = process.env.PORT || 3000;

// --------------- Security & Headers ---------------
app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// --------------- Middleware ---------------
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Serve static assets from public folder or project root (GitHub Pages compatibility)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// --------------- Database Setup (JSON Store) ---------------
const DB_FILE = path.join(__dirname, 'data', 'database.json');

function ensureDataDirectory() {
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getDefaultData() {
  return {
    products: [
      {
        id: 1,
        name: 'Yamani Khalta Booster',
        name_bn: 'ইয়ামানি খালতা বুস্টার',
        tagline: 'তিব্বে নববীর অনুপ্রেরণায় পুরুষত্বের যত্ন',
        description: 'তিব্বে নববীর অনুপ্রেরণায় তৈরি ১০০% প্রাকৃতিক বিশেষ শক্তিবর্ধক। খাঁটি মধু, কালোজিরা, বিভিন্ন প্রকার প্রিমিয়াম বাদাম ও ভেষজ উপাদানের সমন্বয়ে তৈরি। রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে ও স্ট্যামিনা বাড়ায়।',
        price: 1250,
        original_price: 1750,
        image: '/images/yamani-khalta-jar.jpg',
        banner_image: '/images/yamani-khalta-banner.jpg',
        category: 'booster',
        is_featured: 1,
        stock: 100,
        variants: [
          { id: '250gm', weight: '250gm', weight_bn: '২৫০ গ্রাম', price: 550, original_price: 850, savings: 300 },
          { id: '500gm', weight: '500gm', weight_bn: '৫০০ গ্রাম', price: 1250, original_price: 1750, savings: 500, is_default: true },
          { id: '1kg', weight: '1kg', weight_bn: '১ কেজি (১০০০ গ্রাম)', price: 1850, original_price: 2650, savings: 800 }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        customer_name: 'রাকিব হাসান',
        rating: 5,
        comment: 'ইয়ামানি খালতা বুস্টার ব্যবহার করে অসাধারণ রেজাল্ট পেয়েছি! শরীরে দারুণ এনার্জি কাজ করে। প্যাকেজিং এবং খাঁটি উপাদানের জন্য Pure Nest BD-কে ধন্যবাদ।',
        product_id: 1,
        created_at: new Date('2026-10-15T10:30:00Z').toISOString()
      },
      {
        id: 2,
        customer_name: 'মাওলানা আবুল কাশেম',
        rating: 5,
        comment: 'তিব্বে নববীর ফর্মুলায় তৈরি এত খাঁটি জিনিস বর্তমান বাজারে পাওয়া দুর্লভ। সম্পূর্ণ কেমিক্যালমুক্ত ও প্রাকৃতিক স্বাদ। নিশ্চিন্তে নেওয়া যায়।',
        product_id: 1,
        created_at: new Date('2026-10-20T14:15:00Z').toISOString()
      },
      {
        id: 3,
        customer_name: 'সাকিব আল হাসান',
        rating: 5,
        comment: 'ঢাকার ভেতরে ২৪ ঘণ্টার মধ্যেই ক্যাশ অন ডেলিভারিতে পেয়ে গেছি। পণ্য হাতে পেয়ে চেক করে টাকা দিয়েছি। সার্ভিস অসাধারণ!',
        product_id: 1,
        created_at: new Date('2026-10-28T18:40:00Z').toISOString()
      },
      {
        id: 4,
        customer_name: 'তানভীর আহমেদ',
        rating: 5,
        comment: 'Pure Nest BD থেকে দ্বিতীয়বার অর্ডার করলাম। কোয়ালিটি সবসময় ১০০% খাঁটি থাকে। প্রত্যেকে ট্রাই করতে পারেন।',
        product_id: 1,
        created_at: new Date('2026-11-02T11:20:00Z').toISOString()
      }
    ],
    orders: []
  };
}

function readDb() {
  ensureDataDirectory();
  if (!fs.existsSync(DB_FILE)) {
    const initial = getDefaultData();
    writeDb(initial);
    return initial;
  }
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading database file, resetting to default:', err);
    const initial = getDefaultData();
    writeDb(initial);
    return initial;
  }
}

function writeDb(data) {
  ensureDataDirectory();
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Initialize database file on startup
readDb();

// --------------- API Routes ---------------

// GET /api/products — Return all products
app.get('/api/products', (req, res) => {
  try {
    const db = readDb();
    res.json({ success: true, data: db.products || [] });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch products.' });
  }
});

// GET /api/products/featured — Return featured products only
app.get('/api/products/featured', (req, res) => {
  try {
    const db = readDb();
    const featured = (db.products || []).filter(p => p.is_featured === 1);
    res.json({ success: true, data: featured });
  } catch (err) {
    console.error('Error fetching featured products:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch featured products.' });
  }
});

// GET /api/products/:id — Return a single product by ID
app.get('/api/products/:id', (req, res) => {
  try {
    const db = readDb();
    const productId = parseInt(req.params.id, 10);
    const product = (db.products || []).find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }
    res.json({ success: true, data: product });
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch product.' });
  }
});

// POST /api/orders — Create a new order (Cash on Delivery)
app.post('/api/orders', (req, res) => {
  try {
    const { customer_name, phone, address, district, product_id, quantity, variant } = req.body;

    // Validation
    if (!customer_name || !phone || !address || !district || !product_id || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'সব তথ্য পূরণ করুন। (All fields are required: customer_name, phone, address, district, product_id, quantity)'
      });
    }

    const cleanName = String(customer_name).trim().slice(0, 100);
    const cleanPhone = String(phone).trim().slice(0, 20);
    const cleanAddress = String(address).trim().slice(0, 500);
    const cleanDistrict = String(district).trim().slice(0, 50);
    const cleanVariant = variant ? String(variant).trim().slice(0, 30) : '500gm';

    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: 'অনুগ্রহ করে সঠিক ১১ ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন।'
      });
    }

    const db = readDb();
    const product = (db.products || []).find(p => p.id === parseInt(product_id, 10));
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Determine variant unit price
    const variantPricing = { '250gm': 550, '500gm': 1250, '1kg': 1850 };
    const unitPrice = variantPricing[cleanVariant] || (product.price || 1250);

    const qty = Math.min(20, Math.max(1, parseInt(quantity, 10) || 1));
    const total_price = unitPrice * qty;

    // Delivery charge: Dhaka area = ৳60, Outside = ৳120
    const dhakaDistricts = ['ঢাকা', 'গাজীপুর', 'নারায়ণগঞ্জ', 'Dhaka', 'Gazipur', 'Narayanganj'];
    const delivery_charge = dhakaDistricts.includes(cleanDistrict) ? 60 : 120;
    const grand_total = total_price + delivery_charge;

    const order_id = 'PN-' + Date.now();
    const newOrder = {
      id: (db.orders && db.orders.length > 0) ? Math.max(...db.orders.map(o => o.id || 0)) + 1 : 1,
      order_id,
      customer_name: cleanName,
      phone: cleanPhone,
      address: cleanAddress,
      district: cleanDistrict,
      product_id: product.id,
      product_name: product.name,
      product_name_bn: product.name_bn,
      variant: cleanVariant,
      quantity: qty,
      unit_price: unitPrice,
      total_price,
      delivery_charge,
      grand_total,
      payment_method: 'cod',
      status: 'pending',
      created_at: new Date().toISOString()
    };

    if (!db.orders) db.orders = [];
    db.orders.unshift(newOrder);
    writeDb(db);

    console.log(`📦 New Order Placed: ${order_id} by ${customer_name} (${grand_total} BDT)`);

    res.status(201).json({
      success: true,
      message: 'অর্ডার সফলভাবে সম্পন্ন হয়েছে! (Order placed successfully!)',
      data: newOrder
    });
  } catch (err) {
    console.error('Error creating order:', err.message);
    res.status(500).json({ success: false, message: 'Failed to create order.' });
  }
});

// GET /api/orders/:orderId — Track an order by its order_id
app.get('/api/orders/:orderId', (req, res) => {
  try {
    const db = readDb();
    const order = (db.orders || []).find(o => o.order_id === req.params.orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found. Please check your order ID.' });
    }
    res.json({ success: true, data: order });
  } catch (err) {
    console.error('Error tracking order:', err.message);
    res.status(500).json({ success: false, message: 'Failed to track order.' });
  }
});

// GET /api/reviews — Get all reviews (newest first)
app.get('/api/reviews', (req, res) => {
  try {
    const db = readDb();
    const reviews = [...(db.reviews || [])].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    res.json({ success: true, data: reviews });
  } catch (err) {
    console.error('Error fetching reviews:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch reviews.' });
  }
});

// POST /api/reviews — Add a new customer review
app.post('/api/reviews', (req, res) => {
  try {
    const { customer_name, rating, comment, product_id } = req.body;

    if (!customer_name || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: 'customer_name, rating, and comment are required.'
      });
    }

    const numericRating = parseInt(rating, 10);
    if (numericRating < 1 || numericRating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5.'
      });
    }

    const cleanName = String(customer_name).trim().slice(0, 100);
    const cleanComment = String(comment).trim().slice(0, 1000);

    const db = readDb();
    const newReview = {
      id: (db.reviews && db.reviews.length > 0) ? Math.max(...db.reviews.map(r => r.id || 0)) + 1 : 1,
      customer_name: cleanName,
      rating: numericRating,
      comment: cleanComment,
      product_id: product_id ? parseInt(product_id, 10) : null,
      created_at: new Date().toISOString()
    };

    if (!db.reviews) db.reviews = [];
    db.reviews.unshift(newReview);
    writeDb(db);

    res.status(201).json({
      success: true,
      message: 'Review added successfully!',
      data: newReview
    });
  } catch (err) {
    console.error('Error adding review:', err.message);
    res.status(500).json({ success: false, message: 'Failed to add review.' });
  }
});

// --------------- SPA Fallback ---------------
// Serve index.html for any non-API route so client-side navigation works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --------------- Start Server ---------------
app.listen(PORT, () => {
  console.log(`🌿 Pure Nest BD server running on http://localhost:${PORT}`);
});
