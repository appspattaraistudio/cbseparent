# cbseparent.in — Deployment Guide

## Recommended Hosting: Cloudflare Pages (FREE)

Cloudflare Pages is the best choice for cbseparent.in because:
- Free forever for static sites
- 300+ edge locations worldwide (fastest in India)
- Connect your custom domain (cbseparent.in) for free
- Automatic HTTPS / SSL
- Unlimited bandwidth
- Deploy from GitHub in seconds

---

## Option 1: Deploy via GitHub + Cloudflare Pages (Recommended)

### Step 1: Upload to GitHub
1. Go to https://github.com and create a free account
2. Create a new repository called `cbseparent`
3. Upload all files from this folder to the repository
4. Make sure `index.html` is in the root of the repository

### Step 2: Connect to Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Sign up / log in with a free Cloudflare account
3. Click "Create a project" → "Connect to Git"
4. Select your GitHub account and choose the `cbseparent` repository
5. Build settings:
   - **Framework preset**: None (static HTML)
   - **Build command**: (leave blank)
   - **Build output directory**: `/` (root)
6. Click "Save and Deploy"
7. Your site will be live at `cbseparent.pages.dev` in ~60 seconds!

### Step 3: Add Your Custom Domain
1. In Cloudflare Pages, go to your project → "Custom domains"
2. Click "Set up a custom domain"
3. Enter `cbseparent.in`
4. Follow the DNS instructions:
   - If your domain is registered with Cloudflare: automatic
   - If registered elsewhere (GoDaddy, Namecheap etc.): add a CNAME record:
     - **Name**: `@` (or `cbseparent.in`)
     - **Value**: `cbseparent.pages.dev`
5. Done! SSL is automatic.

---

## Option 2: Deploy via Netlify (Drag and Drop)

1. Go to https://netlify.com and sign up free
2. From the dashboard, drag the entire `cbseparent` folder onto the deploy area
3. Your site is live instantly at a `.netlify.app` URL
4. To add your custom domain: Site settings → Domain management → Add custom domain
5. Add a CNAME record pointing `cbseparent.in` to your Netlify URL

---

## Option 3: GitHub Pages (Free)

1. Upload files to a GitHub repository named `cbseparent.in`
2. Go to Settings → Pages → Source: Deploy from branch → main
3. Your site is live at `yourusername.github.io/cbseparent.in`
4. For custom domain: add a `CNAME` file with `cbseparent.in` in the root

---

## File Structure

```
cbseparent/
├── index.html              ← Homepage with age calculator
├── blog.html               ← Blog with 100 articles
├── age-eligibility.html    ← Age cutoff guide
├── kv-schools.html         ← KV admission guide
├── army-schools.html       ← Army/defence schools
├── scholarships.html       ← All scholarships
├── board-exams.html        ← Board exam guide
├── cbse-vs-icse.html       ← Board comparison
├── after-class10.html      ← Stream selection guide
├── cuet-guide.html         ← CUET guide
├── study-tips.html         ← Study strategies
├── about.html              ← About page
├── privacy.html            ← Privacy policy
├── css/
│   └── style.css           ← Shared stylesheet
├── js/
│   └── main.js             ← Shared JavaScript
└── DEPLOY.md               ← This file
```

---

## Next Steps After Launch

1. **Update Play Store link**: Replace `https://play.google.com/store` in index.html 
   with your actual app URL once published
2. **Add Google Analytics**: Insert GA4 tracking code in `<head>` of all pages for traffic insights
3. **Submit to Google Search Console**: https://search.google.com/search-console
   - Add property → verify via DNS → submit sitemap
4. **Create sitemap.xml**: Add all page URLs to help Google index faster
5. **Blog articles**: The blog cards are placeholders — create individual article pages 
   in a `/blog/` folder as you write content

---

## SEO Tips

- Each page has unique title, description, and keywords meta tags
- Use Google Search Console to submit sitemap once live
- Share on Facebook parenting groups and WhatsApp groups for initial traffic
- Add your site to Justdial and IndiaMART business listings for backlinks

---

## Contact

Apps Pattarai — hello@appspattarai.studio
https://appspattarai.studio
