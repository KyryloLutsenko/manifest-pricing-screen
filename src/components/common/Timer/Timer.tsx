import React, { useEffect, useState } from "react";

interface Props {
  productId: string;
}

const Timer: React.FC<Props> = ({ productId }) => {
  const LOCAL_STORAGE_KEY = `timer_${productId}`;
  const EXPIRED_KEY = `expired_${productId}`;
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Перевіряємо, чи вже завершився таймер раніше
      const expired = localStorage.getItem(EXPIRED_KEY);
      if (expired === "true") {
        setIsExpired(true);
        return;
      }

      // Отримуємо час з LocalStorage або починаємо з 5 хвилин (300 секунд)
      const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
      const initialTime = savedTime ? parseInt(savedTime) : 10;
      setTimeLeft(initialTime);
    }
  }, [LOCAL_STORAGE_KEY, EXPIRED_KEY]);

  useEffect(() => {
    if (timeLeft !== null) {
      localStorage.setItem(LOCAL_STORAGE_KEY, timeLeft.toString());
    }

    // Зупиняємо відлік, якщо таймер досяг 0
    if (timeLeft === null || timeLeft <= 0) {
      // Залишаємось на 00:00, але не ховаємо таймер
      if (timeLeft === 0) {
        // Встановлюємо прапорець, що таймер завершився
        localStorage.setItem(EXPIRED_KEY, "true");
      }
      return;
    }

    // Зменшуємо залишок часу на 1 кожну секунду
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, LOCAL_STORAGE_KEY, EXPIRED_KEY]);

  // Якщо таймер завершився і це новий візит, ми його не показуємо
  if (isExpired) {
    return null;
  }

  // Якщо таймер ще не ініціалізовано, показуємо "Loading..."
  if (timeLeft === null) {
    return <div className="timer">Loading...</div>;
  }

  // Форматуємо хвилини та секунди
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  // Якщо час завершився, показуємо 00:00
  if (timeLeft <= 0) {
    return <div className="timer">Sale Ends In 00:00</div>;
  }

  return (
    <div className="timer">
      Sale Ends In {minutes}:{seconds}
    </div>
  );
};

export default Timer;
