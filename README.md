# Jatin Thakur — Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Designed for static-friendly deployment on Vercel.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validate before deployment

```bash
npx tsc --noEmit
npm run build
```

The `lint` script may need to be updated if you upgrade Next.js to a version that no longer supports `next lint`; you can run ESLint directly if configured.

## Update your information

Edit `data/portfolio.ts` to update profile details, skills, work experience, case studies, certifications, and links. The GitHub profile URL is intentionally blank until you add your actual profile URL. Optional links are not rendered when blank.

The site intentionally has no phone number. Keep contact details to email and professional profile links.

## Resume

The site expects the redacted resume at `public/resume.pdf`. Replace it with your latest resume when needed. Review the PDF before publishing to ensure it contains only the contact details you want to share.

## GitHub

Create a repository named `jatin-thakur-portfolio`, then run these commands from this project directory after creating the repository:

```bash
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/jatin-thakur-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username. Do not commit secrets or environment files.

## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the framework preset as **Next.js**.
4. Use `npm run build` as the build command and leave the output directory at its default.
5. Optionally set `NEXT_PUBLIC_SITE_URL` to the deployed canonical site URL (for example, your final Vercel domain).
6. Deploy, then verify the home page, mobile navigation, project dialogs, email/LinkedIn links, and resume download.

Vercel can automatically redeploy when you push new commits to the connected production branch.

## Custom domain

In Vercel, open the project settings and add your domain. Follow the DNS instructions Vercel provides, then update `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS URL and redeploy.

## Notes

- Professional case studies are generalized and avoid internal banking implementation details.
- Performance metrics are not invented.
- Replace the default canonical URL with your real deployed domain before launch.
- This project does not claim that a GitHub repository or Vercel deployment has already been created.
