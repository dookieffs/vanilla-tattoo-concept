// @ts-check

const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(config);
