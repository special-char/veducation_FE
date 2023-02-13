export default function myImageLoader({ src, width, quality }) {
  const queryString = src.split("?");
  if (queryString[1]) {
    const params = new Proxy(new URLSearchParams(queryString[1]), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    if (params.tr) {
      return `${queryString[0]}?tr=${params.tr},w-${width},q-${quality || 75}`;
    }
  }

  return `${src}?tr=w-${width},q-${quality || 75}`;
}
