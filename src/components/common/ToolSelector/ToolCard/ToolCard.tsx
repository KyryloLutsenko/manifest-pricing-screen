import React from "react";
import Image from "next/image";

import "./ToolCard.css";

interface IToolCardProps {
  icon: string;
  name: string;
}

const ToolCard: React.FC<IToolCardProps> = ({ icon, name }) => {
  return (
    <div className="tool-item">
      <Image src={icon} alt={name} width={18} height={20} />
      <span className="tool-name">{name}</span>
    </div>
  );
};

export default ToolCard;
