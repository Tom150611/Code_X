// Plain <img> tags don't get Next's basePath automatically, so asset URLs are prefixed here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const photo = (name) => `${basePath}/assets/photos/${name}.png`;

export const techLogo = (name) => `${basePath}/assets/tech/${name}.svg`;
