# Portfolio - Dark Navy Design

A modern developer portfolio built with Next.js, featuring a dark navy theme, typewriter hero effect, Three.js 3D character, and neon green accents.

## Features

- Dark navy background with subtle gradient/vignette effect
- Typewriter-style hero headline with blinking cursor
- 3D character illustration using Three.js
- Right-side vertical navigation with smooth scrolling
- Outlined CTA button with envelope icon
- Bottom-right social icons (Email, GitHub, LinkedIn)
- Responsive design
- Modern, clean developer portfolio aesthetic

## Color Palette

- Navy: `#0a192f` (background)
- Light Navy: `#112240`, `#233554` (gradient/vignette effects)
- Slate: `#8892b0`, `#a8b2d1`, `#ccd6f6` (text hierarchy)
- White: `#e6f1ff` (primary text)
- Green: `#64ffda` (accent color)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. Update the hero text in `components/Hero.tsx`
2. Modify the intro paragraph in the Hero component
3. Update social links in `components/SocialIcons.tsx`
4. Customize the email in `components/CTAButton.tsx`
5. Add your content to the About, Experience, and Software Creations sections in `app/page.tsx`
6. Adjust the 3D character in `components/Character3D.tsx`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Three.js (via @react-three/fiber)
- React Icons

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles and theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page with sections
├── components/
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── Character3D.tsx  # Three.js character
│   ├── Navigation.tsx   # Vertical navigation
│   ├── CTAButton.tsx    # CTA button
│   └── SocialIcons.tsx  # Social links
└── public/              # Static assets
```

