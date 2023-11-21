/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  images:{
    domains: [
      'images.unsplash.com',
      'media.licdn.com',
      'www.dnnr.dev'
    ]
  },
}

module.exports = nextConfig
