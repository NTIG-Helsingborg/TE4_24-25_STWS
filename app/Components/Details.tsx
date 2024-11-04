"use client";
import { useEffect, useState } from "react";
import "@/api_links"; // Import your API links
import Card from "./CardComponents/Card";

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

// Array of valid categories for runtime checking
const validCategories: Catagory[] = [
  "people",
  "planets",
  "films",
  "species",
  "vehicles",
  "starships",
];

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

export default function ApiCall({ src }: { src: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [catagory, setCatagory] = useState<Catagory | null>(null);
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    // Parse the query from the URL
    const query = new URLSearchParams(window.location.search).get("query");
    if (query) {
      const parts = query.split(":");
      if (
        parts.length === 2 &&
        validCategories.includes(parts[0] as Catagory)
      ) {
        setCatagory(parts[0] as Catagory);
        setId(Number(parts[1]));
      } else {
        setError("Invalid query format");
      }
    } else {
      setError("No query provided");
    }
  }, []);

  useEffect(() => {
    // Fetch post data if catagory and id are valid
    const getPost = async () => {
      if (catagory && id !== null) {
        const fetchedPost = await fetchPost(catagory, id);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError("Post not found");
        }
      }
      setLoading(false);
    };

    if (catagory && id !== null) {
      getPost(); // Only call getPost if both catagory and id are set
    }
  }, [catagory, id]);

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>{error}</div>; // Render error message
  }

  return (
    <div>
      {post && (
        <Card
          name={post.name}
          src={src}
          itemID={`${catagory}:${id}`} // Set `itemID` using template literals
          climate={post.climate}
        />
      )}
    </div>
  );
}
