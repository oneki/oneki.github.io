const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

module.exports = {
  title: "Oneki.js",
  tagline: "An opinionated framework based on React",
  url: "https://oneki.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Oneki", // Usually your GitHub org/user name.
  projectName: "Oneki.js", // Usually your repo name.
  themes: ["@saucelabs/theme-github-codeblock"],
  /*plugins: [
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        entryPoints: ['../onekijs/packages/onekijs-framework/src/index.ts'],
        tsconfig: '../onekijs/packages/onekijs-framework/tsconfig.json',
        theme: './theme/oneki',
        allReflectionsHaveOwnDocument: true,
      },
    ],
  ],*/
  themeConfig: {
    navbar: {
      title: "Oneki.js",
      logo: {
        alt: "Oneki.js Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/getting-started/introduction",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/oneki/onekijs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started/introduction",
            },
            {
              label: "Demo app",
              to: "docs/getting-started/creating-project",
            },
            {
              label: "Framework",
              to: "docs/framework/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/onekijs",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/oneki/onekijs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oneki.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [simplePlantUML],
          editUrl: "https://github.com/oneki/oneki.github.io/edit/source/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
