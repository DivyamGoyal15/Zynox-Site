# 🚀 Zynox — Discord Bot Website Template

Zynox is a **modern, animated, production-ready website template** built for Discord bots.

This is not a basic landing page — it's a **fully customizable, multi-page system** designed for developers who want a clean, professional site for their bot without rewriting everything from scratch.

---

## ✨ Features

* ⚡ Fully animated UI (Framer Motion)
* 🎨 Modern design (glassmorphism + gradients)
* ⚙️ Central config system 
* 🧩 Modular component architecture
* 📄 Markdown-based pages (Privacy, TOS, Features)
* 📊 Dynamic commands system (JSON-based)
* 🔍 Command search + filtering
* 🌐 Multi-page routing
* 📴 Page enable/disable system
* 📱 Fully responsive
* 🚀 One-click deployment (Vercel / Netlify / GitHub Pages)

---

## 📁 Project Structure

```

  └── site.ts           # Main configuration

/content
  ├── features.md
  ├── privacy.md
  └── tos.md

/data
  ├── commands.json
  └── reviews.json

```

---

## ⚙️ Configuration

All main settings are controlled from:

```
/config/site.ts
```

### Example:

```ts
export const siteConfig = {
  botName: "Zynox",
  tagline: "Next-gen Discord protection and automation",
  botLogo: "https://your-image-link.com/logo.png",
  favicon: "https://your-image-link.com/favicon.png",

  botInviteLink: "https://discord.com/api/oauth2/authorize/...",
  supportServerLink: "https://discord.gg/yourserver",

  ownerName: "Your Name",
  ownerDiscordId: "your#tag",
  email: "you@example.com",

  stats: {
    serverCount: 1200,
    userCount: 250000
  },

  theme: {
    primary: "#6C5CE7",
    secondary: "#00CEC9",
    accent: "#FD79A8",
    background: "#0f0f1a"
  },

  pages: {
    landing: true,
    features: true,
    commands: true,
    privacy: true,
    tos: true
  }
};
```

---

## 📝 Editing Content

### Commands

Edit:

```
/data/commands.json
```

### Reviews

Edit:

```
/data/reviews.json
```

### Features Page

Edit:

```
/content/features.md
```

### Privacy Policy

Edit:

```
/content/privacy.md
```

### Terms of Service

Edit:

```
/content/tos.md
```

---

## 🧠 How It Works

* Config controls branding, links, theme, and page visibility
* Markdown files control long-form content
* JSON files control structured data (commands, reviews)
* Components dynamically render everything

---

## 🚀 Deployment

### 1. Vercel (Recommended)

1. Push repo to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click **Deploy**

Done.

---

### 2. Netlify

1. Push repo to GitHub
2. Go to https://netlify.com
3. Click **Add new site → Import from Git**
4. Select your repo

Build settings:

```
Build command: npm run build
Publish directory: dist (Vite) OR .next (Next.js)
```

---

### 3. GitHub Pages (Vite only)

1. Install gh-pages:

```
npm install gh-pages --save-dev
```

2. Add in `package.json`:

```json
"homepage": "https://your-username.github.io/repo-name",
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Build and deploy:

```
npm run build
npm run deploy
```

---

## 🛠️ Local Development

```
npm install
npm run dev
```

---

## 📦 Build for Production

```
npm run build
```

---

## 🔄 Customization Tips

* Change colors in config → instantly updates theme
* Replace logo → entire branding updates
* Disable pages → auto removed from navbar
* Edit markdown → updates pages without touching code

---

## 📜 License

Open-source. You can modify and use this freely.

---

## 🤝 Contributing

Pull requests are welcome.

If you're adding features:

* Keep code modular
* Follow existing structure
* Avoid hardcoding values

---

## ⚠️ Notes

* Do not hardcode content — use config, JSON, or markdown
* Keep animations smooth — avoid overloading performance
* Optimize images (important for load speed)

---

## 💡 Future Improvements

* Dashboard (bot stats API)
* Live Discord data integration
* Theme switcher (dark/light)
* Admin panel

---
