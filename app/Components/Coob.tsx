import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  header: string;
  img?: StaticImageData;
  text?: string;
  class?: string;
  cart: string;
}
const Coob = ({ header, img, text, cart }: Props) => {
  return (
    <div className="flex md:basis-1/3 sm:basis-1/2 justify-center">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-41 pt-10">
          <Image
            src={img ?? ""}
            width={580}
            height={600}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{header}!</h2>
          <p>{text}</p>
          <div className="card-actions">
            <Link href={cart} className="btn btn-primary">
              Closer look
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coob;
