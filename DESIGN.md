# Studio Thielman Portfolio - Design Documentation

This document provides a comprehensive overview of the design system, component specifications, and styling guidelines used in the Studio Thielman portfolio website.

---

## Table of Contents

1. [Design System](#design-system)
2. [Component Documentation](#component-documentation)
3. [Animations & Interactions](#animations--interactions)
4. [Responsive Design](#responsive-design)
5. [Technical Stack](#technical-stack)

---

## Design System

### Color Palette

#### Primary Colors
- **Primary Black**: `#000000` (`primary-black`)
  - Used for: Text, buttons, borders, active states
- **Primary White**: `#FAFAFA` (`primary-white`)
  - Used for: Background, card backgrounds, navigation backdrop

#### Gray Scale
- **Gray Dark**: `#1a1a1a` (`gray-dark`)
  - Used for: Darker text variants
- **Gray Light**: `#f5f5f5` (`gray-light`)
  - Used for: Section backgrounds, subtle dividers

#### Additional Colors
- **Background**: `#FAFAFA`
- **Text Primary**: `#000000`
- **Text Secondary**: `#666666` (gray-600)
- **Text Tertiary**: `#999999` (gray-400)
- **Border**: `#E5E5E5` (gray-200)
- **Error**: `#DC2626` (red-600)
- **Success**: `#16A34A` (green-600)

#### Scrollbar Styling
- **Width**: 8px
- **Track**: `#FAFAFA`
- **Thumb**: `#000000` with 4px border-radius
- **Thumb Hover**: `#333333`

### Typography

#### Font Family
- **Primary**: `'Inter', 'system-ui', '-apple-system', 'sans-serif'`
- **Weights Available**: 300, 400, 500, 600, 700, 800, 900
- **Font Smoothing**: Antialiased (WebKit and Mozilla)

#### Type Scale

**Headings**
- **H1 (Hero/Page Titles)**: 
  - Mobile: `text-4xl` (2.25rem / 36px)
  - Tablet: `text-5xl` (3rem / 48px)
  - Desktop: `text-6xl` (3.75rem / 60px)
  - Weight: `font-bold` (700)
  - Line height: Default

- **H2 (Section Titles)**:
  - Mobile: `text-4xl` (2.25rem / 36px)
  - Tablet: `text-5xl` (3rem / 48px)
  - Desktop: `text-6xl` (3.75rem / 60px)
  - Weight: `font-bold` (700)

- **H3 (Subsection Titles)**:
  - Mobile: `text-2xl` (1.5rem / 24px)
  - Tablet: `text-3xl` (1.875rem / 30px)
  - Weight: `font-bold` (700)

**Body Text**
- **Large**: `text-lg md:text-xl` (1.125rem / 18px → 1.25rem / 20px)
- **Base**: `text-base` (1rem / 16px)
- **Small**: `text-sm` (0.875rem / 14px)
- **Extra Small**: `text-xs` (0.75rem / 12px)

**Text Styling Patterns**
- **Uppercase**: Used for navigation items, buttons, labels, tags
- **Tracking**: `tracking-wider` (0.05em letter-spacing)
- **Line Height**: `leading-relaxed` for body text

### Spacing & Layout

#### Container Widths
- **Full Width Container**: `max-w-7xl` (1280px)
- **Medium Container**: `max-w-6xl` (1152px)
- **Narrow Container**: `max-w-5xl` (1024px)
- **Centered**: `mx-auto`

#### Padding Patterns

**Horizontal Padding**
- Mobile: `px-4` (1rem / 16px)
- Small: `sm:px-6` (1.5rem / 24px)
- Large: `lg:px-8` (2rem / 32px)
- Extra Large: `xl:px-12` (3rem / 48px)

**Vertical Padding**
- Sections: `py-12 md:py-16 lg:py-20`
  - Mobile: 3rem / 48px
  - Tablet: 4rem / 64px
  - Desktop: 5rem / 80px

**Component Padding**
- Cards: `p-6` (1.5rem / 24px)
- Form Fields: `px-4 py-3` (1rem / 16px horizontal, 0.75rem / 12px vertical)

#### Gaps
- **Grid Gaps**: `gap-6 md:gap-8` (1.5rem / 24px → 2rem / 32px)
- **Flex Gaps**: `gap-4` (1rem / 16px) for buttons, `gap-6` (1.5rem / 24px) for larger elements

### Borders & Shadows

#### Borders
- **Standard**: `border-2 border-gray-200` (2px solid #E5E5E5)
- **Focus**: `border-primary-black` (2px solid #000000)
- **Card Border**: `border border-gray-200`

#### Shadows
- **Card Default**: `shadow-sm`
- **Card Hover**: `box-shadow: 0 20px 40px rgba(0,0,0,0.1)`
- **Button Hover**: `box-shadow: 0 10px 30px rgba(0,0,0,0.3)`
- **Skill Tag Hover**: `box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1)`

---

## Component Documentation

### Navigation Component

#### Layout
- **Position**: Fixed at top (`fixed top-0 left-0 right-0`)
- **Z-Index**: `z-50`
- **Height**: 
  - Mobile: `h-16` (4rem / 64px)
  - Desktop: `h-20` (5rem / 80px)

#### Background Behavior
- **Default**: Transparent
- **On Scroll** (after 50px): `bg-primary-white/95 backdrop-blur-md shadow-sm`
- **Transition**: `transition-all duration-300`

#### Logo
- **Source**: `/sources/fulllogo_transparent.png`
- **Height**: 
  - Mobile: `h-14` (3.5rem / 56px)
  - Desktop: `h-16` (4rem / 64px)
- **Max Width**: 
  - Mobile: `max-w-[120px]`
  - Desktop: `max-w-[140px]`
- **Object Fit**: `contain`
- **Hover Effect**: Scale 1.05

#### Navigation Items (Desktop)
- **Layout**: Horizontal flex with `space-x-8` (2rem / 32px gap)
- **Font**: `text-sm font-medium uppercase tracking-wider`
- **Hover Effect**: Scale 1.1
- **Active Indicator**: 
  - Animated underline using Framer Motion `layoutId="activeSection"`
  - Height: `h-0.5` (2px)
  - Color: `bg-primary-black`
  - Animation: Spring (stiffness: 500, damping: 30)

#### Mobile Menu
- **Button**: Hamburger/Close icon (`HiMenu`/`HiX`)
- **Icon Size**: `h-6 w-6` (1.5rem / 24px)
- **Menu Container**: 
  - Background: `bg-primary-white border-t border-gray-200`
  - Animation: Height and opacity transition (0.3s)
- **Menu Items**: 
  - Full width, left-aligned
  - Padding: `py-2`
  - Hover: Slide right 10px (`x: 10`)
  - Active state: `text-primary-black`, inactive: `text-gray-600`

### Hero Section

#### Layout
- **Height**: Full viewport (`min-h-screen`)
- **Background**: `bg-primary-white`
- **Content Alignment**: Centered (`flex items-center justify-center`)
- **Overflow**: Hidden

#### Background Elements
Two animated circular borders that respond to mouse movement:
- **Circle 1**:
  - Position: `top-1/4 left-1/4`
  - Size: `w-96 h-96` (24rem / 384px)
  - Border: `border border-primary-black/5`
  - Animation: Follows mouse with spring physics, scales 1 → 1.1 → 1 (4s loop)

- **Circle 2**:
  - Position: `bottom-1/4 right-1/4`
  - Size: `w-64 h-64` (16rem / 256px)
  - Border: `border border-primary-black/5`
  - Animation: Inverse mouse movement (0.5x), scales 1 → 1.2 → 1 (5s loop)

#### Logo Display
- **Source**: `/sources/fulllogo_transparent_nobuffer.png`
- **Height**: 
  - Mobile: `h-24` (6rem / 96px)
  - Tablet: `h-32` (8rem / 128px)
  - Desktop: `h-40` (10rem / 160px)
- **Animation**: Scale from 0.8 to 1, fade in (1s duration)
- **Margin**: `mb-8` (2rem / 32px)

#### Subheading
- **Text**: "Crafting digital experiences with precision and innovation"
- **Size**: `text-lg md:text-xl lg:text-2xl`
- **Color**: `text-gray-600`
- **Max Width**: `max-w-2xl`
- **Margin**: `mb-12` (3rem / 48px)

#### CTA Buttons
- **Layout**: Flex column on mobile, row on desktop (`flex-col sm:flex-row`)
- **Gap**: `gap-4` (1rem / 16px)
- **Alignment**: Centered

**Primary Button (View Work)**
- Background: `bg-primary-black`
- Text: `text-primary-white`
- Padding: `px-8 py-4`
- Font: `font-semibold uppercase tracking-wider text-sm`
- Hover: Scale 1.05, shadow `0 10px 30px rgba(0,0,0,0.3)`
- Background hover: `bg-gray-800`

**Secondary Button (Get In Touch)**
- Border: `border-2 border-primary-black`
- Text: `text-primary-black`
- Padding: `px-8 py-4`
- Font: `font-semibold uppercase tracking-wider text-sm`
- Hover: `bg-primary-black text-primary-white`, scale 1.05

#### Scroll Indicator
- **Position**: Absolute bottom center (`bottom-8 left-1/2 -translate-x-1/2`)
- **Text**: "Scroll" (`text-xs uppercase tracking-wider`)
- **Icon**: `HiArrowDown` (`h-6 w-6`)
- **Color**: `text-primary-black/60` hover to `text-primary-black`
- **Animation**: Vertical bounce (0 → 10px → 0, 2s infinite)

#### Entry Animation
- **Container**: Stagger children by 0.2s, delay 0.3s
- **Items**: Fade in and slide up from 30px (0.8s duration, custom easing)

### Projects Section

#### Layout
- **Background**: `bg-gray-light` (`#f5f5f5`)
- **Padding**: Standard section padding
- **Container**: `max-w-7xl`

#### Section Header
- **Title**: "Featured Projects"
  - Size: `text-4xl md:text-5xl lg:text-6xl font-bold`
  - Alignment: Center
  - Margin: `mb-4`
- **Description**: 
  - Size: `text-lg md:text-xl text-gray-600`
  - Alignment: Center
  - Max Width: `max-w-2xl mx-auto`
  - Margin: `mb-10 md:mb-12 lg:mb-16`

#### Projects Grid
- **Layout**: 
  - Mobile: 1 column
  - Tablet: 2 columns (`md:grid-cols-2`)
  - Desktop: 3 columns (`lg:grid-cols-3`)
- **Gap**: `gap-6 md:gap-8`

#### Project Card
- **Background**: `bg-white`
- **Border**: `border border-gray-200`
- **Shadow**: `shadow-sm`
- **Hover Effect**: 
  - Lift: `y: -10` (translate up 10px)
  - Shadow: `0 20px 40px rgba(0,0,0,0.1)`
  - Transition: 0.3s duration

**Image Container**
- **Height**: `h-48` (12rem / 192px)
- **Background**: `bg-gray-200`
- **Overflow**: Hidden
- **Image**: 
  - Object fit: Cover
  - Hover scale: 1.1 (0.5s transition)
- **Overlay** (on hover):
  - Background: `bg-primary-black/80`
  - Display: Flex center with `gap-4`
  - Transition: 0.3s

**Action Buttons** (overlay)
- **Style**: 
  - Background: `bg-primary-white/20 backdrop-blur-sm`
  - Shape: `rounded-full`
  - Padding: `p-3`
  - Icon size: `h-6 w-6`
  - Color: `text-primary-white`
- **Hover**: Scale 1.1
- **Tap**: Scale 0.9

**Card Content**
- **Padding**: `p-6`
- **Title**: `text-xl font-bold mb-2`
- **Description**: `text-gray-600 mb-4 leading-relaxed`
- **Technology Tags**:
  - Container: Flex wrap with `gap-2`
  - Tag style: `px-3 py-1 bg-gray-100 text-xs font-medium uppercase tracking-wider`

#### Statistics Section
- **Position**: Below projects grid
- **Border Top**: `border-t border-gray-200`
- **Padding Top**: `pt-10 md:pt-12 lg:pt-16`
- **Layout**: Grid 3 columns (`md:grid-cols-3`)
- **Gap**: `gap-8`
- **Alignment**: Center
- **Number**: `text-3xl font-bold mb-2`
- **Label**: `text-gray-600 uppercase tracking-wider text-sm`

### Bio Section

#### Layout
- **Background**: `bg-primary-white`
- **Padding**: Standard section padding
- **Container**: `max-w-7xl`

#### Section Header
- **Title**: "About Me"
  - Size: `text-4xl md:text-5xl lg:text-6xl font-bold`
  - Alignment: Center
  - Margin: `mb-8 md:mb-10 lg:mb-12`

#### Content Layout
- **Grid**: 2 columns on tablet+ (`md:grid-cols-2`)
- **Gap**: `gap-6 md:gap-8 lg:gap-12`
- **Alignment**: Items start

#### Image
- **Source**: `/sources/WhatsApp Image 2026-01-11 at 13.25.54.jpeg`
- **Max Width**: `max-w-xs` (20rem / 320px)
- **Aspect Ratio**: `aspect-[3/4]` (portrait)
- **Border Radius**: `rounded-lg`
- **Shadow**: `shadow-lg`
- **Object**: Cover, center positioned

#### Bio Text
- **Layout**: Vertical stack with `space-y-6`
- **Font**: `text-lg md:text-xl leading-relaxed text-gray-700`
- **Paragraphs**: 3 paragraphs with consistent styling

#### Skills Section
- **Title**: "Skills & Technologies"
  - Size: `text-2xl md:text-3xl font-bold`
  - Margin: `mb-8`
- **Container**: Flex wrap with `gap-3 md:gap-4`

**Skill Tag**
- **Padding**: `px-4 py-2.5 md:px-5 md:py-3`
- **Background**: `bg-white`
- **Border**: `border-2 border-primary-black`
- **Font**: `text-xs md:text-sm font-semibold uppercase tracking-wider`
- **Border Radius**: `rounded-lg`
- **Shadow**: `shadow-sm`
- **Hover Effect**:
  - Scale: 1.08
  - Translate: `y: -4` (up 4px)
  - Shadow: `0 8px 16px rgba(0, 0, 0, 0.1)`
  - Background: `bg-primary-black`
  - Text: `text-white`
  - Transition: 0.2s
- **Animation**: Staggered entry (0.04s delay per item)

### Contact Section

#### Layout
- **Background**: `bg-primary-white`
- **Padding**: Standard section padding
- **Container**: `max-w-5xl`

#### Section Header
- **Title**: "Get In Touch"
  - Size: `text-4xl md:text-5xl lg:text-6xl font-bold`
  - Alignment: Center
  - Margin: `mb-4`
- **Description**: 
  - Size: `text-lg md:text-xl text-gray-600`
  - Alignment: Center
  - Max Width: `max-w-2xl mx-auto`
  - Margin: `mb-6`

#### Contact Information
- **Layout**: Flex column on mobile, row on desktop (`flex-col sm:flex-row`)
- **Alignment**: Center
- **Gap**: `gap-6`
- **Margin**: `mb-10 md:mb-12 lg:mb-16`

**Contact Item**
- **Layout**: Flex items center with `gap-2`
- **Icon**: `h-5 w-5`
- **Text**: `text-sm md:text-base`
- **Color**: `text-gray-700` hover to `text-primary-black`
- **Hover**: Scale 1.05
- **Tap**: Scale 0.95

#### Contact Form

**Form Container**
- **Layout**: Vertical stack with `space-y-6`

**Form Field**
- **Label**:
  - Display: Block
  - Font: `text-sm font-medium uppercase tracking-wider`
  - Margin: `mb-2`
- **Input/Textarea**:
  - Width: Full (`w-full`)
  - Padding: `px-4 py-3`
  - Border: `border-2 border-gray-200`
  - Background: Transparent
  - Focus: `border-primary-black`, `ring-2 ring-primary-black ring-offset-2`
  - Transition: Colors
  - Focus Animation: Scale 1.02
- **Textarea**:
  - Rows: 6
  - Resize: None
- **Error Message**:
  - Color: `text-red-600`
  - Size: `text-sm`
  - Margin: `mt-1`
  - Animation: Fade in and slide down

**Submit Button**
- **Width**: Full on mobile, auto on desktop (`w-full md:w-auto`)
- **Padding**: `px-12 py-4`
- **Background**: `bg-primary-black`
- **Text**: `text-primary-white`
- **Font**: `font-semibold uppercase tracking-wider text-sm`
- **Disabled**: `opacity-50 cursor-not-allowed`
- **Hover**: Scale 1.05, shadow `0 10px 30px rgba(0,0,0,0.3)`
- **Tap**: Scale 0.95

**Status Messages**
- **Success**:
  - Color: `text-green-600`
  - Layout: Flex items center with `gap-2`
  - Icon: `HiCheckCircle h-5 w-5`
- **Error**:
  - Color: `text-red-600`
  - Layout: Flex column with `gap-2`
  - Icon: `HiXCircle h-5 w-5`
  - Error details: `text-sm text-red-500 ml-7`

### Footer

#### Layout
- **Background**: `bg-primary-black`
- **Text**: `text-primary-white`
- **Padding**: `py-12 px-4 sm:px-6 lg:px-8`
- **Container**: `max-w-7xl`

#### Content Layout
- **Layout**: Flex column on mobile, row on desktop (`flex-col md:flex-row`)
- **Justify**: Space between
- **Align**: Center
- **Gap**: `gap-8`

#### Logo
- **Source**: `/sources/fulllogo_transparent_nobuffer.png`
- **Height**: `h-8` (2rem / 32px)
- **Filter**: `brightness-0 invert` (white logo on black)

#### Social Links
- **Layout**: Flex items center with `gap-6`
- **Icon Size**: `h-6 w-6`
- **Color**: `text-primary-white/80` hover to `text-primary-white`
- **Hover**: Scale 1.2, translate up 5px
- **Tap**: Scale 0.9

#### Copyright
- **Text**: `text-sm text-primary-white/60 uppercase tracking-wider`
- **Content**: "© {currentYear} Studio Thielman. All rights reserved."

---

## Animations & Interactions

### Framer Motion Animations

#### Entry Animations

**Fade In**
- Duration: 0.6s
- Easing: `ease-in-out`
- From: `opacity: 0`
- To: `opacity: 1`

**Slide Up**
- Duration: 0.6s
- Easing: `ease-out`
- From: `opacity: 0, y: 20px` or `y: 30px` or `y: 50px`
- To: `opacity: 1, y: 0`

**Slide Down**
- Duration: 0.6s
- Easing: `ease-out`
- From: `opacity: 0, y: -20px`
- To: `opacity: 1, y: 0`

#### Stagger Animations
- **Pattern**: Stagger children by 0.1s or 0.2s
- **Delay**: Optional initial delay (e.g., 0.3s)
- **Used in**: Hero, Projects, Bio, Contact sections

#### Hover Effects

**Scale**
- **Small**: 1.05 (buttons, logos, icons)
- **Medium**: 1.08 (skill tags)
- **Large**: 1.1 (navigation items, project cards)
- **Large**: 1.2 (social icons)

**Lift**
- **Cards**: Translate up 10px (`y: -10`)
- **Tags**: Translate up 4px (`y: -4`)

**Shadows**
- **Buttons**: `0 10px 30px rgba(0,0,0,0.3)`
- **Cards**: `0 20px 40px rgba(0,0,0,0.1)`
- **Tags**: `0 8px 16px rgba(0, 0, 0, 0.1)`

#### Active Section Indicator
- **Type**: Layout animation using `layoutId="activeSection"`
- **Animation**: Spring physics
- **Stiffness**: 500
- **Damping**: 30
- **Effect**: Smooth underline that follows active navigation item

#### Scroll-Triggered Animations
- **Hook**: `useInView` from Framer Motion
- **Options**: `once: true, margin: '-100px'`
- **Effect**: Animations trigger when element enters viewport (with 100px offset)

#### Mouse-Responsive Elements
- **Hero Background Circles**: 
  - Follow mouse position with spring physics
  - Stiffness: 50
  - Damping: 20
  - Scale animation: Continuous loop (4s and 5s)

#### Button States

**Hover**
- Scale: 1.05
- Shadow: Applied
- Background/Color: May change

**Tap/Click**
- Scale: 0.95 or 0.9
- Immediate feedback

**Focus**
- Ring: `ring-2 ring-primary-black ring-offset-2`
- Scale: 1.02 (form inputs)

**Disabled**
- Opacity: 0.5
- Cursor: Not allowed
- No hover effects

#### Continuous Animations

**Scroll Indicator**
- Type: Vertical bounce
- Values: `y: [0, 10, 0]`
- Duration: 2s
- Repeat: Infinite
- Easing: `easeInOut`

**Background Circles**
- Type: Scale pulse
- Values: `[1, 1.1, 1]` or `[1, 1.2, 1]`
- Duration: 4s or 5s
- Repeat: Infinite
- Easing: `easeInOut`

---

## Responsive Design

### Breakpoints

The design uses Tailwind CSS breakpoints:

- **sm**: 640px (small tablets, large phones)
- **md**: 768px (tablets)
- **lg**: 1024px (small desktops)
- **xl**: 1280px (large desktops)

### Mobile-First Approach

All styles are designed mobile-first, with breakpoint modifiers for larger screens.

### Responsive Patterns

#### Navigation
- **Mobile**: Hamburger menu, vertical layout
- **Desktop**: Horizontal menu bar

#### Typography
- **Headings**: Scale from `text-4xl` → `text-5xl` → `text-6xl`
- **Body**: Scale from `text-lg` → `text-xl` → `text-2xl`

#### Grids
- **Projects**: 1 column → 2 columns → 3 columns
- **Bio**: 1 column → 2 columns (image + text)

#### Spacing
- **Padding**: Increases at each breakpoint
- **Gaps**: Increases from `gap-6` to `gap-8`

#### Layouts
- **Flex Direction**: Column on mobile → Row on desktop
- **Button Width**: Full on mobile → Auto on desktop

### Viewport Considerations

- **Min Height**: Sections use `min-h-screen` for full viewport height
- **Overflow**: Horizontal overflow hidden on body
- **Scroll Behavior**: Smooth scrolling enabled

---

## Technical Stack

### Core Technologies

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3+
- **Animations**: Framer Motion

### Dependencies

#### UI & Icons
- **React Icons**: 
  - Heroicons (`hi`) - Navigation, UI elements
  - Font Awesome (`fa`) - Social media icons

#### Forms
- **React Hook Form**: Form state management and validation
- **EmailJS**: Email sending service integration

#### Animation
- **Framer Motion**: All animations and transitions

### Configuration Files

#### Tailwind Config (`tailwind.config.js`)
- Custom colors: `primary-black`, `primary-white`, `gray-dark`, `gray-light`
- Custom font family: Inter
- Custom animations: `fade-in`, `slide-up`, `slide-down`
- Custom keyframes for animations

#### Global Styles (`src/styles/globals.css`)
- Base reset styles
- Custom scrollbar styling
- Font smoothing
- Smooth scroll behavior

### Environment Variables

Required for Contact form:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

### Asset Paths

All images are served from `/sources/`:
- Logo: `fulllogo_transparent.png`, `fulllogo_transparent_nobuffer.png`
- Project images: Various PNG/JPG files
- Bio image: `WhatsApp Image 2026-01-11 at 13.25.54.jpeg`

---

## Design Principles

### Minimalism
- Clean, uncluttered layouts
- Generous white space
- Focus on content

### Consistency
- Uniform spacing system
- Consistent typography scale
- Reusable component patterns

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance

### Performance
- Lazy loading images
- Optimized animations
- Efficient re-renders with React

### User Experience
- Smooth scrolling
- Clear navigation
- Visual feedback on interactions
- Responsive across all devices

---

## Code Examples

### Button Styling Pattern

```tsx
<motion.button
  className="px-8 py-4 bg-primary-black text-primary-white font-semibold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
  whileTap={{ scale: 0.95 }}
>
  Button Text
</motion.button>
```

### Section Container Pattern

```tsx
<section className="min-h-screen py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-primary-white">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Staggered Animation Pattern

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}
```

---

## Notes

- All measurements are in rem units (converted from Tailwind classes)
- Colors use hex values for precision
- Animations use custom easing curves for smooth, natural motion
- The design prioritizes readability and user experience
- All interactive elements have clear hover and focus states
- The layout is fully responsive and tested across device sizes

---

*Last Updated: Based on current codebase as of documentation creation*
