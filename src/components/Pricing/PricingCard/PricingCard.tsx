import React, { useEffect, useState } from "react";

import Timer from "@/components/common/Timer";
import DiscountBadge from "@/components/common/DiscountBadge";

import { IProductProps } from "@/types/Product";

import "./PricingCard.css";

interface IPricingCardProps {
  product: IProductProps;
  isSelected: boolean;
  onSelect: (id: string, name: string) => void;
}

const PricingCard: React.FC<IPricingCardProps> = ({
  product,
  isSelected,
  onSelect,
}) => {
  const {
    id,
    name,
    price,
    currency,
    regularity,
    discount,
    discountPercentage,
    isPopular,
    bestValue,
  } = product;

  const [showDiscount, setShowDiscount] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isExpired = localStorage.getItem(`expired_${id}`) === "true";
      setShowDiscount(!isExpired);
    }
  }, [id]);

  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>
      {isPopular && <span className="most-popular">Most Popular</span>}
      {bestValue && <span className="best-value">Best Value</span>}

      {showDiscount && (
        <DiscountBadge discountPercentage={discountPercentage} />
      )}

      <Timer productId={id} />

      <div className="product-select">
        <input
          type="radio"
          id={`radio-${id}`}
          name="pricing-plan"
          checked={isSelected}
          onChange={() => onSelect(id, name)}
          className="radio-input"
        />
        <label htmlFor={`radio-${id}`} className="radio-label">
          <span className="custom-radio">
            {isSelected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          {name}
        </label>
      </div>

      {showDiscount && discount && (
        <p className="old-price">
          <del>
            {discount.toFixed(2)} {currency}
          </del>
        </p>
      )}
      <p className="new-price">
        ${(price / 100).toFixed(2)}
        <span className="per-period"> / {regularity}</span>
      </p>
    </div>
  );
};

export default PricingCard;
