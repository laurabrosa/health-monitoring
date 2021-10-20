module.exports = {
  env: { 
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  }
}
