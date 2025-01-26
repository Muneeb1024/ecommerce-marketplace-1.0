import { groq } from "next-sanity";


export const allProduct = groq`*[_type == "product"]`;
export const eightProduct = groq`*[_type == "product"][0..7]`;



