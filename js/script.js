/* ==========================================================================
   D QUEEN BEAUTY CARE - INTERACTIVE JAVASCRIPT ARCHITECTURE
   Location: Kaikhali, VIP Road, Kolkata, West Bengal
   ========================================================================== */

'use strict';

/**
 * Central Business Information & UI Configuration
 * Editable through this JavaScript configuration object
 */
const businessConfig = {
    name: "D Queen Beauty Care",
    category: "Beauty Parlour",
    phone: "087772 75917",
    phoneFormatted: "+918777275917",
    address: "Haldiram, Madhav kunj panchayat shyam baba complex, VIP Rd, Mali Bagan, Kaikhali, Kolkata, West Bengal 700052",
    locality: "Kaikhali, Kolkata",
    rating: "5.0",
    reviewCount: "63",
    whatsapp: "918777275917", // Configured WhatsApp number for direct booking
    googleReviewsUrl: "", // Add Google Reviews URL if available
    googleMapsUrl: "", // Auto-generated from address if empty

    // Service Categories (Configurable Placeholders without fake prices)
    services: [
        {
            id: "hair-care",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M12 6v4"/></svg>`,
            title: "Hair Care",
            description: "Personalised hair care and conditioning treatments designed around your unique look and hair type."
        },
        {
            id: "hair-styling",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.47" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
            title: "Hair Styling",
            description: "Polished hair styling, blowouts, and creative styling options tailored for everyday elegance or festive events."
        },
        {
            id: "makeup",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
            title: "Makeup",
            description: "Subtle party glam, natural enhancements, and festive makeup crafted to accentuate your natural features."
        },
        {
            id: "skincare",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
            title: "Facial & Skin Care",
            description: "Refreshing skin care sessions and soothing facials focused on cleansing, hydration, and natural glow."
        },
        {
            id: "beauty-care",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
            title: "Beauty Care",
            description: "Essential self-care and beauty maintenance routines delivered in a relaxed and hygienic environment."
        },
        {
            id: "bridal",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
            title: "Bridal Beauty",
            description: "Thoughtful bridal and pre-wedding styling packages designed for brides seeking personal care."
        },
        {
            id: "grooming",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
            title: "Personal Grooming",
            description: "Meticulous threading, waxing, and grooming services focused on comfort, precision, and cleanliness."
        },
        {
            id: "special-occasion",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></polygon></svg>`,
            title: "Special Occasion Styling",
            description: "Custom beauty and hair styling for weddings, receptions, Durga Puja, and family celebrations."
        }
    ],

    // Authentic Customer Reviews from Google Business Profile
    reviews: [
        {
            quote: "Good service 👌 🥰 and very beautiful staff",
            rating: 5,
            author: "Verified Local Customer",
            source: "Google Review"
        },
        {
            quote: "The people are really friendly and did wonderful hairstyle and makeup",
            rating: 5,
            author: "Satisfied Client",
            source: "Google Review"
        },
        {
            quote: "Prices are reasonable for the top-notch quality.",
            rating: 5,
            author: "Local Customer",
            source: "Google Review"
        }
    ],

    // Gallery Image Assets
    gallery: [
        { src: "images/gallery-1.jpg", alt: "Bridal and festive makeup styling detail", title: "Festive Elegance" },
        { src: "images/gallery-2.jpg", alt: "Modern luxury salon interior with mirror station", title: "Salon Ambience" },
        { src: "images/gallery-3.jpg", alt: "Glossy hair styling and care session", title: "Hair Care Styling" },
        { src: "images/gallery-4.jpg", alt: "Beauty tools and luxury spa preparation", title: "Grooming Tools" },
        { src: "images/gallery-5.jpg", alt: "Radiant Indian makeup portrait", title: "Beauty Care" },
        { src: "images/gallery-6.jpg", alt: "Relaxing salon seating and gold aesthetic", title: "Queen Comfort" }
    ]
};

// Initialize Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initDynamicData();
    initNavbar();
    initMobileDrawer();
    renderServices();
    initReviewsCarousel();
    initGalleryLightbox();
    initFormValidation();
    initAntiGravityEffects();
    initScrollReveal();
});

/**
 * 1. DYNAMIC DATA POPULATION
 * Populates configured business data into links, text nodes, and map URLs dynamically.
 */
function initDynamicData() {
    // Generate Google Maps URL dynamically from address if empty
    if (!businessConfig.googleMapsUrl) {
        businessConfig.googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(businessConfig.address);
    }

    // Populate Phone Links
    document.querySelectorAll(".dynamic-phone-link").forEach(link => {
        link.href = "tel:" + businessConfig.phoneFormatted;
    });

    document.querySelectorAll(".dynamic-phone-text").forEach(el => {
        el.textContent = businessConfig.phone;
    });

    // Populate Directions Links
    document.querySelectorAll(".dynamic-maps-link").forEach(link => {
        link.href = businessConfig.googleMapsUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    // Populate Google Reviews Button Link
    const reviewsBtn = document.getElementById("google-reviews-btn");
    if (reviewsBtn) {
        if (businessConfig.googleReviewsUrl) {
            reviewsBtn.href = businessConfig.googleReviewsUrl;
            reviewsBtn.target = "_blank";
        } else {
            reviewsBtn.href = businessConfig.googleMapsUrl;
            reviewsBtn.target = "_blank";
        }
    }

    // Populate WhatsApp visibility
    const whatsappBtns = document.querySelectorAll(".whatsapp-btn");
    whatsappBtns.forEach(btn => {
        if (!businessConfig.whatsapp) {
            btn.style.display = "none";
        } else {
            btn.href = `https://wa.me/${businessConfig.whatsapp}?text=${encodeURIComponent('Hello D Queen Beauty Care, I would like to enquire about an appointment.')}`;
            btn.target = "_blank";
        }
    });
}

/**
 * 2. NAVBAR SCROLL EFFECT
 */
function initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

/**
 * 3. MOBILE HAMBURGER DRAWER
 */
function initMobileDrawer() {
    const hamburger = document.querySelector(".hamburger");
    const drawer = document.querySelector(".mobile-drawer");
    const overlay = document.querySelector(".mobile-overlay");
    const drawerLinks = document.querySelectorAll(".mobile-nav-link, .mobile-drawer .btn");

    if (!hamburger || !drawer || !overlay) return;

    const toggleDrawer = (open) => {
        hamburger.classList.toggle("active", open);
        drawer.classList.toggle("active", open);
        overlay.classList.toggle("active", open);
        document.body.style.overflow = open ? "hidden" : "";
    };

    hamburger.addEventListener("click", () => {
        const isOpen = drawer.classList.contains("active");
        toggleDrawer(!isOpen);
    });

    overlay.addEventListener("click", () => toggleDrawer(false));

    drawerLinks.forEach(link => {
        link.addEventListener("click", () => toggleDrawer(false));
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && drawer.classList.contains("active")) {
            toggleDrawer(false);
        }
    });
}

/**
 * 4. RENDER SERVICES GRID
 */
function renderServices() {
    const grid = document.getElementById("services-grid");
    const selectEl = document.getElementById("service-select");

    if (!grid) return;

    grid.innerHTML = businessConfig.services.map(service => `
        <div class="service-card reveal">
            <div class="service-icon-wrapper">
                ${service.icon}
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <a href="#contact" class="service-btn" data-service="${service.title}">
                <span>Enquire Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    `).join("");

    // Populate service options in contact form
    if (selectEl) {
        selectEl.innerHTML = `
            <option value="" disabled selected>Select a Service / Enquiry Type</option>
            ${businessConfig.services.map(s => `<option value="${s.title}">${s.title}</option>`).join("")}
            <option value="General Enquiry">General Enquiry</option>
        `;
    }

    // Attach click event to Enquire buttons to pre-select dropdown
    document.querySelectorAll(".service-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const serviceName = btn.getAttribute("data-service");
            if (selectEl && serviceName) {
                selectEl.value = serviceName;
            }
        });
    });
}

/**
 * 5. CUSTOMER REVIEWS CAROUSEL
 */
function initReviewsCarousel() {
    const track = document.querySelector(".reviews-track");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const dotsContainer = document.querySelector(".carousel-dots");

    if (!track) return;

    // Render Review Cards
    track.innerHTML = businessConfig.reviews.map((rev, idx) => `
        <div class="review-card">
            <div>
                <div class="review-stars">${"★".repeat(rev.rating)}</div>
                <p class="review-quote">"${rev.quote}"</p>
            </div>
            <div class="review-author">
                <div class="review-avatar">${rev.author.charAt(0)}</div>
                <div class="review-author-info">
                    <span>${rev.author}</span>
                    <small>${rev.source}</small>
                </div>
            </div>
        </div>
    `).join("");

    const cards = track.querySelectorAll(".review-card");
    let currentIndex = 0;
    let autoSlideTimer = null;

    const getItemsPerView = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    const getMaxIndex = () => {
        return Math.max(0, cards.length - getItemsPerView());
    };

    // Render Dots
    const renderDots = () => {
        if (!dotsContainer) return;
        const maxIdx = getMaxIndex();
        dotsContainer.innerHTML = "";
        for (let i = 0; i <= maxIdx; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === currentIndex) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    };

    const updateCarousel = () => {
        const itemWidth = cards[0].getBoundingClientRect().width;
        const gap = 32; // 2rem
        const moveAmount = (itemWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${moveAmount}px)`;

        renderDots();
    };

    const goToSlide = (index) => {
        const maxIdx = getMaxIndex();
        if (index < 0) currentIndex = 0;
        else if (index > maxIdx) currentIndex = maxIdx;
        else currentIndex = index;
        updateCarousel();
    };

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goToSlide(currentIndex - 1);
            resetAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const maxIdx = getMaxIndex();
            if (currentIndex >= maxIdx) goToSlide(0);
            else goToSlide(currentIndex + 1);
            resetAutoSlide();
        });
    }

    const startAutoSlide = () => {
        autoSlideTimer = setInterval(() => {
            const maxIdx = getMaxIndex();
            if (currentIndex >= maxIdx) goToSlide(0);
            else goToSlide(currentIndex + 1);
        }, 5000);
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideTimer);
        startAutoSlide();
    };

    // Pause on hover
    track.addEventListener("mouseenter", () => clearInterval(autoSlideTimer));
    track.addEventListener("mouseleave", () => startAutoSlide());

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) goToSlide(currentIndex + 1);
        if (touchEndX - touchStartX > 50) goToSlide(currentIndex - 1);
    }, { passive: true });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
    startAutoSlide();
}

/**
 * 6. GALLERY MASONRY & LIGHTBOX
 */
function initGalleryLightbox() {
    const grid = document.getElementById("gallery-grid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    if (!grid || !lightbox || !lightboxImg) return;

    // Render Gallery Items
    grid.innerHTML = businessConfig.gallery.map((img, idx) => `
        <div class="gallery-item ${idx === 1 || idx === 4 ? 'tall' : ''} reveal" data-index="${idx}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </div>
            </div>
        </div>
    `).join("");

    let currentLightboxIdx = 0;

    const openLightbox = (index) => {
        currentLightboxIdx = index;
        const item = businessConfig.gallery[index];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    };

    const showNext = () => {
        currentLightboxIdx = (currentLightboxIdx + 1) % businessConfig.gallery.length;
        openLightbox(currentLightboxIdx);
    };

    const showPrev = () => {
        currentLightboxIdx = (currentLightboxIdx - 1 + businessConfig.gallery.length) % businessConfig.gallery.length;
        openLightbox(currentLightboxIdx);
    };

    grid.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
            const idx = parseInt(item.getAttribute("data-index"), 10);
            openLightbox(idx);
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (nextBtn) nextBtn.addEventListener("click", showNext);
    if (prevBtn) prevBtn.addEventListener("click", showPrev);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });
}

/**
 * 7. FORM VALIDATION & ENQUIRY PREPARATION
 */
function initFormValidation() {
    const form = document.getElementById("appointment-form");
    const responseBox = document.getElementById("form-response");

    if (!form || !responseBox) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("form-name").value.trim();
        const phone = document.getElementById("form-phone").value.trim();
        const service = document.getElementById("service-select").value;
        const date = document.getElementById("form-date").value;
        const message = document.getElementById("form-message").value.trim();

        if (!name || !phone) {
            alert("Please provide your Name and Phone Number.");
            return;
        }

        const waNumber = businessConfig.whatsapp || "918777275917";
        const formattedMessage = `Hello D Queen Beauty Care, I would like to book an appointment:\n` +
            `• Name: ${name}\n` +
            `• Phone: ${phone}\n` +
            `• Service: ${service || "Beauty Care"}\n` +
            `• Preferred Date: ${date || "Flexible / Soon"}\n` +
            `• Message: ${message || "N/A"}`;

        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(formattedMessage)}`;

        // Show confirmation response and redirect to WhatsApp
        responseBox.className = "form-response success";
        responseBox.innerHTML = `
            <strong>Thank you, ${name}!</strong><br>
            Redirecting you to WhatsApp to send your booking enquiry...
            <br><br>
            <a href="${waUrl}" target="_blank" class="btn btn-gold" style="padding: 0.5rem 1.25rem; font-size: 0.875rem; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <span>Open WhatsApp Now</span>
            </a>
        `;

        // Automatically open WhatsApp in new tab
        setTimeout(() => {
            window.open(waUrl, '_blank');
        }, 600);

        form.reset();

        // Scroll response into view
        responseBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

/**
 * 8. ANTI-GRAVITY INTERACTIVE EFFECTS
 */
function initAntiGravityEffects() {
    // Check reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = document.querySelector(".hero");
    const orbs = document.querySelectorAll(".hero-orb");

    if (hero && orbs.length > 0) {
        hero.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const moveX = (clientX - centerX) / 40;
            const moveY = (clientY - centerY) / 40;

            orbs.forEach((orb, idx) => {
                const factor = (idx + 1) * 0.8;
                orb.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
            });
        });
    }

    // Subtle magnetic effect on primary buttons
    const magneticBtns = document.querySelectorAll(".btn-primary, .btn-gold");
    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = `translate(0, 0)`;
        });
    });
}

/**
 * 9. SCROLL REVEAL VIA INTERSECTION OBSERVER
 */
function initScrollReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
