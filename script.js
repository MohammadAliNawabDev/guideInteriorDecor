// ===================================
// GUIDE INTERIOR & DECOR - CUSTOM JS
// ===================================

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });

  // Initialize Isotope for portfolio filtering
  initPortfolioFilter();

  // Handle navbar scroll effect
  handleNavbarScroll();

  // Handle smooth scrolling
  handleSmoothScroll();

  // Update contact information
  updateContactInfo();
});

// ===================================
// PORTFOLIO FILTERING WITH ISOTOPE
// ===================================

function initPortfolioFilter() {
  // Use pure CSS-based filtering instead of Isotope to avoid double animations
  handlePortfolioFilterFallback();
}

// Fallback portfolio filtering without Isotope
function handlePortfolioFilterFallback() {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // First, fade out all items
      portfolioItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.pointerEvents = "none";
      });

      // After fade out completes, hide items and show only filtered ones
      setTimeout(() => {
        portfolioItems.forEach((item) => {
          if (
            filterValue === "*" ||
            item.classList.contains(filterValue.substring(1))
          ) {
            item.style.display = "block";
            item.style.pointerEvents = "auto";
            // Trigger reflow to ensure display change is applied before opacity
            item.offsetHeight;
            item.style.opacity = "1";
          } else {
            item.style.display = "none";
            item.style.pointerEvents = "none";
          }
        });
      }, 500);
    });
  });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar-custom");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===================================
// SMOOTH SCROLL NAVIGATION
// ===================================

function handleSmoothScroll() {
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only handle if it's a valid section ID
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          const toggler = document.querySelector(".navbar-toggler");
          toggler.click();
        }

        // Smooth scroll to section
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===================================
// UPDATE CONTACT INFORMATION
// ===================================

function updateContactInfo() {
  // This function allows easy updating of contact details
  // Currently uses placeholder numbers - update these with real business details

  const phoneNumber = "+919811980081"; // CHANGE THIS TO YOUR BUSINESS NUMBER
  const whatsappMessage =
    "Hello Guide Interior & Decor, I'm interested in your services";

  // Update all WhatsApp links
  const whatsappLinks = document.querySelectorAll('[href*="wa.me"]');
  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
  });

  // Update all phone links
  const phoneLinks = document.querySelectorAll('[href^="tel:"]');
  phoneLinks.forEach((link) => {
    link.href = `tel:${phoneNumber}`;
  });

  console.log("Contact info updated. Phone: " + phoneNumber);
}

// ===================================
// LIGHTBOX CONFIGURATION
// ===================================

// Configure Lightbox2 if available
if (typeof lightbox !== "undefined") {
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    albumLabel: "Image %1 of %2",
    fadeDuration: 300,
    imageFadeDuration: 300,
  });
}

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================

function initScrollToTop() {
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollToTop";
  scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollBtn.className = "scroll-to-top";
  document.body.appendChild(scrollBtn);

  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show button when user scrolls down
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Call scroll to top initialization if needed
// Uncomment the line below to enable scroll-to-top button
// initScrollToTop();

// ===================================
// LAZY LOADING IMAGES (Optional)
// ===================================

function initLazyLoadImages() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Uncomment to enable lazy loading
// initLazyLoadImages();

// ===================================
// FORM VALIDATION (If needed in future)
// ===================================

function validateContactForm(formElement) {
  // Basic form validation function
  // Can be expanded as needed

  const inputs = formElement.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    if (input.required && !input.value.trim()) {
      isValid = false;
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  });

  return isValid;
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Add active class to navbar link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
}

// Uncomment to enable active nav link tracking
// updateActiveNavLink();

// ===================================
// ANALYTICS & TRACKING (Optional)
// ===================================

// Log page analytics
console.log("Guide Interior & Decor - Website Loaded Successfully");
console.log(
  "Portfolio items loaded:",
  document.querySelectorAll(".portfolio-item").length,
);
console.log(
  "Sections available:",
  document.querySelectorAll("section[id]").length,
);

// ===================================
// ERROR HANDLING
// ===================================

window.addEventListener("error", function (event) {
  console.error("Error detected:", event.error);
});

// Log if external libraries fail to load
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS === "undefined") {
    console.warn("AOS library not loaded. Animations may not work.");
  }
  if (typeof lightbox === "undefined") {
    console.warn("Lightbox library not loaded. Gallery zoom may not work.");
  }
  if (typeof Isotope === "undefined" && typeof $ !== "undefined") {
    console.warn(
      "Isotope library not loaded. Portfolio filtering will use fallback method.",
    );
  }
});
