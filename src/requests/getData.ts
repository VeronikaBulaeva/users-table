import { IResults } from "../types";

export const getData = async (): Promise<IResults> => {
  const result = await fetch("https://randomuser.me/api/?results=15");
  return await result.json();
};
