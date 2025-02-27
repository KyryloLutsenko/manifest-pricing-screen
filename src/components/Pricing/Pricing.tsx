import React, { useState, useEffect } from "react";
import { products } from "@/data/products";
import PricingCard from "./PricingCard";
import "./Pricing.css";
import ToolSelector from "@/components/common/ToolSelector";

const SELECTED_PRODUCT_KEY = "selectedProduct";

const Pricing = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Завантаження вибору з LocalStorage при першому рендері
  useEffect(() => {
    const savedProduct = localStorage.getItem(SELECTED_PRODUCT_KEY);
    if (savedProduct) {
      setSelectedProduct(savedProduct);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Викликаємо при першому завантаженні
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Збереження вибору у LocalStorage
  const handleSelect = (id: string, name: string) => {
    setSelectedProduct(id);
    localStorage.setItem(SELECTED_PRODUCT_KEY, id);
    console.log("Selected Product:", { id, name });
  };

  return (
    <section className="pricing-container">
      <h1 className="pricing-title">Choose Your Plan:</h1>

      <ToolSelector isMobile={isMobile} />

      <div className="pricing-cards">
        {products.map((product) => (
          <PricingCard
            key={product.id}
            product={product}
            isSelected={selectedProduct === product.id}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
