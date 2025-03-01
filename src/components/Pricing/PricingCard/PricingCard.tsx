import React, { useEffect, useState } from "react";

import Timer from "@/components/common/Timer";
import CardBadge from "@/components/common/CardBadge";
import BestValueBadge from "@/components/common/BestValueBadge";

import { calculateSavings, formatCurrency } from "../helpers";

import { IPricingCardProps } from ".";

import "./PricingCard.css";

const PricingCard: React.FC<IPricingCardProps> = ({
  product,
  isSelected,
  onSelect,
  isMobile,
}) => {
  const { id, name, price, currency, regularity, trial_amount, trial_period } =
    product;

  const [showDiscount, setShowDiscount] = useState(true);

  const priceAmount = formatCurrency(price, currency);
  const trialAmount = formatCurrency(trial_amount, currency);
  const savedPercent = calculateSavings(price, trial_amount);
  const isMostPopular = regularity === "month" && trial_period === 0;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isExpired = localStorage.getItem(`expired`) === "true";
      setShowDiscount(!isExpired);
    }
  }, [id]);

  return (
    <div className={`card ${isSelected ? "selected" : ""}`}>
      {regularity === "year" && <BestValueBadge />}

      <CardBadge
        text={
          isMostPopular
            ? "Most Popular"
            : showDiscount
            ? `Save ${savedPercent}%`
            : ""
        }
      />

      {!isMobile && <Timer />}
      <div className="card-info">
        <div className="product-select">
          <input
            type="radio"
            id={`radio-${id}`}
            name="pricing-plan"
            checked={isSelected}
            className="radio-input"
            onChange={() => onSelect(id, name)}
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

        <div className="price-block">
          {showDiscount && price && (
            <del className="old-price">{priceAmount}</del>
          )}
          <p className="new-price">
            {!showDiscount ? priceAmount : trialAmount}
          </p>
          <p className="price-period">
            {trial_period ? "Then 29.99 per month" : "Per month"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
