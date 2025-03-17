# Huggies Nepal Official Website


A modern, responsive  website for Huggies Nepal built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This is the official website for Huggies Nepal, designed to provide information about Huggies products, parenting resources, and connect with customers in Nepal. The website focuses on performance optimization, user experience, and search engine visibility.

## 🚀 Live Demo

[View the live website](#) (Coming soon)

## ✨ Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Product Showcase**: Interactive product galleries with detailed information
- **Resource Center**: Parenting tips, articles, and guides
- **Store Locator**: Find nearby retailers carrying Huggies products
- **Optimized Performance**: Fast loading times with SSG and SSR implementation
- **SEO Friendly**: Structured data and optimized metadata
- **Accessibility**: WCAG compliant design and implementation

## 🛠️ Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## ⚙️ Technical Implementation

### Performance Optimization
- **Static Site Generation (SSG)**: Pre-renders pages at build time for faster initial load
- **Server-Side Rendering (SSR)**: Dynamic content rendered on server for SEO benefits
- **Image Optimization**: Next.js Image component for automatic optimization
- **Dynamic Routes**: Implemented with getStaticParams for efficient generation
- **Code Splitting**: Automatic code splitting for faster page loads

### SEO Enhancements
- **Metadata Management**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD implementation for rich search results
- **Sitemap Generation**: Automatic sitemap creation
- **Canonical URLs**: Proper handling to prevent duplicate content issues

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/vanshaj932/huggies-nepal.git
cd huggies-nepal
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📂 Project Structure

```
├── components/              # Reusable UI components
│   ├── common/              # Shared components (Header, Footer, etc.)
│   ├── home/                # Home page specific components
│   ├── products/            # Product related components
│   └── ui/                  # Basic UI elements
├── pages/                   # Next.js pages
│   ├── api/                 # API routes
│   ├── products/            # Product pages
│   ├── resources/           # Resource pages
│   └── _app.tsx             # App component
├── public/                  # Static assets
├── styles/                  # Global styles
├── lib/                     # Utility functions and shared logic
├── types/                   # TypeScript type definitions
└── next.config.js           # Next.js configuration
```

## 🔧 Configuration

The project uses the following Next.js configuration for optimization:

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['huggies-media.com'],
  },
  i18n: {
    locales: ['en', 'ne'],
    defaultLocale: 'en',
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Vanshaj Kumar Karn - [karnvanshaj123@outlook.com](mailto:karnvanshaj123@outlook.com)

Project Link: [https://github.com/vanshaj932/huggies-nepal](https://github.com/vanshaj932/huggies-nepal)
