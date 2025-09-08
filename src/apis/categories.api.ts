export interface category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

// export interface Subcategory {
//   _id: string;
//   name: string;
//   slug: string;
//   category: string;
//   createdAt: string;
//   updatedAt: string;
// }

export async function getCategories() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

export async function getSubCategories(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return data;
}
