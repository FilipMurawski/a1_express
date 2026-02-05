import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/oww-zleceniobiorca',
        destination: '/oww-zleceniobiorca.pdf',
        permanent: true, // 301 redirect
      },
      {
        source: '/oww-zleceniodawca',
        destination: '/oww-zleceniodawca.pdf',
        permanent: true, // 301 redirect
      },
      {
        source: '/oww-zleceniobiorca-en',
        destination: '/oww-zleceniobiorca-en.pdf',
        permanent: true, // 301 redirect
      },
      {
        source: '/oww-zleceniodawca-en',
        destination: '/oww-zleceniodawca-en.pdf',
        permanent: true, // 301 redirect
      },
    ]
  },
};

export default nextConfig;
