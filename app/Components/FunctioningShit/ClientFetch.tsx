"use client";
import { useEffect, useState } from "react";
import "@/api_links"; // Import your API links
import Card from "../CardComponents/Card";

interface Post {
  id: number;
  catagory: string;
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
  src,
}: {
  params: { id: number; catagory: Catagory };
  src: string;
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
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>{error}</div>; // Render error message
  }

  return (
    <>
      {post && (
        <Card
          name={post.name}
          src={src}
          itemID={`${catagory}:${id}`} // Set `itemID` using template literals
          climate={post.climate}
        />
      )}
    </>
  );
}
