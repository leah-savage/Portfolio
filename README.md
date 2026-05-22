# Leah Savage — Portfolio Site

A clean, minimal HTML/CSS/JS portfolio. No frameworks, no build step.
Open any .html file directly in a browser, or publish via GitHub Pages.

---

## File Structure

```
leah-portfolio/
├── index.html        ← Work page (landing page)
├── about.html        ← About page
├── contact.html      ← Contact page
├── work-01.html      ← Project detail (duplicate this for each project)
├── work-02.html
├── ... (work-03 through work-10)
├── style.css         ← All styles (edit colors, fonts, spacing here)
├── main.js           ← Blob animation + nav logic
└── README.md
```

---

## How to Customize

### Your name & nav
Already set to "Leah Savage" throughout. If you ever want to change it,
find-and-replace "Leah Savage" across all .html files in VS Code:
  Edit → Find in Files → check "Replace"

### Colors (style.css, top of file)
```css
--cream: #F5F2EC;       /* page background */
--jade: #4A7C59;        /* accent color */
--dark: #2C2C2A;        /* headings */
--grey: #5C5C58;        /* body text */
```
Change --jade to any color to retheme the whole site instantly.

### Fonts
Loaded from Google Fonts in style.css. To swap:
1. Go to fonts.google.com, pick a font, copy the @import URL
2. Replace the @import line at the top of style.css
3. Update --font-serif or --font-sans variable values

---

## Adding Your Work

### To update the grid (index.html)
Each .work-card block has:
1. A thumbnail image area — replace the <svg> placeholder with:
   <img src="images/your-cover.jpg" alt="Project name" />
2. A title and year

### To update a project detail page (work-01.html, etc.)
- Change the <title> tag
- Update the project title in .detail-title
- Fill in the meta rows (year, type, role)
- Replace SVG placeholders with your actual images
- Write your project description in .detail-body

### Images
Create an /images/ folder inside leah-portfolio/ and put all your
project images there. Reference them as: src="images/filename.jpg"

Recommended image sizes:
- Grid thumbnails: 800×600px (4:3 ratio)
- Detail cover: 1600×900px (16:9 ratio)
- Detail body images: 1200×900px (4:3 ratio)

---

## Publishing to GitHub Pages

1. Create a new GitHub repository (e.g. "portfolio")
2. Upload all files in this folder to the repo
3. Go to Settings → Pages
4. Source: Deploy from a branch → main → / (root)
5. Your site will be live at: https://yourusername.github.io/portfolio

Your custom domain (if you have one):
Settings → Pages → Custom domain → enter your domain

---

## Contact Page
Open contact.html and update:
- The LinkedIn URL: href="https://www.linkedin.com/in/yourhandle"
- The LinkedIn display text: linkedin.com/in/yourhandle
- The email: href="mailto:your@email.com" and the display text

---

## Questions or changes
The site is intentionally simple — everything is in plain HTML and CSS.
If something looks off, inspect it in Chrome DevTools (right-click → Inspect)
to see exactly which CSS rule is controlling it.
