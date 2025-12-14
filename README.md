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

### Deploying to Vercel

The project is configured for easy deployment to Vercel:

**Option 1: Deploy via Vercel CLI**

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
vercel --prod
```

**Option 2: Deploy via Vercel Dashboard**

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository: `BeCreativeRuben/Portofolio`
5. Vercel will auto-detect Vite and configure the build settings
6. Click "Deploy"

The site will be live at `https://your-project-name.vercel.app`

**Note:** The `vercel.json` configuration file is already included in the project for optimal deployment settings.

## Configuration

### EmailJS Setup (Contact Form)

To enable the contact form and receive emails when someone submits the form:

#### Step 1: Create EmailJS Account
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Verify your email address

#### Step 2: Create an Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

#### Step 3: Create an Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. **Copy the Template ID** (you'll need this later)

#### Step 4: Get Your Public Key
1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** under API Keys
3. **Copy the Public Key** (you'll need this later)

#### Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory of your project
2. Add the following variables with your actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace the placeholder values with your actual EmailJS credentials

#### Step 6: Restart Development Server
After creating/updating your `.env` file, restart your development server:
```bash
npm run dev
```

#### For Production (Vercel)
1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the same three environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

**Note:** The `.env` file is already in `.gitignore` to keep your credentials secure. Never commit your actual credentials to GitHub!

### Customization

- **Projects**: Edit the `projects` array in `src/data/projects.ts` - simply add a new object to showcase more projects
- **Skills**: Update the `skills` array in `src/components/Bio.tsx`
- **Colors**: Modify the Tailwind theme in `tailwind.config.js`
- **Content**: Update text content in each component file

#### Adding New Projects

To add a new project to showcase:

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: 4, // Next available ID
  title: 'Your Project Name',
  description: 'A description of your project and its features.',
  technologies: ['React', 'TypeScript', 'Node.js'],
  githubUrl: 'https://github.com/username/repo',
  liveUrl: 'https://yourproject.com', // Optional
  image: 'https://example.com/screenshot.png', // Optional
  featured: true, // Optional, defaults to true
}
```

The project will automatically appear in the Projects section!

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
│   │   ├── Footer.tsx
│   │   └── ErrorBoundary.tsx
│   ├── data/
│   │   └── projects.ts   # Project data (easy to add new projects)
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

