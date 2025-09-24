# 📝 COVETEN Website - Complete Editing Guide

This guide shows you exactly how to edit text, images, and content on your COVETEN website.

## 🎯 **Quick Edit Locations**

### 📍 **1. Company Name & Branding**
**File:** `index.html` (and all other pages)
**Location:** Line 27, 26
```html
<h2>COVETEN</h2>  <!-- Change "COVETEN" to your company name -->
```

### 📍 **2. Page Titles & SEO**
**File:** `index.html`
**Location:** Line 6-7
```html
<title>COVETEN - Engineering Components Sales & Services</title>
<meta name="description" content="COVETEN - Trusted partner for engineering components...">
```

### 📍 **3. Hero Section (Main Banner)**
**File:** `index.html`
**Location:** Lines 67-72
```html
<h1 class="hero__title">Engineering Components Sales & Services</h1>
<p class="hero__subtitle">Trusted partner across Aviation, Automobile, Electronics, Electrical, Robotics, and Industrial Safety.</p>
<a href="products.html" class="hero__cta btn btn--primary">
    Explore Our Products  <!-- Change button text here -->
</a>
```

### 📍 **4. About Section**
**File:** `index.html`
**Location:** Lines 85-95
```html
<h2 class="section__title">About COVETEN</h2>
<p class="about__description">
    COVETEN is a leading provider of engineering components and services...
    <!-- Edit this paragraph to describe your company -->
</p>
```

### 📍 **5. Company Statistics**
**File:** `index.html`
**Location:** Lines 96-115
```html
<div class="stat">
    <h3 class="stat__number">10+</h3>     <!-- Change numbers -->
    <p class="stat__label">Years Experience</p>  <!-- Change labels -->
</div>
```

## 📷 **How to Change Images**

### 🖼️ **1. Hero Background Image**
**File:** `css/style.css`
**Location:** Line 420 (approximately)
```css
.hero__background {
    background-image: url('https://images.unsplash.com/photo-...');
}
```
**How to change:** Replace the URL with your image URL

### 🖼️ **2. About Section Image**
**File:** `index.html`
**Location:** Line 125 (approximately)
```html
<img src="https://images.unsplash.com/photo-..." alt="Engineering Components">
```
**How to change:** Replace the `src` URL with your image URL

### 🖼️ **3. Product Images**
**File:** `products.html`
**Location:** Multiple locations for each product
```html
<img src="https://images.unsplash.com/photo-..." alt="Product Name">
```

## 📞 **Contact Information**

### 📱 **Phone Numbers**
**Files:** All pages
**Search for:** `+91-9876543210`
**Replace with:** Your actual phone number

### 📧 **Email Addresses**
**Files:** All pages
**Search for:** `info@coveten.com`
**Replace with:** Your actual email address

### 🏢 **Company Address**
**Files:** All pages
**Search for:** `COVETEN Corporate Office, Bengaluru, India`
**Replace with:** Your actual address

## 🛠️ **Step-by-Step Editing Process**

### Method 1: Direct Text Editing

1. **Open the file** you want to edit (e.g., `index.html`)
2. **Find the text** you want to change (use Ctrl+F to search)
3. **Replace the text** with your content
4. **Save the file**
5. **Refresh your browser** to see changes

### Method 2: Using the Edit Tool

I can help you make specific changes using the editing tools. Just tell me:
- Which page you want to edit
- What text you want to change
- What you want to change it to

## 📋 **Common Editing Tasks**

### ✏️ **Task 1: Change Company Name**
```
Old: COVETEN
New: [Your Company Name]
```

### ✏️ **Task 2: Update Phone Number**
```
Old: +91-9876543210
New: [Your Phone Number]
```

### ✏️ **Task 3: Change Email**
```
Old: info@coveten.com
New: [Your Email Address]
```

### ✏️ **Task 4: Update Address**
```
Old: COVETEN Corporate Office, Bengaluru, India
New: [Your Company Address]
```

### ✏️ **Task 5: Modify Services**
Edit the services section in `services.html` to match your actual services.

### ✏️ **Task 6: Update Products**
Edit the product categories in `products.html` to match your actual products.

## 🖼️ **Image Editing Guidelines**

### 📐 **Recommended Image Sizes:**
- **Hero Background:** 1920x1080px or larger
- **About Image:** 800x600px
- **Product Images:** 400x300px
- **Team Photos:** 300x300px (square)

### 🌐 **Image Sources:**
1. **Your own images:** Upload to your web server
2. **Stock photos:** Use Unsplash, Pexels (free)
3. **Professional photos:** Hire a photographer

### 💡 **Image Tips:**
- Use high-quality images (at least 1200px wide)
- Optimize file sizes (under 500KB each)
- Use descriptive alt text for accessibility
- Maintain consistent style across all images

## 🎨 **Color & Styling Changes**

### 🎨 **Change Primary Color**
**File:** `css/style.css`
**Location:** Line 15
```css
--primary-color: #1a73e8;  /* Change this hex code */
```

### 🎨 **Change Secondary Color**
**File:** `css/style.css`
**Location:** Line 16
```css
--secondary-color: #fbbc05;  /* Change this hex code */
```

## 🔧 **Quick Edit Examples**

Let me know which of these you'd like me to help you change:

1. **Company Name:** Change "COVETEN" to your company name
2. **Contact Info:** Update phone, email, address
3. **Hero Text:** Modify main headline and description
4. **About Text:** Update company description
5. **Product List:** Modify products and services
6. **Images:** Replace with your company photos
7. **Colors:** Change the color scheme
8. **Social Links:** Update social media URLs

## ❓ **Need Help?**

Just tell me what you want to change, and I'll help you edit it. For example:

- "Change the company name to ABC Engineering"
- "Update the phone number to +1-555-123-4567"
- "Replace the hero image with my company photo"
- "Change the about text to describe my business"

I can make these changes for you using the editing tools!