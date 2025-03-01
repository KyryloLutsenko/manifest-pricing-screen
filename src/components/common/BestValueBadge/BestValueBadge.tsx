import React from "react";

import "./BestValueBadge.css";

const BestValueBadge: React.FC = () => {
  return (
    <div className="best-value-badge">
      <span className="rocket-icon">🚀</span>
      <span>Best value</span>
    </div>
  );
};

export default BestValueBadge;
