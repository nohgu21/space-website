# Space Tourism Website 
A fully responsive, modern space tourism website built with React, TypeScript, and Tailwind CSS. Experience the wonder of space travel through an immersive, interactive interface that showcases destinations, crew members, and cutting-edge technology.

## Features
### Core Features
- Fully Responsive Design - Seamlessly adapts to mobile, tablet, and desktop
- Interactive Navigation - Smooth transitions between different sections
- Dynamic Content - Browse destinations, crew members, and technology
- Modern UI/UX - Clean, space-themed design with smooth animations
- TypeScript Support - Type-safe development for better code quality
- Mobile-First Approach - Optimized for mobile devices with progressive enhancement

## Responsive Breakpoints

- Mobile: < 640px (Hamburger navigation menu)
- Tablet: 640px - 1024px (Horizontal navigation, stacked content)
- Desktop: 1024px+ (Full side-by-side layouts)

## Design Features

- Glassmorphism Effects - Modern backdrop blur and transparency
- Smooth Animations - CSS transitions and hover effects
- Consistent Typography - Space-themed font hierarchy
- Interactive Elements - Buttons, navigation, and content switching
- Background Images - Dynamic backgrounds per section

Tech Stack
Frontend Framework

React 18+ - Modern React with hooks and functional components
TypeScript - Type-safe JavaScript for better development experience
Tailwind CSS - Utility-first CSS framework for rapid styling

Key Dependencies

React Hooks - useState for state management
CSS Modules - Scoped styling (if needed)
Modern ES6+ - Arrow functions, destructuring, template literals

Development Tools

Vite (recommended) or Create React App
ESLint - Code linting
Prettier - Code formatting
TypeScript Compiler - Type checking

🚀 Getting Started
Prerequisites

Node.js (v16 or higher)
npm or yarn package manager
Modern web browser

Installation

- Clone the repository
```javascript
git clone https://github.com/nohgu21/space-tourism-website.git
cd space-website
```

- Install dependencies
```javascript
npm install
```

- Start the development server
```javascript
npm run dev
```

## Components Overview
### Navbar Component
File: src/components/Navbar.tsx

- Responsive Navigation: Horizontal menu on tablet/desktop, hamburger menu on mobile
- Active State Management: Highlights current section
- Smooth Animations: Slide-in mobile menu with backdrop blur
- Accessibility: ARIA labels and keyboard navigation support

### Homepage (SpacePage)
File: src/components/SpacePage.tsx

- Dynamic Background: Changes background image based on active section
- Section Router: Manages which page component to display
- Responsive Layout: Stacked on mobile, side-by-side on desktop
- Call-to-Action: Large "EXPLORE" button with hover effects

### Destination Page
File: src/components/DestinationPage.tsx

- Browse 4 space destinations (Moon, Mars, Europa, Titan)
- Dynamic content switching with smooth transitions
- Distance and travel time information
- Responsive image and content layout

### Crew Page
File: src/components/CrewPage.tsx

- Meet 4 crew members with detailed bios
- Role-based presentation (Commander, Pilot, etc.)
- Dot navigation system
- Professional crew member photos


### Technology Page
File: src/components/TechnologyPage.tsx

- Showcase 3 key technologies 
- Numbered circular navigation
- Dual image system (portrait for desktop, landscape for mobile)
- Technical descriptions and specifications

## Styling Guide
Color Palette
- Primary Text: text-white - White for major headings
- Secondary Text: text-gray-300 and text-blue-300 - Light gray and blue for h2 and paragraphs
- Accent Text: text-gray-100/50 - Semi-transparent for labels
- Interactive Elements: bg-white/10 - Glassmorphism backgrounds
- Hover States: hover:bg-gray-200/20 - Subtle hover effects

---
Made with ❤️ and effort by Victoria E.
