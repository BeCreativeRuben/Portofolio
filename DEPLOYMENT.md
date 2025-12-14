# Deployment Guide

This guide covers deploying the portfolio website to Vercel.

## Prerequisites

- GitHub repository with your code (already set up)
- Vercel account (free tier works perfectly)

## Deployment Methods

### Method 1: Vercel CLI (Recommended for Developers)

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate with Vercel.

#### Step 3: Deploy

From your project directory:

```bash
vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first deployment)
- **What's your project's name?** → portfolio-website (or your preferred name)
- **In which directory is your code located?** → `./` (current directory)

Your site will be deployed and you'll get a URL like:
`https://portfolio-website.vercel.app`

### Method 2: Vercel Dashboard (Easiest)

#### Step 1: Push to GitHub

Make sure your code is pushed to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Import Project

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Select your repository: `BeCreativeRuben/Portofolio`
5. Vercel will auto-detect the Vite framework

#### Step 3: Configure (Optional)

Vercel should auto-detect these settings:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

You can leave these as-is or customize if needed.

#### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

Your site will be live in about 1-2 minutes!

### Method 3: GitHub Integration (Automatic Deployments)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Enable **"Automatic deployments from Git"**
5. Every push to `main` branch will automatically deploy

## Configuration

The project includes a `vercel.json` file with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:
- ✅ Correct build commands
- ✅ Proper output directory
- ✅ SPA routing works correctly (all routes redirect to index.html)

## Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

If you need to add environment variables (e.g., for EmailJS):

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Add your variables
4. Redeploy

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `npm run build` works locally

### 404 Errors on Routes

- Ensure `vercel.json` includes the rewrites configuration
- Check that all routes redirect to `index.html`

### Assets Not Loading

- Verify paths use relative URLs (Vite handles this automatically)
- Check that `public` folder files are being copied to `dist`

## Updating Your Site

After making changes:

1. Commit and push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. If using automatic deployments, Vercel will deploy automatically
3. If using CLI, run `vercel --prod` again

## Performance Tips

- Vercel automatically optimizes images
- Static assets are served from CDN
- Builds are cached for faster deployments
- Consider enabling Vercel Analytics for insights

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- [GitHub Issues](https://github.com/BeCreativeRuben/Portofolio/issues)

