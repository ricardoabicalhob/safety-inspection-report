// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export'
// };

// export default nextConfig;

// @ts-check
/**@type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/inspecoesdeseguranca' : ''
}

module.exports = nextConfig