import React from "react";

interface Props {
  discountPercentage?: number;
}

const DiscountBadge: React.FC<Props> = ({ discountPercentage }) => {
  if (!discountPercentage) return null;

  return <span className="discount-badge">Save {discountPercentage}%</span>;
};

export default DiscountBadge;
