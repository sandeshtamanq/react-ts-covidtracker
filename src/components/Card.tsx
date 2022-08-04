import React from "react";

interface cardProps {
  type: string;
  number?: number;
  card_css: string;
}
const Card: React.FC<cardProps> = ({ type, number, card_css }) => {
  return (
    <div
      className={`${card_css} flex-1 text-white text-center py-4 px-2 rounded-md text-2xl`}
    >
      <div>{type}</div>
      <div>{number}</div>
    </div>
  );
};

export default Card;
