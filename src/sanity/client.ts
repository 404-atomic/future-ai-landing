import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create Sanity client with explicit fetch method typing
const sanityClient = createClient({
  projectId: "dn30ktjt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  // Add token for authenticated requests - you need to create a token in Sanity dashboard
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Add explicit fetch method typing
export const client = {
  ...sanityClient,
  fetch: async <T>(query: string, params?: Record<string, any>): Promise<T> => {
    return sanityClient.fetch(query, params);
  }
};

// Setup image builder
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => builder.image(source); 