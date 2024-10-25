// ClientCard.tsx
"use client";
import React, { useState, useEffect } from "react";
import { getPost } from "@/fetchData";

type Catagory =
  | "people"
  | "planets"
  | "films"
  | "species"
  | "vehicles"
  | "starships";

interface Post {
  id: number;
  catagory: Catagory;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

interface CardProps {
  src: string;
  catagory: Catagory;
  id: number;
}

const ClientCard = ({ src, catagory, id }: CardProps) => {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPost(catagory, id);
      setData(post);
    };
    fetchData();
  }, [catagory, id]); // Rerun fetch if catagory or id changes

  if (!data) return <div>Loading...</div>;

  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure>
        <img src={src} alt="Item" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.climate}</p>
      </div>
    </div>
  );
};

export default ClientCard;
