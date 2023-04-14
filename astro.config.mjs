import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";
import image from "@astrojs/image";
import { loadEnv } from "vite";
import vercelStatic from "@astrojs/vercel/static";

const { SANITY_ID, SANITY_TOKEN } = loadEnv(import.meta.env, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(),
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
