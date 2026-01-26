# Quick Start Guide - Guide Interior & Decor Website

## 🚀 5-Minute Setup

### Step 1: Download Files

All files are ready in this folder:

- `index.html` - Main website
- `styles.css` - Main styling
- `styles-additional.css` - Optional advanced styles
- `script.js` - Main functionality
- `config.js` - Customization settings
- `README.md` - Full documentation

### Step 2: Open in Browser

Simply double-click `index.html` to open in your default browser.

**OR** use a local server (recommended):

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Step 3: Customize Business Info

Edit these files with your details:

**1. Update Phone & WhatsApp in `config.js`:**

```javascript
phoneNumber: "+919811980081",  // Change this
whatsappNumber: "+919811980081" // Change this
```

**2. Update Phone & WhatsApp in `index.html`:**
Search for: `+919811980081` and replace with your number

**3. Update Business Info in `index.html`:**

- Line 58: "Guide Interior & Decor" - your business name
- Line 59: "Crafting Elegant & Functional Interiors" - your tagline
- Footer: Add your actual address and email

### Step 4: Replace Images

Replace stock images with your real project photos:

**Option A: Direct URL Replacement (Easy)**
In `index.html`, find image URLs and replace:

```html
<!-- Before -->
<img
  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80"
/>

<!-- After -->
<img src="https://yourserver.com/your-kitchen-image.jpg" />
```

**Option B: Local Images (Recommended)**

1. Create a folder: `images/`
2. Add your photos: `images/kitchen-01.jpg`, etc.
3. Update HTML:

```html
<img src="./images/kitchen-01.jpg" alt="Modern Kitchen" />
```

### Step 5: Deploy

Choose one:

**Netlify (Easiest):**

1. Drag and drop folder to https://netlify.com
2. Done! Your site is live

**Vercel:**

1. Connect GitHub repository
2. Auto-deploys on every push

**Traditional Hosting:**
Upload all files via FTP to your host

---

## 📋 Essential Changes Checklist

- [ ] Update phone number in `config.js`
- [ ] Update phone number in `index.html` (search for +919811980081)
- [ ] Update business name
- [ ] Update address in footer
- [ ] Update email address
- [ ] Replace all images with real projects
- [ ] Update social media links
- [ ] Test on mobile phone
- [ ] Test WhatsApp and phone buttons
- [ ] Deploy to live server

---

## 🎨 Quick Customization

### Change Colors

Edit `styles.css` (around line 5):

```css
:root {
  --primary-color: #2c3e50; /* Dark blue-gray */
  --secondary-color: #d4a574; /* Gold */
  --light-bg: #f8f7f4; /* Off-white */
}
```

### Change Business Name

Search and replace "Guide Interior & Decor" in:

- `index.html` (navbar, hero, footer)
- `config.js` (business name)
- `README.md` (documentation)

### Change Navigation Links

Edit navbar in `index.html` (around line 24):

```html
<a class="nav-link" href="#your-section">Your Link</a>
```

### Add/Remove Portfolio Categories

Edit filter buttons in `index.html` (around line 213):

```html
<button class="btn btn-filter" data-filter=".category-name">
  Category Name
</button>
```

---

## 🔧 Common Issues & Fixes

### Problem: WhatsApp link not working

**Solution:** Update phone number in config.js

```javascript
// Make sure no spaces or special chars
phoneNumber: "+919811980081"; // Good
phoneNumber: "+91 98119 80081"; // Bad
```

### Problem: Images not loading

**Solution 1:** Check CDN is accessible
**Solution 2:** Use local images instead (create `images/` folder)

### Problem: Portfolio filter not working

**Solution:** Check browser console (F12). If jQuery/Isotope missing, uses CSS fallback.

### Problem: Mobile menu not closing

**Solution:** Automatically handled by script.js

### Problem: Animations not showing

**Solution:** Check AOS library loaded. CSS animations are fallback.

---

## 📞 Contact Information Template

Update in `index.html` footer:

```html
<!-- Around line 445 -->
<p class="text-muted mb-2"><i class="fas fa-phone me-2"></i>+91 98119 80081</p>
<p class="text-muted mb-2">
  <i class="fas fa-envelope me-2"></i>info@guideinterior.com
</p>
<p class="text-muted">
  <i class="fas fa-map-marker-alt me-2"></i>City, Country
</p>
```

---

## 🖼️ Portfolio Categories Included

1. **Modular Kitchen** - Modern kitchens with built-in appliances
2. **Bedroom Interiors** - Master bedroom, King size, Queen size options
3. **Living Room** - Contemporary and luxury living spaces
4. **Wardrobe & Storage** - Built-in wardrobes and storage solutions
5. **False Ceiling & Lighting** - Modern ceiling designs with LED lighting
6. **Commercial/Office** - Corporate office and business spaces
7. **Custom Furniture** - Bespoke furniture designs
8. **Décor** - Decorative elements and accessories

To add more, create new portfolio items with matching class names.

---

## 📱 Mobile Testing

Test on:

- iPhone (Safari)
- Android (Chrome)
- Tablet (both)

Key areas to test:

- ✓ Navigation menu (hamburger)
- ✓ Hero section display
- ✓ Portfolio grid layout
- ✓ Floating contact buttons
- ✓ WhatsApp/Phone links
- ✓ Image loading

---

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use JPG for photos (save at 80% quality)
   - Use PNG for graphics
   - Compress using TinyPNG: https://tinypng.com

2. **Enable Caching:**
   - CDN links automatically cached
   - Set browser cache headers on server

3. **Minify Code:**
   - CSS and JS are already lean
   - Use online minifiers if adding custom code

4. **Lazy Load Images:**
   - Uncomment `initLazyLoadImages()` in script.js
   - Add `data-src` attribute to images

---

## 📚 File Structure After Setup

```
guideInteriorDecor/
├── index.html                 # Main file (required)
├── styles.css                 # Main styles (required)
├── styles-additional.css      # Extra styles (optional)
├── script.js                  # Main functionality (required)
├── config.js                  # Configuration (optional)
├── README.md                  # Full docs
├── QUICKSTART.md             # This file
└── images/                    # Your images folder
    ├── kitchen-01.jpg
    ├── bedroom-01.jpg
    └── ...more images
```

---

## 🌐 Hosting Options & Costs

| Provider       | Cost          | Setup Time | Best For          |
| -------------- | ------------- | ---------- | ----------------- |
| Netlify        | Free (+ paid) | 5 min      | Beginners         |
| Vercel         | Free (+ paid) | 5 min      | Developers        |
| GitHub Pages   | Free          | 10 min     | Developers        |
| Shared Hosting | $3-5/mo       | 20 min     | WordPress users   |
| Cloud Hosting  | $5-15/mo      | 30 min     | Scalable projects |

---

## 🎓 Learning Resources

If you want to customize further:

- **HTML:** https://www.w3schools.com/html/
- **CSS:** https://www.w3schools.com/css/
- **JavaScript:** https://www.w3schools.com/js/
- **Bootstrap:** https://getbootstrap.com/docs/
- **Font Awesome Icons:** https://fontawesome.com/icons

---

## 💡 Next Steps

After launching:

1. **Set up Google Analytics** - Track visitors
2. **Add testimonials** - Show client feedback
3. **Add blog section** - Share design tips
4. **Contact form** - Collect leads
5. **Instagram feed** - Show latest projects
6. **Video section** - Tour your projects

---

## ❓ FAQ

**Q: Can I use this on Wix/Squarespace?**
A: No, but you can use it on any web hosting with FTP access.

**Q: Is it mobile responsive?**
A: Yes! Tested on all devices and screen sizes.

**Q: Can I modify the design?**
A: Absolutely! All code is fully customizable.

**Q: Do I need coding knowledge?**
A: Not for basic customization. Use `config.js` and text editor.

**Q: Can I add a contact form?**
A: Yes, integrate with Formspree or Netlify Forms (see config.features).

**Q: How do I update content?**
A: Edit `index.html` in any text editor (VS Code, Notepad++, etc.)

---

## 📞 Support

For issues:

1. Check browser console (F12 > Console tab)
2. Verify all files are in same folder
3. Check internet connection (for CDN libraries)
4. Try different browser (Chrome, Firefox, Safari)

---

## ✨ Tips & Tricks

- Use Ctrl+F (Cmd+F on Mac) to find and replace text quickly
- Take screenshots of your completed website for portfolio
- Share website URL with friends for feedback
- Monitor analytics to see which projects get most interest
- Update portfolio quarterly with new projects

---

**You're all set! Your premium interior design website is ready to impress clients. 🎉**

For detailed information, see `README.md`
