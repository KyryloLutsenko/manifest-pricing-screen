export interface IProductProps {
  id: string;
  name: string;
  regularity: "month" | "year";
  price: number;
  currency: string;
  trial_period: number;
  trial_amount: number;
}
