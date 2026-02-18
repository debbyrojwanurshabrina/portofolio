# Professional Monochrome Portfolio

A clean, minimalist, and professional portfolio template designed for Human Resources professionals, built with pure HTML, CSS, and vanilla JavaScript.

## 📂 Project Structure

```
/
├── index.html              # Main HTML file containing all content
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet (Monochrome theme, responsive layout)
│   ├── js/
│   │   └── script.js       # Interactivity (Mobile menu, scroll animations)
│   └── img/                # Directory for images (e.g., og details, hidden assets)
└── README.md               # Documentation
```

## 🚀 Deployment Guide (Netlify)

This project is static and ready for immediate deployment on Netlify.

### Option 1: Drag & Drop (Easiest)
1.  **Log in** to [Netlify](https://app.netlify.com/).
2.  Go to the **"Sites"** tab.
3.  Drag the **entire project folder** (containing `index.html`) onto the "Drag and drop your site output folder here" area.
4.  Netlify will upload and deploy your site instantly.
5.  **Rename your site** in "Site Settings" -> "Change site name" to something professional (e.g., `yourname-portfolio.netlify.app`).

### Option 2: Connect via GitHub (Recommended for updates)
1.  **Push** this code to a GitHub repository.
2.  **Log in** to Netlify and click "Add new site" -> "Import an existing project".
3.  Select **GitHub** and authorize.
4.  Choose your repository.
5.  **Build Settings**: Leave these empty! Since it's a static site, no build command or publish directory is needed (just ensure the base directory is the root).
6.  Click **Deploy**.

## ⚡ Optimization Tips for a Professional Look

1.  **Resume/CV**:
    - Place your actual PDF resume in the root folder or `assets/` and update the `href` in the "Download CV" button: `<a href="assets/YourName_CV.pdf" download>`.
    
2.  **SEO (Search Engine Optimization)**:
    - Update the `<title>` tag in `index.html` with your name and key role.
    - Update the `<meta name="description">` with a concise summary of your expertise.
    - Add Open Graph meta tags (og:title, og:description, og:image) for better sharing on LinkedIn/Twitter.

3.  **Performance**:
    - **Minify CSS/JS**: Use online tools to minify `style.css` and `script.js` before production for faster load times.
    - **Images**: If you add a profile photo, compress it using tools like TinyPNG to keep it under 100KB without losing quality.
    - **Favicon**: Add a simple favicon (e.g., initials in a black square) to the `<head>` section (`<link rel="icon" href="favicon.ico">`).

4.  **Custom Domain**:
    - Purchase a domain (e.g., `yourname.com`) and connect it to Netlify for the ultimate professional touch.

## 🎨 Customization

-   **Colors**: Edit the `:root` variables in `assets/css/style.css` to change the monochrome shades if needed.
-   **Fonts**: The project uses **Inter** from Google Fonts. To change it, update the `<link>` in `index.html` and the `--font-main` variable in CSS.
