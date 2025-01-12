"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  console.log("Counter component");
  const [count, setCount] = useState(0);
  // const {  isLoaded, getToken, sessionId, userId } = useAuth();

  // if(!isLoaded || !userId) {
  //   return null;
  // }

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
