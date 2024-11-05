"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { useFavoriteItems } from "@/app/Hooks/useFavoriteItems";

interface CardProps {
  itemID: string;
}

const FavoriteButton = ({ itemID }: CardProps) => {
  function handleClick() {
    updateFavItems(itemID);
    console.log(favItems);
  }
  const { favItems, updateFavItems } = useFavoriteItems();
  const isFavorited = favItems.includes(itemID);

  return (
    <div>
      <button onClick={() => handleClick()} className="btn btn-primary">
        {isFavorited ? <FaStar /> : <CiStar />}
      </button>
    </div>
  );
};

export default FavoriteButton;
