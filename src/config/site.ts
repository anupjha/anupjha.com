type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Anup Jha",
  description: "Anup Blogs",
  url: "https://anupjha.com/",
  ogImage: "https://anupjha.com/og",
  links: {
    twitter: "https://twitter.com/imanupjha",
    github: "https://github.com/anupjha",
  },
};
