---
description: Hướng dẫn về cấu trúc thư mục và các file quan trọng trong dự án HTML
applyTo: "**"
---

# Cấu trúc Dự Án HTML

Dự án này là một dự án HTML sử dụng GSAP cho animation và Tailwind CSS cho styling. Dưới đây là cấu trúc thư mục và mô tả các file quan trọng.

## Cấu trúc Thư Mục Chính

```
HTML-Base-Project/
├── .github/                    # GitHub configuration và Copilot rules
│   └── instructions/           # Copilot instructions files
│       ├── copilot-rules.instructions.md
│       ├── self-improvement.instructions.md
│       └── project-structure.instructions.md
├── src/                       # Source code chính
│   ├── index.html             # Main entry point của project
│   ├── assets/                # Static assets
│   │   ├── images/            # Hình ảnh và media files
│   │   ├── javascripts/       # JavaScript files
│   │   │   ├── main.js        # Main JavaScript file
│   │   │   └── lib/           # External libraries
│   │   │       ├── gsap.min.js         # GSAP animation library
│   │   │       ├── ScrollTrigger.min.js # GSAP ScrollTrigger
│   │   │       └── SplitText.min.js     # GSAP SplitText
│   │   └── stylesheets/       # CSS files
│   │       └── main.css       # Main stylesheet
│   └── pages/                 # Additional HTML pages
│       └── about.html         # About page
├── package.json               # Node.js dependencies và scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

## File Quan Trọng

### Entry Points
- **`src/index.html`** - Trang chính của dự án, entry point cho users
- **`src/assets/javascripts/main.js`** - Main JavaScript file chứa logic chính
- **`src/assets/stylesheets/main.css`** - Main CSS file với custom styles

### Configuration Files
- **`package.json`** - Node.js dependencies, scripts và project metadata
- **`tailwind.config.js`** - Tailwind CSS customization và configuration
- **`eslint.config.js`** - ESLint rules cho code quality
- **`.github/instructions/`** - Copilot rules và instructions

### Libraries và Dependencies
- **GSAP Libraries** (`src/assets/javascripts/lib/`)
  - `gsap.min.js` - Core GSAP animation library
  - `ScrollTrigger.min.js` - Scroll-based animations
  - `SplitText.min.js` - Text animation effects

## Quy Tắc Tổ Chức File

### HTML Files
- Main page: `src/index.html`
- Additional pages: `src/pages/`
- Sử dụng semantic HTML5 markup
- Include proper meta tags và SEO optimization

### CSS/Styling
- Main styles: `src/assets/stylesheets/main.css`
- Sử dụng Tailwind CSS utility classes
- Custom styles và components trong [tailwind.config.js](../../tailwind.config.js)
- Use Tailwind CSS classes in HTML; do not write new styling in [main.css](../../src/assets/stylesheets/main.css)
- Responsive design với mobile-first approach

### JavaScript
- Main logic: `src/assets/javascripts/main.js`
- External libraries: `src/assets/javascripts/lib/`
- Sử dụng ES6+ syntax
- GSAP animations với ScrollTrigger integration

### Assets Organization
- Images: `src/assets/images/` với subfolders theo feature
- Icon files và graphics organized by purpose

## Best Practices

### File Naming
- HTML files: lowercase với hyphens (e.g., `about.html`)
- CSS files: lowercase với hyphens (e.g., `main.css`)
- JS files: camelCase hoặc lowercase (e.g., `main.js`)
- Image files: descriptive names với hyphens

### Code Organization
- Tách biệt concerns: HTML structure, CSS styling, JS behavior
- Modular CSS với utility-first approach
- JavaScript modules và reusable functions
- Optimize assets cho performance

### Development Workflow
- Sử dụng ESLint cho code quality
- Follow Tailwind CSS conventions
- GSAP animations với proper performance optimization
- Responsive design testing across devices

## Integration Points

### Build Process
- Tailwind CSS compilation
- Asset optimization
- Code linting với ESLint
- Development server setup
