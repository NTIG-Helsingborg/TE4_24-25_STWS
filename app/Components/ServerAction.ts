// ServerAction.ts
"use server"; // This should be at the top of the file

import React from "react";

let count: string = "";
export async function updateCard(value: string) {
  // Log to the server console
  count = value;

  // You can also simulate a database update or any other side effect here
  console.log(count);
  // Return some data if needed, for example
  return count;
}

export async function getMessage() {
  // Retrieve the stored message
  console.log(count + 1);
  return count;
}
