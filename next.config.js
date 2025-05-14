/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ibb.co',
      'dmcicorporation.com',
      'abicmanpowerservicecorp.com',
      'dmci-agent-bakit.s3.amazonaws.com', // Add this line
    ], 
  },
};

module.exports = nextConfig;
