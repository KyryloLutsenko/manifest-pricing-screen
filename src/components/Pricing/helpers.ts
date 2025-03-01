import { IProductProps } from "@/types/Product";

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount / 100);
};

export const calculateSavings = (price: number, trialAmount: number) => {
  if (price <= 0 || trialAmount <= 0 || trialAmount > price) {
    return 0;
  }

  const savings = ((price - trialAmount) / price) * 100;
  return Math.round(savings / 10) * 10;
};

export const getProductData = (id: string, data: IProductProps[]) => {
  return data.find((product) => product.id === id);
};
