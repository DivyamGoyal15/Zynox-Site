// ============================================================
// ZYNOX SITE CONFIG — Edit everything here
// ============================================================

export const siteConfig = {
  // Bot Identity
  botName: "Zynox",
  tagline: "The Ultimate Discord Guardian",
  description: "Advanced protection, moderation, logging & automation — all in one powerhouse bot.",
  botLogo: "/logo.png",
  favicon: "/favicon.ico",

  // Links
  botInviteLink: "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=8",
  supportServerLink: "https://discord.gg/yourserver",
  githubLink: "https://github.com/yourusername/zynox",

  // Owner Info
  ownerName: "Divyam Goyal",
  ownerDiscordId: "YOUR_DISCORD_ID",
  email: "contact@zynox.bot",
  discordTag: "divyam#0001",

  // Theme Colors (CSS HSL values)
  theme: {
    primary: "239 84% 67%",        // Indigo
    secondary: "271 91% 65%",      // Purple
    accent: "199 89% 48%",         // Cyan
    background: "224 71% 4%",      // Deep Navy
    surface: "225 25% 10%",        // Card bg
    text: "210 40% 98%",           // Near white
    muted: "215 16% 47%",          // Muted text
  },

  // Stats (update with real numbers)
  stats: {
    serverCount: "2,500+",
    userCount: "150,000+",
    commandsCount: "80+",
    uptimePercent: "99.9%",
  },

  // Feature Toggles — set false to hide page from nav + routing
  features: {
    enableLandingPage: true,
    enableFeaturesPage: true,
    enableCommandsPage: true,
    enablePrivacyPage: true,
    enableTosPage: true,
  },

  // SEO
  seo: {
    title: "Zynox — The Ultimate Discord Guardian",
    description: "Advanced protection, moderation, logging & automation — all in one powerhouse Discord bot.",
    ogImage: "/og-image.png",
    twitterHandle: "@zynoxbot",
  },
} as const;

export type SiteConfig = typeof siteConfig;