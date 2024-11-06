"use client";
import { useEffect, useState } from "react";
import "@/api_links"; // Import your API links
import Card from "../TestShit/CardPrototype";

interface Post {
  id: number;
  catagory: string;
  name: string;

  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;

  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  species: string;

  model: string;
  length: string;
  crew: string;
  pilots: string;

  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  average_lifespan: string;
  language: string;

  episode_id: string;
  release_date: string;
  title: string;

  vehicle_class: string;
}

type Catagory =
  | "people"
  | "planets"
  | "films"
  | "species"
  | "vehicles"
  | "starships";

async function fetchPost(catagory: Catagory, id: number): Promise<Post | null> {
  try {
    const res = await fetch(
      api_links.starwars(catagory, { type: "id", data: id })
    );
    if (!res.ok) throw new Error("Post not found"); // Check if response is okay
    const post: Post = await res.json();
    return post;
  } catch (error) {
    console.error(error);
    return null; // Return null if there's an error
  }
}

export default function ClientFetch({
  params,
  source,
}: {
  params: { id: number; catagory: Catagory };
  source: string;
}) {
  const { catagory, id } = params; // Destructure `catagory` and `id`
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const fetchedPost = await fetchPost(catagory, id);
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        setError("Post not found");
      }
      setLoading(false); // Update loading state
    };

    getPost(); // Call the fetch function
  }, [catagory, id]); // Dependency array to re-fetch if `catagory` or `id` change

  if (loading) {
    return <></>; // Render loading state
  }

  if (error) {
    return <div>{error}</div>; // Render error message
  }

  switch (catagory) {
    case "planets":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              diameter={post.diameter}
              climate={post.climate}
              gravity={post.gravity}
              terrain={post.terrain}
              population={post.population}
            />
          )}
        </div>
      );
      break;
    case "people":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              height={post.height}
              mass={post.mass}
              hair_color={post.hair_color}
              eye_color={post.eye_color}
              birth_year={post.birth_year}
              gender={post.gender}
              homeworld={post.homeworld}
              species={post.species}
            />
          )}
        </div>
      );
      break;
    case "species":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              designation={post.designation}
              average_height={post.average_height}
              skin_colors={post.skin_colors}
              average_lifespan={post.average_lifespan}
              language={post.language}
            />
          )}
        </div>
      );
      break;
    case "starships":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              model={post.model}
              length={post.length}
              crew={post.crew}
              pilots={post.pilots}
              classification={post.classification}
            />
          )}
        </div>
      );
      break;
    case "vehicles":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              vehicle_class={post.vehicle_class}
              crew={post.crew}
            />
          )}
        </div>
      );
      break;
    case "films":
      return (
        <div>
          {post && (
            <Card
              name={post.name}
              src={source}
              catagory={catagory}
              itemID={`${catagory}:${id}`} // Set `itemID` using template literals
              episode_id={post.episode_id}
              release_date={post.release_date}
              title={post.title}
            />
          )}
        </div>
      );
      break;
  }

  return (
    <div>
      {post && (
        <Card
          name={post.name}
          src={source}
          catagory={catagory}
          itemID={`${catagory}:${id}`} // Set `itemID` using template literals
        />
      )}
    </div>
  );
}
