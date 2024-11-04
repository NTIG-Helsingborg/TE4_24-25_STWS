"use server";
import React from "react";

let count: string = "";

export async function updateCard(value: string) {
  console.log("updateCard received value:", value); // Log the received value
  if (!value) {
    console.warn("Received an empty value in updateCard");
  }

  count = value; // Update server-side storage

  console.log("Stored count:", count); // Log the updated count value
  return `Server stored value: ${count}`;
}

export async function getMessage() {
  console.log("Retrieving message:", count);
  return count;
}
