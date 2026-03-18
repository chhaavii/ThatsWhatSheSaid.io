## That's What They Said 🎯

A chaotic little browser game where you guess **which world leader said what** based on cursed quotes. Built with **Next.js 16**, **React 19**, **Tailwind** UI styling, and a **3D Trump** Sketchfab embed for the final results screen.

> --- MADE BY CHHAVI :)

---

### Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript + React 19
- **Styling**: Tailwind (shadcn-style components)
- **3D**: Sketchfab embedded viewer

---

### Features

- **Randomized quiz**: Each game pulls **6 random questions** from a larger pool of ridiculous quotes.
- **Instant feedback**: See immediately if you were right, with the correct answer highlighted.
- **Final score screen**: Shows your score, a fun message, and an embedded animated **Donald Trump** 3D model.
- **Replayable**: “Play Again” reshuffles a brand‑new set of 6 questions.

---

### Getting Started (Local)

#### 1. Clone the repo

```bash
git clone https://github.com/chhaavii/ThatsWhatSheSaid.io.git
cd ThatsWhatSheSaid.io
```

_(If you’re copying from another folder, just make sure all project files, including `app`, `components`, `public`, etc. are inside this repo directory.)_

#### 2. Install dependencies

This project uses `pnpm`, but `npm`/`yarn` also work.

```bash
# using pnpm (recommended)
pnpm install

# or using npm
npm install
```

#### 3. Run the dev server

```bash
pnpm dev
# or
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

### Project Structure (high level)

- `app/page.tsx` – main quiz logic, random questions, score screen.
- `app/layout.tsx` – global layout, fonts, metadata.
- `components/TrumpModel.tsx` – Sketchfab Donald Trump 3D embed used on the final score screen.
- `components/ui/*` – reusable UI components (buttons, cards, etc.).
- `public/` – static assets (icons, background image, etc.).

---

### 3D Model Credits

The Donald Trump 3D model is embedded from Sketchfab:

- **Model**: “Donald Trump”  
- **Author**: `ᗰOᑎKEY ᗪ. ᒪᑌᖴᖴY`  
- **Link**: `https://sketchfab.com/3d-models/donald-trump-8e014fdb1c524308a8fe59b87e66fc2e`

All rights to that model belong to the original creator on Sketchfab.

---

### Deployment

You can deploy this easily to platforms like **Vercel**:

1. Push this project to your GitHub repo.
2. Import the repo into Vercel.
3. Use the default Next.js build settings (`pnpm install` / `pnpm build`).

Vercel will handle the rest and give you a live URL you can share.

---

### Made By

Built with love (and chaos) by **CHHAVI**.  
Feel free to fork, remix, or add even more unhinged quotes.

