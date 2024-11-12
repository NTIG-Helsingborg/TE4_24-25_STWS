import React from "react";
import Test from "../../Components/TestShit/client_test";
import Drawer from "@/app/Components/LayoutSHit/Drawer";
import Footer from "@/app/Components/LayoutSHit/Footer";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <>
      <Drawer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Test initialIndex={0} length={12} type={(await params).slug} />
        </div>
      </Drawer>
      <Footer />
    </>
  );
};
export function generateStaticParams() {
  return [
    {slug:"people"},
    {slug:"planets"},
    {slug:"films"},
    {slug:"species"},
    {slug:"vehicles"},
    {slug:"starships"}
  ]
}
export default page;
