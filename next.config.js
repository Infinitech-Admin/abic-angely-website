/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ibb.co',
      'dmcicorporation.com',
      'abic-agent-bakit.s3.ap-southeast-1.amazonaws.com',
      'dmci-agent-bakit.s3.amazonaws.com', // Add this line
    ], 
  },
};

module.exports = nextConfig;
