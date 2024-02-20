export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
  slug: string;
}

interface BurgerHubResponse {
  products?: Product[];
}

export async function getProducts(): Promise<BurgerHubResponse> {
  const res = await fetch('https://burgerhub00.github.io/data/products.json');

  // TODO error boundary
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<BurgerHubResponse>;
}
