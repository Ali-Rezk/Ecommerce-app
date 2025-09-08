export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export async function getBrands() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

export async function getBrandById(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return data;
}
