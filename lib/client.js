import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configure the client

export const client = sanityClient({
    projectId: '52gkwtly',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-04-26',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// Create an image URL builder

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);