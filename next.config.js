/** @type {import('next').NextConfig} */
const repository = "test";

const nextConfig = {
    //svg 파일 웹펙 설치
    webpack: (config) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
        return config
      },
      reactStrictMode: false,
      images: {
        domains: ['images.ctfassets.net','downloads.ctfassets.net'],
      },
      assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
      trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
}

module.exports = nextConfig
