import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ToolSelector.css";

// Дані для компоненту: список інструментів з назвами та іконками
const tools = [
  { name: "Paraphraser", icon: "📝" },
  { name: "Grammar Check", icon: "🔍" },
  { name: "Plagiarism Check", icon: "✅" },
  { name: "AI Humanizer", icon: "🤖" },
  { name: "AI Detector", icon: "🔦" },
  { name: "Summarizer", icon: "📚" },
  { name: "Chrome Extension", icon: "🔗" },
];

interface IToolSelectorProps {
  isMobile: boolean;
}

const ToolSelector: React.FC<IToolSelectorProps> = ({ isMobile }) => {
  return (
    <div className="tool-selector-container">
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="tool-item">
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="tool-list">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolSelector;
