# ResumeAce Portfolio - Next.js Starter

This is a Next.js starter project designed to quickly create a modern, responsive personal portfolio website. It uses ShadCN UI components, Tailwind CSS, and is built with the App Router.

## Features

*   **Modern Stack:** Next.js 15 (App Router), React 18, TypeScript
*   **Styling:** Tailwind CSS with CSS Variables for easy theming (via `globals.css`).
*   **UI Components:** Pre-configured with ShadCN UI (accessible and customizable components).
*   **Sections:** Includes common portfolio sections: Hero, Resume (Experience, Education, Skills), Projects, Contact Form.
*   **Responsive Design:** Adapts nicely to different screen sizes.
*   **Smooth Scrolling:** Implemented for navigation links.
*   **Client-Side Form Validation:** Using `react-hook-form` and `zod`.
*   **Toast Notifications:** For user feedback (e.g., form submission).
*   **Placeholder Content:** Easy-to-replace sample data for quick setup.

## Getting Started

### 1. Clone or Use Template

```bash
# Using git clone
git clone <repository-url> your-portfolio-name
cd your-portfolio-name

# Or use this repository as a template on GitHub
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Personalize Your Content

This is the most important step! Open the following files and replace the placeholder content with your own information:

*   **`src/app/layout.tsx`**:
    *   Update `<title>` and `description` in `metadata` with your name and professional tagline.
*   **`src/components/sections/hero.tsx`**:
    *   Change `userName` and `userTagline`.
    *   Replace the placeholder profile image (`src="https://picsum.photos/..."`). Upload your photo to the `public` folder (e.g., `public/profile.jpg`) and update the `src` to `/profile.jpg`. Update the `alt` text and `data-ai-hint`.
*   **`src/lib/data.ts`**:
    *   **`resumeData`**: Fill in your actual work experience, education, and skills.
    *   **`projectsData`**: Detail your projects.
        *   Replace placeholder images (`src="https://picsum.photos/..."`). Add your project screenshots to the `public` folder (e.g., `public/project-atlas.png`) and update the `src` (e.g., `/project-atlas.png`).
        *   Update `title`, `description`, `techStack`.
        *   Add correct `liveUrl` and `githubUrl` links (or remove the properties if not applicable).
        *   Update `aiHint` for better context if using AI image generation later.
    *   **`navLinks`**: Update if you change section IDs or add/remove sections.
*   **`src/components/footer.tsx`**:
    *   Update `githubUrl`, `linkedinUrl`, and `emailAddress`.
    *   Change the copyright name if necessary.
*   **`src/components/header.tsx`**:
    *   Update the logo text link (currently "Alex Chen").
*   **`src/components/sections/contact.tsx`**:
    *   Update the `contactEmail` variable displayed in the intro text.
    *   **Important:** The contact form currently uses a *mock* submission function (`submitForm`). You **must** replace this with a real implementation. Options include:
        *   Using a backend-as-a-service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/platform/forms/), [Vercel Forms](https://vercel.com/features/forms).
        *   Creating your own API endpoint (e.g., using Next.js API Routes or a separate backend) to handle email sending.
        *   Update the `onSubmit` function to call your chosen service/API.

### 4. Customize Styling (Optional)

*   **Colors & Theme:** Modify the CSS variables in `src/app/globals.css` to change the color scheme (background, foreground, accent, etc.).
*   **Tailwind:** Add or modify Tailwind classes directly in the components (`.tsx` files) for fine-grained style adjustments.
*   **Fonts:** The project uses `Inter` via `next/font/google` in `src/app/layout.tsx`. You can change this if desired.

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in `package.json`) in your browser.

## Deployment

This Next.js application is ready for deployment on platforms like:

*   **Vercel:** (Recommended) Push your code to GitHub/GitLab/Bitbucket and connect your repository to Vercel. It handles the build process and deployment automatically.
*   **Netlify:** Similar workflow to Vercel.
*   **Firebase Hosting:** You can export a static site (`next export`) or run it as a Node.js application. Refer to Firebase documentation for Next.js deployment.
*   **Other Node.js Hosting:** Build the app (`npm run build`) and start the server (`npm start`).

**Before deploying:**

1.  **Ensure all placeholder content is replaced.**
2.  **Implement a working contact form submission.**
3.  Run `npm run build` locally to check for build errors.

## Project Structure

```
.
├── public/              # Static assets (images, fonts)
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   │   ├── globals.css  # Global styles and Tailwind directives
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main page content
│   ├── components/      # React components
│   │   ├── sections/    # Page sections (Hero, Resume, etc.)
│   │   ├── ui/          # ShadCN UI components
│   │   ├── footer.tsx   # Site footer
│   │   └── header.tsx   # Site header
│   ├── hooks/           # Custom React hooks (useToast, useMobile)
│   ├── lib/             # Utility functions and data
│   │   ├── data.ts      # Resume, project, and navigation data
│   │   └── utils.ts     # Helper functions (e.g., cn for classnames)
│   └── types/           # TypeScript type definitions
│       └── index.ts
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Learn More

*   [Next.js Documentation](https://nextjs.org/docs)
*   [React Documentation](https://reactjs.org/)
*   [ShadCN UI Documentation](https://ui.shadcn.com/)
*   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
```