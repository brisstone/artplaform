const { m } = require('framer-motion')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_URL: process.env.BASE_URL,
    CMS_URL: process.env.CMS_URL,
    SOCKET_URL: process.env.SOCKET_URL,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    YOUTUBE_PLAYLIST_CHANNEL_ID: process.env.YOUTUBE_PLAYLIST_CHANNEL_ID,
    TAPFILIATE_ACCOUNT_ID: process.env.TAPFILIATE_ACCOUNT_ID,
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN,
  },
  transpilePackages: [
    '@tapfiliate/tapfiliate-js'
  ],
  async redirects () {
    return [
      {
        source: '/explore',
        destination: '/explore/auction',
        permanent: false
      },
      {
        source: '/terms-conditions',
        destination: '/terms',
        permanent: true
      },
      {
        source: '/donjazzy',
        destination: 'https://link.artsplit.com/rRU4',
        permanent: false,
        basePath: false
      },
      {
        source: '/sabinus',
        destination: 'https://link.artsplit.com/KZB3',
        permanent: false,
        basePath: false
      },
      {
        source: '/kiekie',
        destination: 'https://link.artsplit.com/35Jj',
        permanent: false,
        basePath: false
      },
      {
        source: '/IdiaAisien',
        destination: 'https://link.artsplit.com/Nt4j',
        permanent: false,
        basePath: false
      }
    ]
  }
}

module.exports = nextConfig
