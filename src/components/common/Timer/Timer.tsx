import Image from "next/image";
import React, { useEffect, useState } from "react";

import { timerAmount } from "@/data/constants";

import "./Timer.css";

const Timer: React.FC = () => {
  const LOCAL_STORAGE_KEY = `timer`;
  const EXPIRED_KEY = `expired`;
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const expired = localStorage.getItem(EXPIRED_KEY);
      if (expired === "true") {
        setIsExpired(true);
        return;
      }

      const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
      const initialTime = savedTime ? parseInt(savedTime) : timerAmount;
      setTimeLeft(initialTime);
    }
  }, [LOCAL_STORAGE_KEY, EXPIRED_KEY]);

  useEffect(() => {
    if (timeLeft !== null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, timeLeft.toString());
    }

    if (timeLeft === null || timeLeft <= 0) {
      if (timeLeft === 0) {
        localStorage.setItem(EXPIRED_KEY, "true");
      }
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, LOCAL_STORAGE_KEY, EXPIRED_KEY]);

  if (isExpired) {
    return null;
  }

  const minutes =
    timeLeft &&
    Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
  const seconds = timeLeft && (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="timer-container">
      <Image src="/images/timer-logo.svg" alt="timer" width={22} height={16} />
      <span className="timer-text">
        Sale Ends In {minutes}:{seconds}
      </span>
      <div className="timer-element" />
    </div>
  );
};

export default Timer;
