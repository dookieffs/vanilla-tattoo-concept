// @ts-check
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
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

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

module.exports = withNextIntl(config);
