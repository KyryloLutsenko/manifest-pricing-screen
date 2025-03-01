export { default } from "./PricingCard";
import { IProductProps } from "@/types/Product";

export interface IPricingCardProps {
  product: IProductProps;
  isSelected: boolean;
  onSelect: (id: string, name: string) => void;
  isMobile: boolean;
}
