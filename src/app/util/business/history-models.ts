import { HistoryOf, OptionHistory, SimpleHistory } from "./history-util";
import { Address, Company } from "./dtos";
import { expectType, IsTrue, KeysAreIdentical } from "../typescript/assertions";

export type AddressHistory = HistoryOf<Address> & {
  country: SimpleHistory<string>,
  city: SimpleHistory<string>,
  street: SimpleHistory<string>,
}

type Anonymous = IsTrue<KeysAreIdentical<Address, Omit<AddressHistory, '_tag'>>>;
expectType<KeysAreIdentical<Address, Omit<AddressHistory, '_tag'>>>(true);

export type CompanyHistory = HistoryOf<Company> & {
  name: SimpleHistory<string>,
  address: OptionHistory<Address, AddressHistory>,
  turnover: SimpleHistory<number>,
}
