# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Framer Motion, showcasing work and accomplishments with a minimalist black and white aesthetic.

## Features

- **Modern Stack**: React + Vite + TypeScript for fast development and type safety
- **Smooth Animations**: Framer Motion for scroll-triggered animations and interactions
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Minimalist Aesthetic**: Clean black and white design matching Studio Thielman branding
- **Sections**:
  - Hero/Home section with animated logo and call-to-action
  - Bio section with skills and background
  - Projects showcase with interactive cards
  - Contact form with validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

### EmailJS Setup (Contact Form)

To enable the contact form, you'll need to:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the contact form in `src/components/Contact.tsx` with your credentials:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

Alternatively, you can replace the EmailJS integration with your own backend API.

### Customization

- **Projects**: Edit the `projects` array in `src/components/Projects.tsx`
- **Skills**: Update the `skills` array in `src/components/Bio.tsx`
- **Colors**: Modify the Tailwind theme in `tailwind.config.js`
- **Content**: Update text content in each component file

## Project Structure

```
├── public/
│   └── sources/          # Logo files
├── src/
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── Bio.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   └── globals.css   # Global styles
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **React Hook Form** - Form handling
- **EmailJS** - Email service
- **React Icons** - Icon library

## License

This project is private and proprietary.

