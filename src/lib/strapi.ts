const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export async function fetchStrapi(
  endpoint: string,
  query?: Record<string, any>,
  options: RequestInit = {}
) {
  const url = new URL(`${STRAPI_URL}/api/${endpoint}`);
  
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString(), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi fetch failed: ${response.statusText}`);
  }

  return response.json();
}
