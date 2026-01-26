# Guide Interior & Decor - Premium Portfolio Website

A modern, elegant single-page portfolio website for an interior design business. Built with HTML, CSS, Bootstrap, and vanilla JavaScript.

## 📋 Project Overview

**Guide Interior & Decor** is a professional portfolio website showcasing interior design projects across multiple categories. The website features a premium, modern design with smooth animations, responsive layout, and floating contact icons for easy client engagement.

### Key Features

- ✨ Full-page hero section with call-to-action buttons
- 🖼️ Professional portfolio section with filterable categories
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Luxury color palette (neutral tones with gold accents)
- 💬 Floating WhatsApp and Phone contact buttons
- 🎭 Smooth animations and scroll effects
- 🔍 Image lightbox gallery with zoom functionality
- 📸 Stock image placeholders (easy to replace with real projects)

---

## 🛠️ Technology Stack

### Core Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Vanilla JavaScript** - Interactive features without heavy frameworks
- **Bootstrap 5.3.0** - Responsive grid system and components

### External Libraries & CDN Links

#### 1. **Bootstrap 5.3.0** (CSS Framework)

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

- **Purpose:** Responsive grid system, navbar, buttons, utilities
- **CDN:** jsDelivr
- **Why:** Industry-standard framework for responsive layouts

#### 2. **Font Awesome 6.4.0** (Icon Library)

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
```

- **Purpose:** Professional icons (WhatsApp, phone, etc.)
- **CDN:** Cloudflare CDN
- **Icons Used:** whatsapp, phone, images, search-plus, check, pencil-ruler, gem, cube, hammer, file-invoice, calendar-check, envelope, map-marker-alt, facebook, instagram, linkedin, chevron-up

#### 3. **AOS (Animate On Scroll) 2.3.4**

```html
<link
  href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
```

- **Purpose:** Scroll animations (fade-up, zoom-in effects)
- **CDN:** jsDelivr
- **Why:** Creates engaging entrance animations as users scroll

#### 4. **Lightbox2 2.11.4** (Image Gallery Lightbox)

```html
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css"
  rel="stylesheet"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
```

- **Purpose:** Zoom and gallery functionality for portfolio images
- **CDN:** Cloudflare CDN
- **Why:** Elegant image viewing experience

#### 5. **jQuery 3.7.0** (Dependency for Isotope)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
```

- **Purpose:** Required by Isotope for DOM manipulation
- **CDN:** Cloudflare CDN

#### 6. **Isotope 3.0.6** (Portfolio Filtering)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
```

- **Purpose:** Filter portfolio items by category with smooth transitions
- **CDN:** Cloudflare CDN
- **Why:** Professional filtering without page reloads

#### 7. **Google Fonts** (Optional - for custom typography)

To add custom fonts, include in `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 📂 Project Structure

```
guideInteriorDecor/
├── index.html              # Main HTML file
├── styles.css             # Custom CSS styling
├── script.js              # Custom JavaScript
├── README.md              # This file
└── images/                # Folder for local images (optional)
    └── (stock images replaced here)
```

---

## 🚀 Getting Started

### Option 1: Direct Browser Access

1. Download all files to a folder
2. Open `index.html` in any modern web browser
3. No server or installation required

### Option 2: Local Server (Recommended)

For best performance and to avoid CORS issues with local images:

**Using Python 3:**

```bash
python -m http.server 8000
```

**Using Node.js (http-server):**

```bash
npm install -g http-server
http-server
```

Then navigate to `http://localhost:8000` (or the displayed URL)

### Option 3: Deployment

- **Netlify:** Drag and drop the folder to deploy
- **Vercel:** Connect GitHub repository
- **Traditional Hosting:** Upload all files via FTP

---

## 🎨 Design & Color Palette

### Primary Colors

- **Primary Dark:** `#2c3e50` (Navigation, titles)
- **Secondary/Gold:** `#d4a574` (Accents, hover effects)
- **Light Background:** `#f8f7f4` (Subtle backgrounds)
- **White:** `#ffffff` (Clean sections)
- **Dark Text:** `#1a1a1a` (Body text)

### Design Principles

- Minimalist and elegant
- Premium luxury aesthetic
- Neutral tones with gold highlights
- Professional typography
- Smooth animations and transitions

---

## 📱 Responsive Breakpoints

The website is optimized for:

- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 576px

---

## 📸 Image Placeholders & Replacement

All images currently use **Unsplash** stock photos via direct CDN links. To replace with real project images:

### Current Image Sources

All images are from Unsplash with `w=500&q=80` parameters for optimization.

### Replacing Images

**Option 1: Direct URL Replacement**
Find and replace in `index.html`:

```html
<!-- Original -->
<img
  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80"
  alt="..."
/>

<!-- Replace with -->
<img src="./images/your-kitchen-image.jpg" alt="Modern Kitchen Design" />
```

**Option 2: Host Images Locally**

1. Create an `images/` folder in the project directory
2. Place your images there
3. Update src attributes to use relative paths:

```html
<img src="./images/kitchen-01.jpg" alt="..." />
```

**Image Size Recommendations:**

- Portfolio cards: 500x400px (optimized)
- Full-width sections: 1200x600px
- Format: JPG for photos, PNG for graphics
- Quality: 80 compression is good for web

---

## 🔧 Customization Guide

### Update Business Information

**Phone Number & WhatsApp:**
In `script.js`, find and update:

```javascript
const phoneNumber = "+919811980081"; // CHANGE THIS
```

Or directly in `index.html`:

```html
href="https://wa.me/919811980081?text=..." href="tel:+919811980081"
```

**Business Name & Contact:**

- Search and replace "Guide Interior & Decor" with your business name
- Update footer contact details
- Update email address

**Portfolio Categories:**
Add or remove categories in the filter buttons:

```html
<button class="btn btn-filter" data-filter=".your-category">
  Your Category
</button>
```

Then add portfolio items with matching class:

```html
<div class="portfolio-item your-category">...</div>
```

**Colors:**
Edit CSS variables in `styles.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #d4a574;
  /* ... etc */
}
```

---

## ✨ Features in Detail

### 1. Hero Section

- Full-width background image
- Overlay for text readability
- Call-to-action buttons
- Fade-in animation on page load

### 2. Navigation

- Fixed navbar with smooth scroll
- Active link tracking
- Mobile-responsive hamburger menu
- Elegant underline hover effect

### 3. About Section

- Professional description
- Highlight points with icons
- Side-by-side layout (responsive)
- Hover image zoom effect

### 4. Portfolio Section

- Grid layout (2-3 columns, responsive)
- **8 Product Categories:**
  - Modular Kitchen
  - Bedroom Interiors
  - Living Room Interiors
  - Wardrobe & Storage
  - False Ceiling & Lighting
  - Commercial/Office Interiors
  - Custom Furniture & Décor

- **Interactive Features:**
  - Filter buttons for category selection
  - Isotope.js for smooth transitions
  - Lightbox gallery with zoom
  - Hover overlay with icons
  - AOS scroll animations

### 5. Why Choose Us Section

- 6 key advantages
- Icon cards with descriptions
- Hover lift effect
- Icon animation on hover

### 6. Call-to-Action Section

- Strong message
- Two primary CTA buttons
- Gradient background

### 7. Floating Contact Icons

- Fixed position (bottom-right)
- WhatsApp and Phone buttons
- Float animation
- Fully responsive
- Mobile-friendly

### 8. Footer

- Company information
- Quick links
- Contact details
- Social media links

---

## 🎯 JavaScript Features

### Core Functionality

1. **Portfolio Filtering** - Isotope.js for category filtering
2. **Smooth Scrolling** - Animated scroll to sections
3. **Animations** - AOS for scroll-triggered effects
4. **Navbar Effects** - Active state tracking and scroll shadows
5. **Lightbox Gallery** - Image zoom and gallery navigation

### Customizable Functions

```javascript
// Update contact information globally
updateContactInfo();

// Initialize portfolio filter
initPortfolioFilter();

// Handle navbar scroll effects
handleNavbarScroll();

// Smooth scroll navigation
handleSmoothScroll();
```

---

## 🔍 SEO & Meta Tags

Current meta tags (customize as needed):

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Guide Interior & Decor | Premium Interior Design Solutions</title>
```

### To Add SEO:

```html
<meta
  name="description"
  content="Premium interior design services for residential and commercial spaces. Modular kitchens, furniture, and custom decor solutions."
/>
<meta
  name="keywords"
  content="interior design, modular kitchen, furniture, commercial interiors"
/>
<meta name="author" content="Guide Interior & Decor" />
<meta property="og:title" content="Guide Interior & Decor" />
<meta property="og:description" content="Premium interior design services" />
<meta property="og:image" content="path/to/image.jpg" />
```

---

## 🐛 Troubleshooting

### Images Not Loading

- **Solution:** Check CDN links are accessible. Use local images if needed.

### Portfolio Filter Not Working

- **Cause:** jQuery or Isotope not loaded
- **Fallback:** JavaScript detects this and uses CSS-based filtering
- **Check Console:** Browser console will show warnings

### Animations Not Playing

- **Solution:** Check AOS library is loaded. CSS animations are fallback.

### Mobile Menu Not Closing

- **Solution:** JavaScript handles this automatically in `handleSmoothScroll()`

### WhatsApp Links Not Working

- **Solution:** Update phone number in `script.js` and `index.html`

---

## 📚 Library Documentation

- **Bootstrap:** https://getbootstrap.com/docs/5.3/
- **Font Awesome:** https://fontawesome.com/docs
- **AOS:** https://michalsnik.github.io/aos/
- **Lightbox2:** https://lokeshdhakar.com/projects/lightbox2/
- **Isotope:** https://isotope.metafizzy.co/

---

## 📝 Notes for Developers

### File Sizes

- HTML: ~40KB (with embedded links)
- CSS: ~25KB
- JS: ~15KB
- Total: ~80KB (without images)

### Performance Optimization

- All CDN links use minified versions
- Images use query parameters for compression (`w=500&q=80`)
- CSS uses CSS Grid and Flexbox for efficient layouts
- JavaScript is vanilla (no heavy framework overhead)

### Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (15+)
- Mobile browsers: Full support

### Future Enhancements

- Add contact form with backend integration
- Implement image lazy loading
- Add blog section
- Add testimonials/reviews section
- Integrate CMS for easy content updates
- Add multi-language support

---

## 📄 License & Credits

### Stock Images

- All images from **Unsplash** (free-to-use license)
- https://unsplash.com/

### Open Source Libraries

- Bootstrap (MIT License)
- Font Awesome (free version)
- AOS (MIT License)
- Lightbox2 (MIT License)
- Isotope (free for commercial use)
- jQuery (MIT License)

---

## 👤 Contact & Support

For customization requests or support:

- **Email:** info@guideinterior.com
- **Phone:** +91 98119 80081
- **WhatsApp:** Available 24/7

---

## 📋 Checklist for Deployment

- [ ] Update business phone number in `script.js` and `index.html`
- [ ] Replace all stock images with real project photos
- [ ] Update company information in footer
- [ ] Add real social media links
- [ ] Update email address
- [ ] Test on mobile devices
- [ ] Test contact buttons (WhatsApp, phone)
- [ ] Verify all images load correctly
- [ ] Check portfolio filter functionality
- [ ] Test cross-browser compatibility
- [ ] Upload to web hosting
- [ ] Set up custom domain
- [ ] Add Google Analytics (if desired)

---

## 🎉 Final Notes

This website is designed to be:

- ✅ **Professional** - Enterprise-grade design
- ✅ **Performant** - Fast loading, optimized assets
- ✅ **Responsive** - Works on all devices
- ✅ **Maintainable** - Clean, well-documented code
- ✅ **Customizable** - Easy to modify and extend

The site uses **no heavy frameworks** like React, keeping it lightweight while delivering modern functionality. All code is vanilla JavaScript with minimal external dependencies.

---

**Last Updated:** January 26, 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
