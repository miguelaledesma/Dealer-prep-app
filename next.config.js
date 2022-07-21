/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  redirects: async()=>{
    return [
      {
        source: '/contact', 
        destination: 'https://vercel.com/customers', 
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
