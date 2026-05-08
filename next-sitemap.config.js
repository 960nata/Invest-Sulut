/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://forum-investasi-sulut.id',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://forum-investasi-sulut.id/server-sitemap.xml',
    ],
  },
}
