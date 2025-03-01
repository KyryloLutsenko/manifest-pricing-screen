import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { tools } from "@/data/tools";

import ToolCard from "./ToolCard";

import { IToolSelectorProps } from ".";

import "./ToolSelector.css";

const ToolSelector: React.FC<IToolSelectorProps> = ({ isMobile }) => {
  return (
    <div className="tool-selector-container">
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            340: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <ToolCard key={tool.name} icon={tool.icon} name={tool.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="tool-list">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} icon={tool.icon} name={tool.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolSelector;
