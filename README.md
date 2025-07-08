# Aroved Wellness - Massage Therapy Website 🌿

A modern, responsive website for **Kajtár Kristóf**, a professional massage therapist, built with clean HTML, CSS, and JavaScript. The site provides an elegant showcase of wellness services with advanced animations and mobile-optimized design.

![Website Preview](https://arovedwellness.com)

## 🌟 Overview

Aroved Wellness is a comprehensive business website designed for a massage therapy practice. It features a sophisticated user interface with smooth animations, responsive design, and modern web technologies to provide an excellent user experience across all devices.

## 🚀 Key Features

### ✨ Design & User Experience
- **Modern, Elegant Design** - Clean aesthetic with professional wellness theme
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - GSAP-powered transitions and micro-interactions
- **Loading Animations** - Professional page transitions and element reveals
- **Interactive Elements** - Hover effects, button animations, and dynamic content

### 📱 Mobile Optimization
- **Mobile-First Approach** - Designed primarily for mobile users
- **Touch-Optimized Interface** - Smooth scrolling and touch gestures
- **Hamburger Navigation** - Collapsible mobile menu with smooth transitions
- **Optimized Images** - Responsive images with proper aspect ratios
- **Fast Loading** - Optimized assets for mobile networks

### 🎠 Interactive Components
- **Hero Image Carousel** - Rotating gallery with fade transitions
- **Service Slider** - Interactive service showcase with navigation
- **Image Gallery** - Lightbox gallery with Fancybox integration
- **Testimonial System** - Customer review display and submission form
- **FAQ Accordion** - Expandable question/answer sections
- **Contact Forms** - Interactive booking and contact forms

## 🛠️ Technologies & Libraries

### Core Technologies
- **HTML5** - Semantic markup with modern standards
- **CSS3** - Advanced styling with Flexbox, Grid, and animations
- **Vanilla JavaScript** - ES6+ for interactive functionality

### External Libraries
- **[Splide.js](https://splidejs.com/)** - Lightweight, flexible carousel/slider
- **[GSAP](https://greensock.com/gsap/)** - Professional animation library
- **[Fancybox](https://fancyapps.com/fancybox/)** - Elegant lightbox and modal solution
- **[Font Awesome](https://fontawesome.com/)** - Comprehensive icon library
- **[jQuery](https://jquery.com/)** - Simplified DOM manipulation

### Design Assets
- **Custom Typography** - TAN-PEARL and Montserrat fonts
- **Color Scheme** - Professional wellness colors (#004D40, #fead00)
- **Custom Icons** - Hand-crafted icons and graphics
- **High-Quality Images** - Optimized photography and graphics

## 📁 Project Structure

```
arovedwellness.com/
├── assets/
│   ├── css/
│   │   ├── style.css           # Main stylesheet
│   │   ├── responsive.css      # Mobile & tablet styles
│   │   ├── global.css          # Global variables & resets
│   │   ├── fontawesome.min.css # Icon styles
│   │   ├── fancybox.css        # Lightbox styles
│   │   └── splide.min.css      # Carousel styles
│   ├── javascript/
│   │   ├── main.js             # Primary JavaScript functionality
│   │   ├── animation.js        # GSAP animations
│   │   ├── jquery-3.6.0.min.js # jQuery library
│   │   ├── splide.min.js       # Carousel functionality
│   │   └── fancybox.umd.js     # Lightbox functionality
│   ├── image/
│   │   ├── banner/             # Hero section images
│   │   ├── icon/               # Custom icons and graphics
│   │   └── logo/               # Brand logos and favicons
│   └── webfonts/               # Custom font files
├── index.html                  # Main homepage
├── favicon.ico                 # Site favicon
└── README.md                   # This documentation
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#004D40` - Main brand color, headers, backgrounds
- **Accent Gold**: `#fead00` - Highlights, buttons, borders
- **Text White**: `#ffffff` - Primary text on dark backgrounds
- **Gray Accents**: Various shades for subtle elements

### Typography
- **Headers**: TAN-PEARL (custom font) - Elegant display font
- **Body Text**: Montserrat - Clean, readable sans-serif
- **UI Elements**: PT Serif - Professional serif for accents

### Responsive Breakpoints
- **Mobile**: `max-width: 600px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `min-width: 769px`
- **Large Screen**: `min-width: 1920px`

## 🔧 Key Functionality

### Navigation System
```javascript
// Mobile menu toggle with smooth animations
function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    // Smooth scroll maintained during menu operations
}
```

### Hero Carousel
```javascript
// Splide carousel with fade transitions
var splide = new Splide('.splide', {
    type: "fade",
    rewind: true,
    autoplay: true,
    interval: 5200,
    arrows: false,
    speed: 3000,
    pauseOnHover: false,
});
```

### Responsive Image Handling
```css
.splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 300px 0 0 300px; /* Unique shape */
}
```

### Mobile Scroll Optimization
```javascript
// Optimized touch handling for mobile devices
document.addEventListener('touchmove', function(e) {
    const diffX = Math.abs(currentX - startX);
    const diffY = Math.abs(currentY - startY);
    
    // Only prevent horizontal swipes, allow vertical scrolling
    if (diffX > diffY && diffX > 30) {
        e.preventDefault();
    }
}, { passive: false });
```

## 📱 Mobile Features

### Responsive Banner Section
- **Dynamic Height**: Uses `70vh` on mobile for optimal screen usage
- **Curved Design**: Custom border-radius for unique visual appeal
- **Image Optimization**: Perfect fit within curved containers
- **Touch Gestures**: Smooth carousel navigation

### Mobile Navigation
- **Hamburger Menu**: Animated three-line menu icon
- **Slide-out Panel**: Full-screen navigation overlay
- **Smooth Transitions**: CSS transitions for all interactions
- **Touch-friendly**: Large tap targets for easy navigation

### Performance Optimizations
- **Lazy Loading**: Images load as needed
- **Optimized Assets**: Compressed CSS and JavaScript
- **Efficient Animations**: Hardware-accelerated transforms
- **Minimal HTTP Requests**: Bundled resources

## 🎯 Page Sections

### 1. Hero Section
- **Dynamic Carousel**: Rotating background images
- **Animated Text**: GSAP-powered text animations
- **Call-to-Action**: Prominent booking buttons
- **Responsive Design**: Adapts to all screen sizes

### 2. About Section
- **Personal Story**: Therapist background and philosophy
- **Animated Reveals**: Elements animate on scroll
- **Professional Images**: High-quality photography

### 3. Services Grid
- **Service Cards**: Interactive pricing and details
- **Popular Tags**: Highlighted recommended services
- **Responsive Layout**: Grid adapts to screen size
- **Hover Effects**: Smooth card interactions

### 4. Gallery Section
- **Lightbox Integration**: Fancybox-powered image viewing
- **Grid Layout**: Responsive image grid
- **Lazy Loading**: Performance-optimized image loading

### 5. Testimonials
- **Customer Reviews**: Star ratings and feedback
- **Submission Form**: New review collection
- **Carousel Display**: Rotating testimonial cards

### 6. FAQ Section
- **Accordion Interface**: Expandable question sections
- **Smooth Animations**: CSS transitions for expand/collapse
- **Comprehensive Information**: Detailed service information

### 7. Contact & Footer
- **Contact Information**: Multiple contact methods
- **Social Media Links**: Professional social presence
- **Quick Links**: Easy navigation to key pages
- **WhatsApp Integration**: Direct messaging capability

## 🚀 Installation & Setup

### Prerequisites
- Web server (Apache, Nginx, or local development server)
- Modern web browser
- No database required (frontend-only)

### Quick Start
1. **Clone or Download** the repository
2. **Upload files** to your web server
3. **Configure** any necessary paths in the code
4. **Test** the website across different devices

### Local Development
```bash
# Using Python's built-in server
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP's built-in server
php -S localhost:8000
```

### Deployment
1. **Upload** all files to your web hosting
2. **Set** proper permissions for assets
3. **Test** all functionality
4. **Configure** any CDN or caching if needed

## 🔧 Customization

### Colors
Update the CSS custom properties in `global.css`:
```css
:root {
    --main-color: #004D40;
    --active-color: #fead00;
    /* Add your custom colors */
}
```

### Content
- **Images**: Replace files in `assets/image/`
- **Text**: Update content in `index.html`
- **Services**: Modify the service grid section
- **Contact Info**: Update footer and contact sections

### Animations
- **GSAP Animations**: Customize in `assets/javascript/animation.js`
- **CSS Transitions**: Modify in respective CSS files
- **Carousel Settings**: Update Splide configuration in `main.js`

## 📊 Performance Features

### Optimization Techniques
- **Minified CSS/JS**: Compressed for faster loading
- **Image Optimization**: WebP format where supported
- **Lazy Loading**: Images load when needed
- **Efficient Animations**: Hardware acceleration used
- **Minimal Dependencies**: Only essential libraries included

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🐛 Known Issues & Solutions

### Mobile Scroll Issues
✅ **Solved**: Implemented touch-optimized scrolling with proper overflow handling

### Image Loading on Mobile
✅ **Solved**: Simplified CSS structure for reliable image display

### Cross-browser Compatibility
✅ **Maintained**: Tested across major browsers and devices

## 🤝 Contributing

This is a custom business website. For modifications or improvements:
1. Test thoroughly on multiple devices
2. Maintain responsive design principles
3. Keep performance optimizations
4. Follow the existing code structure

## 📞 Support & Contact

- **Website**: [arovedwellness.com](https://arovedwellness.com)
- **Business Email**: Contact via website contact form
- **WhatsApp**: Integrated button on website

## 📄 License

This project is a custom business website. The code structure and techniques can be used for educational purposes, but please respect the business branding and content.

---

**Built with ❤️ for wellness and relaxation** 🌿

*Last updated: 2024*
