import { IProductProps } from "@/types/Product";

export const products: IProductProps[] = [
  {
    id: "1",
    name: "Unlimited 1-month Plan",
    regularity: "month",
    price: 6999,
    currency: "USD",
    trial_period: 0,
    trial_amount: 3999,
  },
  {
    id: "2",
    name: "7-day Access",
    regularity: "month",
    price: 1000,
    currency: "USD",
    trial_period: 7,
    trial_amount: 100,
  },
  {
    id: "3",
    name: "Unlimited Annual Plan",
    regularity: "year",
    price: 4900,
    currency: "USD",
    trial_period: 0,
    trial_amount: 2499,
  },
];
