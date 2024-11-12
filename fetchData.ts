// fetchData.ts

import "@/api_links";

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

export async function getPost(
  catagory: Catagory,
  id: number
): Promise<Post | null> {
  try {
    const res = await fetch(
      api_links.starwars(catagory, { type: "id", data: id })
    );
    if (!res.ok) return null;
    const post: Post = await res.json();
    return post;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}
