import * as React from "react";

export interface IResults {
  results: IPerson[];
}
export interface IPerson {
  name: IName;
  location: ILocation;
  registered: IRegistered;
  picture: IPicture;
  email: string;
  phone: string;
}

export interface IName {
  first: string;
  last: string;
}

export interface ILocation {
  city: string;
  state: string;
}
export interface IRegistered {
  date: string;
}

export interface IPicture {
  thumbnail: string;
  large: string;
}

export interface IFilter {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onClick(): void;
}
