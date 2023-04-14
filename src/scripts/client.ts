import { useSanityClient, groq, createImageBuilder } from "astro-sanity";

export async function getSanityData(dataType: string) {
  if (dataType === "abouts") {
    const query = groq`*[_type == "abouts"]`;
    const data = await useSanityClient().fetch(query);
    return data;
  } else if (dataType === "works") {
    const query = groq`*[_type == "works"]`;
    const data = await useSanityClient().fetch(query);
    return data;
  } else {
    const query = groq`*[_type == "skills"]`;
    const data = await useSanityClient().fetch(query);
    return data;
  }
}

export const imageBuilder = createImageBuilder(useSanityClient());
export function urlFor(source: string) {
  return imageBuilder.image(source);
}
