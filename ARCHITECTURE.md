# Zynox Site Architecture — Complete Guide

## Overview

Your site has been completely restructured from a hardcoded mess to a **fully dynamic, configuration-driven system**. Everything now flows through `site.ts` as the single source of truth.

## Problem Fixed

### Before (Hardcoded Problems)
- ❌ Navigation links hardcoded in HTML
- ❌ Stats frozen in HTML (couldn't change without editing HTML)
- ❌ Pages couldn't be hidden via config
- ❌ Content files ignored (features.md, privacy.md, tos.md never used)
- ❌ Data files ignored (commands.json, reviews.json never used)
- ❌ Multiple edits needed to change one thing
- ❌ No way to toggle features on/off
- ❌ Links hardcoded (bot invite, support server, etc.)

### After (Dynamic Solution)
- ✅ All navigation auto-built from `site.ts`
- ✅ Stats controlled from `site.ts` config
- ✅ Pages can be toggled on/off with `pages.{pageName}.enabled`
- ✅ All content auto-loaded from `/content/` directory
- ✅ All data auto-loaded from `/data/` directory
- ✅ Single source of truth: `site.ts`
- ✅ Change config once, entire site updates
- ✅ Links come from config, not hardcoded

---

## File Structure

```
Zynox Site/
├── index.html              # Minimal HTML skeleton (NO hardcoded content)
├── site.ts                 # CONFIG FILE (EDIT THIS!)
├── main.ts                 # Dynamic rendering engine
├── content/                # Markdown content files
│   ├── features.md        # Features documentation
│   ├── privacy.md         # Privacy policy
│   └── tos.md             # Terms of service
└── data/                   # JSON data files
    ├── commands.json      # All bot commands (auto-loaded)
    └── reviews.json       # Customer testimonials (auto-loaded)
```

---

## How It Works

### 1. **Configuration Flow**
```
site.ts (config)
    ↓
main.ts (reads config)
    ↓
Fetches content files (markdown)
    ↓
Fetches data files (JSON)
    ↓
Renders everything dynamically
```

### 2. **Page Rendering Process** 
When you load the site:
1. `index.html` loads with empty page containers
2. `main.ts` imports from `site.ts`
3. For each enabled page in config:
   - Load corresponding content file (if exists)
   - Load corresponding data file (if exists)
   - Parse markdown to HTML
   - Render the page with config values
4. Navigation built from enabled pages
5. Links replaced with config values

### 3. **Dynamic Updates**
Change something in `site.ts`? The site updates because:
- Config values are read at runtime
- All text comes from config or loaded files
- Pages toggle based on config boolean
- No hard refresh needed (reload page to see changes)

---

## How to Use `site.ts` (The Configuration File)

### Bot Identity
```typescript
botName: "Zynox",           // Bot name everywhere
botEmoji: "⚡",             // Used in branding
tagline: "The Ultimate...",  // Tagline
description: "Advanced...", // Meta description
```

### Links (Auto-replaced throughout site)
```typescript
botInviteLink: "https://discord.com/oauth2/authorize?...",
supportServerLink: "https://discord.gg/nJS8D3AdJz",
githubLink: "https://github.com/...",
```

### Stats (Auto-displayed in hero & pages)
```typescript
stats: {
  label1: "Servers Protected",
  value1: "2,500+",
  label2: "Active Members",
  value2: "150,000+",
  label3: "Commands",
  value3: "80+",
  label4: "Uptime",
  value4: "99.9%",
}
```

### Hero Section (Customizable)
```typescript
hero: {
  badgeText: "Now Protecting",
  mainTitle: "The Ultimate Discord Guardian",
  tagline: "Advanced antinuke protection...",
}
```

### Hero Buttons (Dynamic)
```typescript
heroButtons: [
  { 
    text: "Invite to Server",
    icon: "discord",
    link: "INVITE_LINK",  // Uses botInviteLink
    type: "primary"
  },
  { 
    text: "Support Server",
    icon: "message",
    link: "SUPPORT_LINK",  // Uses supportServerLink
    type: "ghost"
  },
]
```

### PAGE TOGGLES (Most Important!) 

```typescript
pages: {
  home: {
    enabled: true,
    label: "Home",
    icon: "🏠",
    path: "home",
    showInNav: true,
  },
  features: {
    enabled: true,  // ← SET FALSE TO HIDE PAGE
    label: "Features",
    icon: "✨",
    path: "features",
    showInNav: true,
    contentFile: "/content/features.md",  // Auto-loaded!
  },
  commands: {
    enabled: true,
    label: "Commands",
    icon: "⌨️",
    path: "commands",
    showInNav: true,
    dataFile: "/data/commands.json",  // Auto-loaded!
  },
  // ... more pages
}
```

### Data Sources

```typescript
dataSources: {
  reviewsFile: "/data/reviews.json",      // Used in Reviews section
  commandsFile: "/data/commands.json",    // Used in Commands page
}
```

### Theme Colors

```typescript
theme: {
  primary: "239 84% 67%",      // Main brand color
  secondary: "271 91% 65%",    // Accent color
  accent: "199 89% 48%",       // Highlights
  // ... more colors
}
```

---

## Editing Your Site

### ✏️ Want to hide a page?

In `site.ts`, find the page and set `enabled: false`:

```typescript
privacy: {
  enabled: false,  // Privacy page won't show
  // ... rest of config
}
```

**Result**: Privacy page disappears from navigation & is inaccessible.

---

### ✏️ Want to change hero stats?

Edit in `site.ts`:

```typescript
stats: {
  label1: "Servers Protected",
  value1: "3,000+",  // Changed from 2,500+
  // ...
}
```

**Result**: Hero section updates immediately on page reload.

---

### ✏️ Want to change invite link?

Edit in `site.ts`:

```typescript
botInviteLink: "https://discord.com/oauth2/authorize?client_id=YOUR_NEW_ID&...",
```

**Result**: All "Invite" buttons point to new link automatically.

---

### ✏️ Want to update feature description?

Edit `/content/features.md`:

```markdown
# Zynox Features Documentation

## Your Title

Your new content here...
```

**Result**: Features page updates on reload (markdown auto-parsed to HTML).

---

### ✏️ Want to add new commands?

Edit `/data/commands.json`:

```json
[
  {
    "category": "General",
    "icon": "Info",
    "color": "#6366f1",
    "commands": [
      {
        "name": "yours_here",
        "usage": "$your_command [args]",
        "description": "Description"
      }
    ]
  }
]
```

**Result**: Commands page updates on reload (JSON auto-loaded & rendered).

---

### ✏️ Want to update testimonials?

Edit `/data/reviews.json`:

```json
[
  {
    "serverName": "Your Server",
    "ownerName": "Your Name",
    "avatarInitial": "Y",
    "avatarColor": "#6366f1",
    "memberCount": "10,000",
    "rating": 5,
    "review": "Your testimonial here!"
  }
]
```

**Result**: Reviews section updates on reload.

---

## Key Features

### 1. **Configuration-Driven Everything**
- Navigation auto-built from `sites.ts`
- Page visibility toggled via boolean
- Links centralized & easily changeable
- Stats pulled from config

### 2. **Automatic Content Loading**
- Markdown files auto-loaded & parsed
- JSON data auto-loaded & rendered
- No manual HTML editing needed

### 3. **Dynamic Routing**
- Pages switch without full reload
- URL updates (#home, #features, etc.)
- Back/forward button works

### 4. **No Hardcoding**
- Zero hardcoded links
- Zero hardcoded navigation
- Zero hardcoded stats
- Everything lives in `site.ts` or data files

### 5. **Easy Maintenance**
- Need to hide a page? One boolean
- Change a link? One place
- Update content? Edit markdown
- Add commands? Add to JSON

---

## Common Tasks

### Hide the Features page
```typescript
// In site.ts
features: {
  enabled: false,  // ← Hide it
  // ...
}
```

### Change bot name everywhere
```typescript
// In site.ts
botName: "New Name",  // Shows in nav, footer, hero, etc.
```

### Add a new command
```typescript
// In data/commands.json
// Add to the commands array in your category
{
  "name": "newcmd",
  "usage": "$newcmd [args]",
  "description": "What it does"
}
```

### Update privacy policy
```markdown
# In content/privacy.md
// Edit the markdown, page auto-updates
```

### Change hero title
```typescript
// In site.ts
hero: {
  mainTitle: "Your New Title",
  // ...
}
```

### Add a hero button
```typescript
// In site.ts
heroButtons: [
  // ... existing buttons
  {
    text: "New Button",
    icon: "icon",
    link: "LINK_NAME",
    type: "ghost"
  }
]
```

---

## File Relationships

```
site.ts (SOURCE OF TRUTH)
├── Provides: config values
├── Used by: main.ts
└── Controls: everything

main.ts (RENDERING ENGINE)
├── Reads: site.ts
├── Loads: /content/ & /data/
├── Renders: all pages
└── Updates: DOM dynamically

content/ (MARKDOWN PAGES)
├── features.md → Features page
├── privacy.md → Privacy page
└── tos.md → Terms page

data/ (JSON DATA)
├── commands.json → Commands page
└── reviews.json → Reviews section
```

---

## Technical Details

### How Pages Work
1. Every page is a div: `<div class="page" id="page-home"></div>`
2. On navigation, `main.ts` calls `navigate(pageName)`
3. Config checked: `if (pageConfig.enabled)`
4. Content/Data loaded via fetch
5. HTML rendered & injected into page div
6. Page switched from hidden to active

### How Config Works
1. `site.ts` exports config as TypeScript constant
2. `main.ts` imports it: `import { siteConfig } from './site.ts'`
3. Config values read at runtime
4. Any changes = reload page to see

### How Content Loads
1. `main.ts` reads `contentFile` path from config
2. Fetches markdown file: `fetch('/content/features.md')`
3. Parses markdown to HTML
4. Injects into page container

### How Data Loads  
1. `main.ts` reads `dataFile` path from config
2. Fetches JSON file: `fetch('/data/commands.json')`
3. Renders HTML from JSON
4. Injects into page container

---

## Next Steps

1. **Customize `site.ts`** with your bot details
2. **Update `/content/` files** with your documentation
3. **Update `/data/` files** with your actual commands & reviews
4. **Test by toggling** pages on/off in config
5. **Verify** all links work correctly

---

## Troubleshooting

### Features page not loading?
- Check `content/features.md` exists
- Verify `enabled: true` in config
- Check console for fetch errors

### Commands not showing?
- Verify `/data/commands.json` is valid JSON
- Check `enabled: true` in config
- Ensure JSON structure matches

### Navigation not updating?
- Reload the page (refresh browser)
- Check `showInNav: true` in config
- Verify page `enabled: true`

### Links broken?
- Check `site.ts` links are complete URLs
- Verify placeholder names match (`INVITE_LINK`, `SUPPORT_LINK`)
- Check `heroBu ttons` link field names

---

## Summary

✅ **Before**: Hardcoded → Broken → Time-consuming updates  
✅ **After**: Config-driven → Flexible → Single-source-of-truth

**One change in `site.ts` = Entire site updates. No compromises!** 🚀
