export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MpaKuGig",
  description: "Freelancer Workflow Automation Software",
  logo: {
    dark: "/images/logos/dark.svg",
    light: "/images/logos/light.svg",
  },
  url: "https://mpakugig.com/",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Features",
      href: "/#features",
    },
    {
      label: "Blog",
      href: "/#blog",
    }
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  contacts: {
    tel: ["+256-701-092-815"],
    email: "hello@mpakugig.com/",
    tele: "+256701092815",
    address: "Plot 851 Serumaga Road, Bukoto, Kampala, Uganda",
  },
};
