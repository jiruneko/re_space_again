/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 公開優先なら一旦ONでもOK（後で戻せる）
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
