# GitHub Pages + GoDaddy Deployment Guide for COVETEN.com

## 🚀 Complete Setup Guide

### Files Added for GitHub Pages Compatibility

1. **`.nojekyll`** - Empty file that tells GitHub Pages not to process the site with Jekyll
2. **`CNAME`** - Contains your custom domain: `coveten.com`

### Step 1: GitHub Repository Setup

1. **Create GitHub Repository:**
   - Go to GitHub.com and create a new public repository
   - Name it something like `coveten-website` or `coveten.com`
   - Make sure it's **PUBLIC** (GitHub Pages requires public repos for free accounts)

2. **Upload Your Files:**
   ```bash
   # In your local project directory
   git init
   git add .
   git commit -m "Initial commit - COVETEN website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. **Navigate to Repository Settings:**
   - Go to your GitHub repository
   - Click on **Settings** tab
   - Scroll down to **Pages** section (left sidebar)

2. **Configure Source:**
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"** (or master)
   - Folder: Select **"/ (root)"**
   - Click **Save**

3. **Wait for Deployment:**
   - GitHub will provide a URL like: `https://username.github.io/repository-name`
   - It may take 5-10 minutes for the initial deployment

### Step 3: GoDaddy DNS Configuration

1. **Access GoDaddy DNS Management:**
   - Login to GoDaddy
   - Go to **My Products** → **DNS**
   - Find your `coveten.com` domain and click **Manage**

2. **Add Required DNS Records:**

   **For apex domain (coveten.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 1 Hour
   ```

   ```
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 1 Hour
   ```

   ```
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 1 Hour
   ```

   ```
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 1 Hour
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 1 Hour
   ```

3. **Remove Conflicting Records:**
   - Delete any existing A records pointing to GoDaddy's parking page
   - Remove any CNAME records for @ or www that conflict

### Step 4: Custom Domain Setup in GitHub

1. **Configure Custom Domain:**
   - In your GitHub repository Settings → Pages
   - Under **Custom domain**, enter: `coveten.com`
   - Check **"Enforce HTTPS"** (wait 24 hours after DNS propagation)
   - GitHub will verify domain ownership via the CNAME file

### Step 5: Troubleshooting Common Issues

#### Issue 1: 404 Error or Site Not Loading
**Solutions:**
- Ensure your main file is named `index.html` (not `home.html` or `main.html`)
- Verify the repository is **public**
- Check that GitHub Pages is enabled in repository settings
- Wait 5-10 minutes after making changes

#### Issue 2: CSS/JS Not Loading
**Symptoms:** Plain HTML appears but no styling or functionality
**Solutions:**
- ✅ **Fixed:** All CSS/JS paths use relative paths (`css/style.css`, `js/main.js`)
- ✅ **Fixed:** Added `.nojekyll` file to prevent Jekyll processing
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

#### Issue 3: Mixed Content Errors (HTTP/HTTPS)
**Symptoms:** Some images or resources don't load on HTTPS
**Solutions:**
- ✅ **Fixed:** All external resources use HTTPS URLs
- ✅ **Verified:** Google Fonts and Font Awesome URLs are secure
- Check browser console for any remaining HTTP resource warnings

#### Issue 4: DNS Propagation Delay
**Symptoms:** Domain shows GoDaddy parking page or DNS errors
**Solutions:**
- DNS changes can take 24-48 hours to propagate globally
- Check DNS propagation: https://dnschecker.org/#A/coveten.com
- Clear browser DNS cache or try incognito mode

#### Issue 5: Images Not Loading
**Symptoms:** Broken image icons or missing product images
**Solutions:**
- ✅ **Fixed:** All images use HTTPS URLs from reliable sources
- Some external images may have hotlinking protection
- Consider hosting critical images in your repository if needed

### Step 6: Verification Steps

1. **Test GitHub Pages URL:**
   - Visit `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - Verify all pages load correctly
   - Check that CSS/JS is working

2. **Test Custom Domain:**
   - Visit `https://coveten.com`
   - Test all navigation links
   - Verify responsive design on mobile

3. **Check All Functionality:**
   - ✅ Navigation menu works
   - ✅ Product filtering on products page
   - ✅ Contact form functionality
   - ✅ Dark mode toggle
   - ✅ Responsive design

### Step 7: Maintenance & Updates

**To Update Your Website:**
1. Make changes to your local files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
3. GitHub Pages will automatically redeploy (2-5 minutes)

**Monitor Performance:**
- Use Google PageSpeed Insights: https://pagespeed.web.dev/
- Check for broken links regularly
- Monitor domain renewal dates in GoDaddy

### Common File Structure Issues Fixed

✅ **Correct Structure:**
```
your-repo/
├── index.html          (Homepage)
├── products.html       (Products page)
├── services.html       (Services page)  
├── contact.html        (Contact page)
├── CNAME              (Contains: coveten.com)
├── .nojekyll          (Empty file)
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
└── README.md
```

### Security Considerations

1. **HTTPS Enforcement:**
   - ✅ Enable "Enforce HTTPS" in GitHub Pages settings
   - All external resources use HTTPS
   - Browser will show secure lock icon

2. **Domain Security:**
   - Consider enabling DNSSEC in GoDaddy for additional security
   - Monitor for unauthorized DNS changes

### Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **GoDaddy DNS Help:** https://godaddy.com/help/manage-dns-680
- **DNS Propagation Checker:** https://dnschecker.org/

---

## 🎯 Quick Deployment Checklist

- [ ] Repository is public on GitHub
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Files include `.nojekyll` and `CNAME`
- [ ] GoDaddy DNS A records point to GitHub IPs
- [ ] Custom domain configured in GitHub Pages settings
- [ ] Wait 24-48 hours for full DNS propagation
- [ ] Test both GitHub URL and custom domain
- [ ] Enable HTTPS enforcement after domain verification

**Expected Timeline:**
- GitHub Pages deployment: 5-10 minutes
- DNS propagation: 1-48 hours
- SSL certificate issuance: 24 hours after DNS propagation

Your COVETEN website should now be live at https://coveten.com! 🚀