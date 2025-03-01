import React from "react";

import "./CardBadge.css";

interface ICardBadgeProps {
  text: string;
}

const CardBadge: React.FC<ICardBadgeProps> = ({ text }) => {
  return text ? <span className="card-badge">{text}</span> : null;
};

export default CardBadge;
