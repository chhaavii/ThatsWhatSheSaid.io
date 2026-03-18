/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- MADE BY CHHAVI :)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // static export for GitHub Pages
  output: 'export',
  // project site: https://chhaavii.github.io/ThatsWhatSheSaid.io
  basePath: '/ThatsWhatSheSaid.io',
  assetPrefix: '/ThatsWhatSheSaid.io/',
}

export default nextConfig
