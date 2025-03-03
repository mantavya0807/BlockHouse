/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Crypto Price Tracker',
    tagline: 'Live cryptocurrency prices at your fingertips',
    url: 'https://your-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'your-org',
    projectName: 'crypto-price-tracker',
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Change the edit URL to point to your repository if needed.
            editUrl:
              'https://github.com/your-org/crypto-price-tracker-docs/edit/main/',
          },
          blog: {
            showReadingTime: true,
            editUrl:
              'https://github.com/your-org/crypto-price-tracker-docs/edit/main/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  }
  