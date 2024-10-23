// Ensure no 'use client' directive here - this is a Server Component

import { notFound } from "next/navigation";
import "@/api_links";

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

// Fetch data from your API (this runs server-side)
async function getPost(catagory: Catagory, id: number): Promise<Post | null> {
  try {
    const res = await fetch(
      api_links.starwars(catagory, { type: "id", data: id })
    );
    const post: Post = await res.json();

    if (!post) notFound(); // If post not found, trigger 404
    return post;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams(catagory: Catagory) {
  try {
    const res = await fetch(api_links.starwars(catagory, { type: "all" }));
    const posts = await res.json();

    return posts.map((post: Post) => ({
      id: post.id,
    }));
  } catch (error) {
    return []; // Handle the case where fetching fails
  }
}

export async function generateMetadata({
  params,
}: {
  params: { id: number; catagory: Catagory };
}) {
  const post = await getPost(params.catagory, params.id);

  return {
    title: post ? post.name : "Post Not Found",
  };
}

export default async function ApiCall({
  params,
  children,
  src,
}: {
  params: { id: number; catagory: Catagory };
  children: React.ReactNode;
  src: string;
}) {
  const post = await getPost(params.catagory, params.id).catch(() => {
    return {} as Post;
  });

  if (!post) {
    // If fetching failed or post is null, return an empty component
    return <div>Post not found</div>;
  }

  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure>
        <img src={src} alt="Item" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.name}</h2>
        <p>{post.climate}</p>
        <div className="card-actions justify-end">{children}</div>
      </div>
    </div>
  );
}
