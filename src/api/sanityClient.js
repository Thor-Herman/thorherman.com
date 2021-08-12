import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: '2gr9tt2a',
  dataset: 'production',
  apiVersion: '1', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;