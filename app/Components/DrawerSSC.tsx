import React from "react";
import Button from "./Button";

interface Props {
  action: () => void;
}
const DrawerSSC = ({ action }: Props) => {
  return (
    <>
      <div className="p-4">
        <h2 className="">Drawer Title</h2>
        <p>This is a dynamic drawer component.</p>
        <Button action={action} text="close" />
      </div>
    </>
  );
};

export default DrawerSSC;
