import React from "react";
import FavoriteButton from "../FunctioningShit/FavoriteButton";
import ClientFetch from "../FunctioningShit/ClientFetch";

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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"diameter": {diameter}</li>
                <li>"climate": {climate}</li>
                <li>"gravity": {gravity}</li>
                <li>"terrain": {terrain}</li>
                <li>"population": {population}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
                <li>https://swapi.dev/api/people/1/</li>
                <li>https://swapi.dev/api/people/2/</li>
                <li>https://swapi.dev/api/people/4/</li>
                <li>https://swapi.dev/api/people/6/</li>
                <li>https://swapi.dev/api/people/7/</li>
                <li>https://swapi.dev/api/people/8/</li>
                <li>https://swapi.dev/api/people/9/</li>
                <li>https://swapi.dev/api/people/11/</li>
                <li>https://swapi.dev/api/people/43/</li>
                <li>https://swapi.dev/api/people/62/</li>
              </ul>
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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"height": {height}</li>
                <li>"mass": {mass}</li>
                <li>"hair color": {hair_color}</li>
                <li>"eye color": {eye_color}</li>
                <li>"birth year": {birth_year}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
              </ul>
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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"designation": {designation}</li>
                <li>"average height": {average_height}</li>
                <li>"skin colors": {skin_colors}</li>
                <li>"average lifespan": {average_lifespan}</li>
                <li>"language": {language}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
              </ul>
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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"model": {model}</li>
                <li>"length": {length}</li>
                <li>"crew": {crew}</li>
                <li>"pilots": {pilots}</li>
                <li>"classification": {classification}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
              </ul>
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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"vehicle_class": {vehicle_class}</li>
                <li>"crew": {crew}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
              </ul>
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
        <div className="card lg:card-side shadow-xl bg-white">
          <figure>
            <img src={src} alt="Item" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
              <ul className="w-full lg:w-1/3">
                <li>"diameter": {diameter}</li>
                <li>"climate": {climate}</li>
                <li>"gravity": {gravity}</li>
                <li>"terrain": {terrain}</li>
                <li>"population": {population}</li>
              </ul>
              <ul className="w-full lg:w-1/3">
                <li>
                  <h2>Residents</h2>
                </li>
                <li>https://swapi.dev/api/people/1/</li>
                <li>https://swapi.dev/api/people/2/</li>
                <li>https://swapi.dev/api/people/4/</li>
                <li>https://swapi.dev/api/people/6/</li>
                <li>https://swapi.dev/api/people/7/</li>
                <li>https://swapi.dev/api/people/8/</li>
                <li>https://swapi.dev/api/people/9/</li>
                <li>https://swapi.dev/api/people/11/</li>
                <li>https://swapi.dev/api/people/43/</li>
                <li>https://swapi.dev/api/people/62/</li>
              </ul>
            </div>

            <div className="card-actions justify-end">
              <FavoriteButton id={itemID} />
            </div>
          </div>
        </div>
      );
      break;
  }

  return (
    <>
      <div className="card lg:card-side shadow-xl bg-white">
        <figure>
          <img src={src} alt="Item" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center lg:items-start">
            {/* Center on small screens, left-align on large */}

            <ul className="w-full lg:w-1/3">
              <li>"diameter": "10465"</li>
              <li>"climate": "arid"</li>
              <li>"gravity": "1 standard"</li>
              <li>"terrain": "desert"</li>
              <li>"population": "200000"</li>
            </ul>
            <ul className="w-full lg:w-1/3">
              <li>
                <h2>Residents</h2>
              </li>
              <li>https://swapi.dev/api/people/1/</li>
              <li>https://swapi.dev/api/people/2/</li>
              <li>https://swapi.dev/api/people/4/</li>
              <li>https://swapi.dev/api/people/6/</li>
              <li>https://swapi.dev/api/people/7/</li>
              <li>https://swapi.dev/api/people/8/</li>
              <li>https://swapi.dev/api/people/9/</li>
              <li>https://swapi.dev/api/people/11/</li>
              <li>https://swapi.dev/api/people/43/</li>
              <li>https://swapi.dev/api/people/62/</li>
            </ul>
          </div>

          <div className="card-actions justify-end">
            <FavoriteButton id={itemID} />
          </div>
        </div>
      </div>

      <div className="card bg-white shadow-xl mt-8 w-96">
        <figure>
          <img src={src} alt={itemID} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end ">
            <FavoriteButton id={itemID} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
