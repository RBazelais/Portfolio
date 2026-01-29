# Portfolio

A modern, animated portfolio website built with Next.js 16, featuring smooth scrolling, parallax effects, and dynamic page transitions.

## ✨ Features

- **Smooth Scrolling**: Implemented using Lenis for buttery-smooth scroll experiences
- **Parallax Effects**: Eye-catching background animations that respond to scroll
- **Page Transitions**: Seamless animations powered by Framer Motion
- **Dynamic Project Pages**: Individual project pages with dynamic routing
- **Experience Timeline**: Interactive tabs showcasing professional experience and education
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Performance Optimized**: Built with Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [@studio-freight/lenis](https://github.com/studio-freight/lenis)
- **React**: React 19
- **Linting**: ESLint with Next.js configuration

## 📂 Project Structure

```text
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── projects/          # Dynamic project routes
│       └── [slug]/        # Individual project pages
├── components/            # React components
│   ├── About.jsx          # About section
│   ├── ExperienceTabs.jsx # Experience & education tabs
│   ├── PageTransition.jsx # Page transition wrapper
│   ├── ParallaxBackground.jsx # Parallax effects
│   ├── Projects.jsx       # Projects showcase
│   ├── ScrollAnimations.jsx # Scroll-triggered animations
│   └── Sidebar.jsx        # Navigation sidebar
├── data/                  # Content data
│   ├── education.js       # Education information
│   ├── experience.js      # Work experience
│   └── projects.js        # Project details
└── providers/             # Context providers
    └── SmoothScrollProvider.jsx # Lenis scroll provider
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1\. Clone the repository:

```bash
git clone https://github.com/RBazelais/PortfolioV1.git
cd PortfolioV1
```

2\. Install dependencies:

```bash
npm install
```

3\. Run the development server:

```bash
npm run dev
```

4\. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## 📝 Customization

### Adding Projects

Edit [src/data/projects.js](src/data/projects.js) to add or modify projects. Each project includes:

- Title, subtitle, and description
- Project images
- GitHub and live URLs
- Features and challenges
- Tech stack details

### Updating Experience

Modify [src/data/experience.js](src/data/experience.js) and [src/data/education.js](src/data/education.js) to update your professional background.

### Styling

Global styles are in [src/app/globals.css](src/app/globals.css). Tailwind configuration uses the default Tailwind CSS 4 setup with PostCSS.

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/RBazelais/PortfolioV1)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using Next.js and Tailwind CSS
