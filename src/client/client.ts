import { useSanityClient, groq } from "astro-sanity";

import { createImageBuilder } from "astro-sanity";

export async function getSanityData(dataType: string) {
  let query;
  if (dataType === "abouts") {
    const query = groq`*[_type == "abouts"]{title,description,imgUrl}`;
  } else if (dataType === "works") {
    const query = groq`*[_type == "works"]{name,title,description,projectLink,codeLink,tags,imgUrl,images}`;
  } else {
    const query = groq`*[_type == "skills"]{name,"icon":icon.asset->url}`;
  }
  const data = await useSanityClient().fetch(query);
  return data;
}

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlFor(source: string) {
  return imageBuilder.image(source);
}
