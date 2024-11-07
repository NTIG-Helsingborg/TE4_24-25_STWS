import React from "react";
import FavoriteButton from "../FunctioningShit/FavoriteButton";

interface CardProps {
  itemID: string;
  src: string;
  name: string;
  catagory: string;

  diameter?: string;
  climate?: string;
  gravity?: string;
  terrain?: string;
  population?: string;

  height?: string;
  mass?: string;
  hair_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  species?: string;

  model?: string;
  length?: string;
  crew?: string;
  pilots?: string;

  classification?: string;
  designation?: string;
  average_height?: string;
  skin_colors?: string;
  hair_colors?: string;
  average_lifespan?: string;
  language?: string;

  episode_id?: string;
  release_date?: string;
  title?: string;

  vehicle_class?: string;
}

const Card = ({
  itemID,
  src,
  name,
  catagory,

  diameter,
  climate,
  gravity,
  terrain,
  population,

  height,
  mass,
  hair_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  species,

  model,
  length,
  crew,
  pilots,

  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  average_lifespan,
  language,

  episode_id,
  release_date,
  title,

  vehicle_class,
}: CardProps) => {
  //const isFavorited = favItems.includes(itemID);

  switch (catagory) {
    case "planets":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-full" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Diameter: {diameter}</li>
                <li>Climate: {climate}</li>
                <li>Gravity: {gravity}</li>
                <li>Terrain: {terrain}</li>
                <li>Population: {population}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
    case "people":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-md-full" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Hair color: {hair_color}</li>
                <li>Eye color: {eye_color}</li>
                <li>Birth year: {birth_year}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
    case "species":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-md" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Designation: {designation}</li>
                <li>Average height: {average_height}</li>
                <li>Skin colors: {skin_colors}</li>
                <li>Average lifespan: {average_lifespan}</li>
                <li>Language: {language}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
    case "starships":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-md" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Model: {model}</li>
                <li>Length: {length}</li>
                <li>Crew: {crew}</li>
                <li>Pilots: {pilots}</li>
                <li>Classification: {classification}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
    case "vehicles":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-md" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Vehicle_class: {vehicle_class}</li>
                <li>Crew: {crew}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
    case "films":
      return (
        <div className="card lg:card-side shadow-xl bg-zinc-600 mt-4">
          <figure>
            <img className="ms-4 rounded-md" src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4  items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>Episode: {episode_id}</li>
                <li>Release date: {release_date}</li>
              </ul>
              <ul className="w-full lg:w-1/3"></ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
  }
};
export default Card;
