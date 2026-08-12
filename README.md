# D Queen Beauty Care — Luxury Salon Website

A premium, responsive, modern website for **D Queen Beauty Care**, a luxury Indian beauty parlour located in Kaikhali, VIP Road, Kolkata, West Bengal.

Built strictly with **HTML5, Vanilla CSS3, and Vanilla JavaScript** — without any external libraries or frameworks.

---

## 🌟 Key Features

1. **Luxury Indian Beauty Aesthetic**: Deep burgundy (`#7b2638`), champagne gold (`#c9a15a`), soft rose (`#e8c5c8`), and ivory (`#fffdf9`) design system with Google Fonts (`Playfair Display` + `Poppins`).
2. **Authentic Business Details**: Verified Google rating **5.0 ⭐ (63 Google reviews)**, actual customer testimonials, exact physical address, and phone number (`087772 75917`).
3. **Editable JavaScript Architecture**: All business parameters (phone, address, services, WhatsApp number, Google review links) are centralized in `js/script.js` inside `businessConfig`.
4. **Anti-Gravity Interactive UI**:
   - Subtle mouse-tracking particle/orb movement in hero.
   - Magnetic button pull effect on desktop hover.
   - Smooth scroll reveal animations via `IntersectionObserver`.
5. **Full Responsiveness & Mobile Action Bar**:
   - Custom hamburger drawer menu with scroll lock and keyboard accessibility.
   - Mobile-fixed bottom bar for one-tap **Call**, **Directions**, and **Enquiry**.
   - Touch-swipe support on customer review carousel.
6. **Masonry Gallery & Lightbox**: Interactive gallery popup with next/prev controls, keyboard navigation (ESC, arrow keys).
7. **Appointment Enquiry Form**: Front-end validation with clear notification confirming enquiry preparation and direct salon contact instructions.
8. **SEO & Accessibility**: Complete OpenGraph, Twitter Cards, Semantic HTML5 markup, ARIA roles, and JSON-LD `BeautySalon` structured data.

---

## 📁 File Structure

```text
d-queen-beauty-care/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── hero.jpg
│   ├── about.jpg
│   ├── service-1.jpg
│   ├── service-2.jpg
│   ├── service-3.jpg
│   ├── exp-1.jpg
│   ├── exp-2.jpg
│   ├── exp-3.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   └── gallery-6.jpg
└── README.md
```

---

## ⚙️ Configuration (`js/script.js`)

To update salon details in the future, simply open `js/script.js` and modify the `businessConfig` object:

```javascript
const businessConfig = {
    name: "D Queen Beauty Care",
    phone: "087772 75917",
    phoneFormatted: "+918777275917",
    address: "Haldiram, Madhav kunj panchayat shyam baba complex, VIP Rd, Mali Bagan, Kaikhali, Kolkata, West Bengal 700052",
    rating: "5.0",
    reviewCount: "63",
    whatsapp: "",             // Add WhatsApp number e.g. "918777275917" to enable WhatsApp button
    googleReviewsUrl: "",     // Direct Google Review link
    googleMapsUrl: ""         // Auto-generated if left empty
};
```

---

## 🚀 How to Run

Simply open `index.html` directly in any web browser. No npm, build step, or server configuration required!
