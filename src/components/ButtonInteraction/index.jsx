import { useState } from "react";
import styles from "./buttoninteraction.module.css";
import { AiOutlineLike } from "react-icons/ai";

export const ButtonInteraction = ({ tagIcon, onClick, id, chave }) => {
  const [isActive, setIsActive] = useState(() => {
    const stored = JSON.parse(localStorage.getItem(chave)) || [];
    return stored.some((item) => item.id === id);
  });

  const handleClick = () => {
    const newState = onClick?.();
    if (typeof newState === "boolean") {
      setIsActive(newState);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={styles.button}
      style={{ backgroundColor: isActive ? "#01CDFE" : "#C1D4D9" }}
    >
      {tagIcon}
    </button>
  );
};

