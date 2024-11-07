import React from "react";
import Test from "../../Components/TestShit/client_test";
import Drawer from "@/app/Components/LayoutSHit/Drawer";
import Footer from "@/app/Components/LayoutSHit/Footer";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <>
      <Drawer>
        <Test initialIndex={0} length={10} type={(await params).slug} />
      </Drawer>
      <Footer />
    </>
  );
};

export default page;
