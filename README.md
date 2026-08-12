# JamJuice - Product Launch Motion Video

A 1-to-1 frame-accurate recreation of the JamJuice product launch video built using **React**, **TypeScript**, and **Remotion**.

---

## Overview

This project programmatically animates the full JamJuice platform showcase across 15 synchronized scenes:

1. **Opening Question**: Dynamic floating pill badges & text entry.
2. **What If**: Glowing coral red headline transition.
3. **Brand Reveal**: Iconic JamJuice logo entry with soundwave graphics.
4. **Dark Mode Transition**: Smooth atmospheric lighting shift.
5. **Talent Profile**: 3D profile card untwist, luminous edge-light strokes, and scrolling artist details.
6. **Talent Discovery**: Explore Artists dashboard with animated cursor, multi-card like button interactions, and left marquee exit.
7. **No Invoices**: Gmail Payment Success notification card with staggered side typography.
8. **Payment Management**: Upcoming Bookings UI morphing into New Booking Form & Month Calendar scheduling grid.
9. **Promotions**: 3D Poster Flyer Carousel with anti-clockwise cylinder rotation and scale shrinkage.
10. **Pricing Matrix**: Features Lite vs Pro comparison table with typewriter subtitle animation.
11. **FAQ & Venues**: ZUZU luxury venue webpage with Upstairs script header and scrolling events.
12. **Auto-Generated Flyers**: Radial arc deck fan card spread with typewriter header.
13. **In-App Messaging**: Realtime chat dashboard with active conversation thread & speech bubble.
14. **Venue Reviews**: Soft pink review testimonial cards sliding in from top & bottom.
15. **CTA & Outro**: Tropical music CTA landing page with interactive cursor click on "Book Talent Now" and final clean brand outro.
16. **Audio**: High quality background music track (*Before Chill* by Yomoti).

---

## Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **FFmpeg**: Installed on system path for audio/video rendering

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Remotion Studio Preview
```bash
npm run dev
# or
npm start
```
This opens Remotion Studio in your browser (usually at `http://localhost:3000`).

### 3. Render Final Video
```bash
npm run render
```
This renders the full 70-second 1080p high-definition video output to:
`output/final_video.mp4`

---

## Project Structure

```
├── output/
│   └── final_video.mp4       # Final rendered video output
├── public/
│   └── bg-music.mp3          # Audio track (Before Chill by Yomoti)
├── src/
│   ├── animations/           # Smooth easing & interpolation helpers
│   ├── components/           # Reusable UI components (Logo, Background, FloatingPill)
│   ├── constants/            # Timeline sequence bounds & theme color tokens
│   ├── scenes/               # Modular scene implementations (Scene01 - Scene16)
│   ├── Root.tsx              # Remotion Composition configuration
│   ├── template.tsx          # Main video template sequencing all scenes
│   └── index.ts              # Remotion entry point
├── package.json
└── tsconfig.json
```

---

## Tech Stack

- **Framework**: Remotion 4.x
- **UI & Logic**: React 18 + TypeScript 5
- **Styling**: Pure Inline CSS / CSS-in-JS (Harmonious HSL, dark gradients, glassmorphism)
