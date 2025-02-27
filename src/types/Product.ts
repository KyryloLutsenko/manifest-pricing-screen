// src/types/Product.ts
export interface IProductProps {
  id: string;
  name: string;
  regularity: "month" | "year";
  price: number;
  currency: "USD";
  trial_period: number;
  trial_amount: number;
  discount?: number;
  discountPercentage?: number;
  isPopular?: boolean;
  bestValue?: boolean;
}
