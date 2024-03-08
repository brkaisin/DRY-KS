import { Option } from "../typescript/types";

export type Address = {
  country: string;
  city: string;
  street: string;
};

export type Company = {
  name: string,
  address: Option<Address>,
  turnover: number,
}

export type Client = {
  name: string,
  code: string,
  address: Option<Address>
}
