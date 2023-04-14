import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import vercel from "@astrojs/vercel/static";
import image from "@astrojs/image";
import { loadEnv } from "vite";

const { SANITY_ID, SANITY_TOKEN } = loadEnv(import.meta.env, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
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
});
