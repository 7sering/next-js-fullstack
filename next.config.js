/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ "images.pexels.com"],
  },
  experimental:{
    forceSwcTransforms: true,
  },
  
};


module.exports = nextConfig;
