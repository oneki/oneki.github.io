const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

module.exports = {
  title: 'Oneki.js',
  tagline: 'An opinionated framework based on React',
  url: 'https://oneki.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Oneki', // Usually your GitHub org/user name.
  projectName: 'Oneki.js', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Oneki.js',
      /*logo: {
        alt: 'Oneki.js Logo',
        src: 'img/logo.svg',
      },*/
      links: [
        {to: 'docs/overview/installation', label: 'Docs', position: 'right'},
        {
          href: 'https://github.com/oneki/onekijs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/overview/installation',
            },
            {
              label: 'Demo app',
              to: 'docs/overview/crud-app',
            },
            {
              label: 'Hooks',
              to: 'docs/hooks/use-settings',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/onekijs',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oneki/onekijs',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Oneki.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [simplePlantUML],
          editUrl:
            'https://github.com/oneki/oneki.github.io/edit/source/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
