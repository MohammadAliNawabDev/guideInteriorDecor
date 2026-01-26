// ===================================
// GUIDE INTERIOR & DECOR - CONFIG FILE
// Configuration settings for easy customization
// ===================================

const CONFIG = {
  // Business Information
  business: {
    name: "Guide Interior & Decor",
    tagline: "Crafting Elegant & Functional Interiors",
    description:
      "Premium interior design services for residential and commercial spaces",
    email: "info@guideinterior.com",
    phone: "+919811980081",
    address: "City, Country",

    // Social Media Links
    social: {
      facebook: "https://facebook.com/guideinterior",
      instagram: "https://instagram.com/guideinterior",
      linkedin: "https://linkedin.com/company/guide-interior",
    },
  },

  // Contact Configuration
  contact: {
    phoneNumber: "+919811980081",
    whatsappNumber: "+919811980081",
    whatsappMessage:
      "Hello Guide Interior & Decor, I'm interested in your services",
    whatsappLink: function () {
      return `https://wa.me/${this.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(this.whatsappMessage)}`;
    },
    phoneLink: function () {
      return `tel:${this.phoneNumber}`;
    },
  },

  // Portfolio Categories
  portfolio: {
    categories: [
      { name: "All Projects", filter: "*" },
      { name: "Modular Kitchen", filter: ".kitchen" },
      { name: "Bedroom Interiors", filter: ".bedroom" },
      { name: "Living Room", filter: ".living" },
      { name: "Wardrobe & Storage", filter: ".wardrobe" },
      { name: "False Ceiling", filter: ".ceiling" },
      { name: "Commercial", filter: ".office" },
      { name: "Furniture & Décor", filter: ".furniture" },
    ],
  },

  // Color Scheme
  colors: {
    primary: "#2c3e50",
    secondary: "#d4a574",
    lightBg: "#f8f7f4",
    textDark: "#1a1a1a",
    textMuted: "#6c757d",
    white: "#ffffff",
    dark: "#1a1a1a",
  },

  // Animation Settings
  animations: {
    aosDuration: 800,
    aosEasing: "ease-in-out",
    scrollBehavior: "smooth",
  },

  // Image Settings
  images: {
    // Use "local" for local images or "unsplash" for Unsplash CDN
    source: "unsplash",
    optimizationParams: "?w=500&q=80", // For Unsplash
    lazyLoadingEnabled: false,
    aspectRatio: "16/9",
  },

  // Performance Settings
  performance: {
    enableLightbox: true,
    enableIsotope: true,
    enableAOS: true,
    cacheAssets: true,
  },

  // Navigation
  navigation: {
    sticky: true,
    scrollToTop: false, // Set to true to show scroll-to-top button
    sections: [
      { id: "hero", name: "Home" },
      { id: "about", name: "About" },
      { id: "portfolio", name: "Portfolio" },
      { id: "why-choose", name: "Why Choose Us" },
      { id: "cta", name: "Contact" },
    ],
  },

  // SEO Settings
  seo: {
    title: "Guide Interior & Decor | Premium Interior Design Solutions",
    description:
      "Premium interior design services for residential and commercial spaces. Modular kitchens, furniture, and custom decor solutions.",
    keywords:
      "interior design, modular kitchen, furniture, commercial interiors",
    author: "Guide Interior & Decor",
    ogImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  },

  // Feature Flags
  features: {
    enablePortfolioFilter: true,
    enableContactForm: false,
    enableTestimonials: false,
    enableBlog: false,
    enableSearch: false,
  },

  // Utility Functions
  getContactLink: function (type) {
    if (type === "whatsapp") {
      return this.contact.whatsappLink();
    } else if (type === "phone") {
      return this.contact.phoneLink();
    }
    return null;
  },

  getColorValue: function (colorName) {
    return this.colors[colorName] || "#000000";
  },

  getCategory: function (categoryName) {
    return this.portfolio.categories.find((cat) => cat.name === categoryName);
  },
};

// Export for use in other scripts (if using modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}

// Initialize config on page load
document.addEventListener("DOMContentLoaded", function () {
  console.log("Configuration Loaded:", CONFIG.business.name);

  // Update page title if needed
  if (CONFIG.seo.title) {
    document.title = CONFIG.seo.title;
  }

  // Log available configurations
  console.log("Contact:", CONFIG.contact);
  console.log("Portfolio Categories:", CONFIG.portfolio.categories.length);
  console.log("Features Enabled:", CONFIG.features);
});
