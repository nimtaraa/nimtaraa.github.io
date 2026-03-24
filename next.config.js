/** @type {import('next').NextConfig} */
// GitHub Actions sets BASE_PATH for project sites (e.g. /portfolio). User site repo owner.github.io uses ''.
const basePath = process.env.BASE_PATH || ''
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
}

module.exports = nextConfig

