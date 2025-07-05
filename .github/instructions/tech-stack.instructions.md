---
description: Hướng dẫn về tech stack và dependencies chính của dự án HTML
applyTo: "**"
---

# Tech Stack và Dependencies

Dự án này sử dụng một stack công nghệ hiện đại cho phát triển web frontend với HTML, CSS, và JavaScript. Dưới đây là các dependencies chính và best practices.

## Stack Chính

### Core Technologies
- **HTML5** - Semantic markup với modern standards
- **CSS3** - Modern styling với custom properties và flexbox/grid
- **JavaScript (ES6+)** - Modern JavaScript với module system
- **Node.js** - Runtime environment (>= 20.15.1)

### Major Dependencies

#### Styling Framework
- **Tailwind CSS (^3.4.4)**
  - Utility-first CSS framework
  - **Best Practices:**
    - Sử dụng utility classes thay vì custom CSS khi có thể
    - Tận dụng responsive modifiers (sm:, md:, lg:, xl:)
    - Customize trong `tailwind.config.js` cho design system
    - Purge unused styles trong production build

#### Animation Library
- **GSAP (^3.13.0)**
  - Professional-grade animation library
  - **Best Practices:**
    - Sử dụng ScrollTrigger cho scroll-based animations
    - Optimize performance với will-change CSS property
    - Cleanup animations trong lifecycle methods
    - Sử dụng timeline cho complex animations
    - Prefer transform properties over layout-affecting properties

#### Code Quality Tools
- **ESLint (^9.7.0)**
  - JavaScript linting với modern config
  - **Best Practices:**
    - Sử dụng flat config format (eslint.config.js)
    - Enable TypeScript-aware rules nếu cần
    - Configure cho HTML files với eslint-plugin-html

- **Prettier (^3.3.3)**
  - Code formatting với Tailwind plugin
  - **Best Practices:**
    - Tích hợp với editor để format on save
    - Sử dụng prettier-plugin-tailwindcss để sort classes
    - Consistent formatting rules across team

#### Git Hooks & Workflow
- **Husky (^9.0.11)** - Git hooks management
- **lint-staged (^15.2.7)** - Run linters on staged files
- **@commitlint/cli (^19.3.0)** - Conventional commit messages

### Development Workflow Best Practices

#### Package Management
```bash
# Sử dụng npm với lockfile
npm ci  # Thay vì npm install trong CI/CD
npm audit fix  # Regular security updates
```

#### Build Scripts
```bash
# Development
npm start  # Watch mode với Tailwind CSS
npm run css-watch  # CSS compilation với watch

# Production
npm run css-build  # Minified CSS build
npm run lint  # Code quality check
npm run format  # Code formatting
```

#### Version Management
- **Node.js >= 20.15.1** - LTS version với modern features
- Sử dụng engines field để enforce Node version
- Regular updates cho security patches

## File Organization Best Practices

### CSS Architecture
```css
/* src/assets/stylesheets/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom component styles */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

### JavaScript Structure
```javascript
// src/assets/javascripts/main.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Proper GSAP registration
gsap.registerPlugin(ScrollTrigger);

// Modular code organization
const Animation = {
  init() {
    this.setupScrollTriggers();
  },

  setupScrollTriggers() {
    // Animation logic
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  Animation.init();
});
```

### HTML Best Practices
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Title</title>
  <link rel="stylesheet" href="assets/stylesheets/dist/main.css">
</head>
<body>
  <!-- Semantic HTML5 structure -->
  <main class="container mx-auto px-4">
    <!-- Content với Tailwind classes -->
  </main>

  <!-- Scripts ở cuối body -->
  <script src="assets/javascripts/lib/gsap.min.js"></script>
  <script src="assets/javascripts/main.js"></script>
</body>
</html>
```

## Performance Considerations

### CSS Optimization
- Sử dụng Tailwind's purge để remove unused styles
- Minify CSS trong production
- Use critical CSS cho above-the-fold content

### JavaScript Optimization
- Tree-shake GSAP modules (chỉ import cần thiết)
- Defer non-critical scripts
- Optimize animation performance với GPU acceleration

### Asset Optimization
- Compress images và use modern formats (WebP, AVIF)
- Lazy load images và videos
- Use CDN cho static assets

## Development Environment Setup

### Required Extensions (VS Code)
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Live Server

### Recommended Workflow
1. Setup pre-commit hooks với Husky
2. Use conventional commits
3. Regular dependency updates
4. Code review với linting checks
5. Performance testing với Lighthouse

## Migration Notes

### Tailwind CSS 3.x
- New color palette system
- Container queries support
- Modern CSS features (cascade layers)

### GSAP 3.x
- Timeline improvements
- Better ScrollTrigger API
- Enhanced performance
- Modern browser features support

Luôn tham khảo official documentation cho updates và breaking changes mới nhất.
