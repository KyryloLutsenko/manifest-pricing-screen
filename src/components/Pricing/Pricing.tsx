import React, { useState, useEffect } from "react";

import ToolSelector from "@/components/common/ToolSelector";
import PricingCard from "./PricingCard";
import Button from "../common/Button";
import SubscriptionNotice from "../common/SubscriptionNotice";

import { products } from "@/data/products";
import { SELECTED_PRODUCT_KEY } from "@/data/constants";

import "./Pricing.css";
import Timer from "../common/Timer";

const Pricing = () => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedProduct = localStorage.getItem(SELECTED_PRODUCT_KEY);
    if (savedProduct) {
      setSelectedProductId(savedProduct);
    } else {
      setSelectedProductId(products[2].id);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedProductId]);

  const handleSelect = (id: string, name: string) => {
    setSelectedProductId(id);
    localStorage.setItem(SELECTED_PRODUCT_KEY, id);
  };

  const handleGetStarted = () => {
    const productData = products.find(
      (product) => product.id === selectedProductId
    );
    console.log({ id: productData?.id, name: productData?.name });
  };

  return (
    <section className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan:</h1>
      <ToolSelector isMobile={isMobile} />
      <div className="pricing-cards-container">
        {isMobile && <Timer />}
        <div className="pricing-cards">
          {products.map((product) => (
            <PricingCard
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onSelect={handleSelect}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
      <Button variant="primary" onClick={handleGetStarted}>
        Get Started
      </Button>
      <SubscriptionNotice />
    </section>
  );
};

export default Pricing;
