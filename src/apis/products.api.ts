export interface Root {
  results: number;
  metadata: Metadata;
  data: ProductInterface[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface ProductInterface {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  priceAfterDiscount?: number;
  availableColors?: any[];
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

const baseURL = "https://ecommerce.routemisr.com";

export async function getProducts() {
  const res = await fetch(`${baseURL}/api/v1/products`, { cache: "no-store" });
  const { data } = await res.json();
  return data;
}

export async function getSingleProduct(prodId: string) {
  const res = await fetch(`${baseURL}/api/v1/products/${prodId}`);
  const { data } = await res.json();
  return data;
}
