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
        destination: '/', 
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
