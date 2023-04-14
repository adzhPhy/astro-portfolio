import { useSanityClient, groq } from "astro-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function getSanityData(dataType: string) {
  if (dataType === "abouts") {
    const query = groq`*[_type == "abouts"]{title,description,imgUrl}`;
    const data = await useSanityClient().fetch(query);
    return data;
  } else if (dataType === "works") {
    const query = groq`*[_type == "works"]{name,title,description,projectLink,codeLink,tags,imgUrl,images}`;
    const data = await useSanityClient().fetch(query);
    return data;
  } else {
    const query = groq`*[_type == "skills"]{name,"icon":icon.asset->url}`;
    const data = await useSanityClient().fetch(query);
    return data;
  }
}

export const imageBuilder = imageUrlBuilder(useSanityClient());
export function urlFor(source: string) {
  return imageBuilder.image(source);
}
