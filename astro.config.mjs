import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import image from "@astrojs/image";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";

const { SANITY_ID, SANITY_TOKEN } = loadEnv(import.meta.env, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind(),
    image(),
    sanity({
      projectId: SANITY_ID,
      dataset: "production",
      apiVersion: "2022-02-01",
      useCdn: true,
      token: SANITY_TOKEN,
    }),
  ],
  adapter: vercel({ includeFiles: ["/public/images/*"] }),
});
