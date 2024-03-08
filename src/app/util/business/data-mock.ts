import { Company } from "./dtos";
import { ChangeMetadata, SimpleHistory } from "./history-util";
import { CompanyHistory } from "./history-models";

export const companyB12: Company = {
  name: 'B12 Consulting',
  address: {
    country: 'Montenegro',
    city: 'Podgorica',
    street: 'Bulevar Ivana Crnojevića',
  },
  turnover: 2e6,
}

const dummyChangeMetadata: ChangeMetadata = {
  byUser: 'Brieuc',
  at: new Date(),
}

function simpleHistoryWith2Values<T>(value1: T, value2: T): SimpleHistory<T> {
  return {
    changes: [
      {value: value1, metadata: dummyChangeMetadata},
      {oldValue: value1, newValue: value2, metadata: dummyChangeMetadata}
    ],
  }
}

export const companyB12History: CompanyHistory = {
  name: simpleHistoryWith2Values('B12', 'B12 Consulting'),
  address: {
    maybeHistory: {
      country: simpleHistoryWith2Values('Belgium', 'Montenegro'),
      city: simpleHistoryWith2Values('Louvain-la-Neuve', 'Podgorica'),
      street: simpleHistoryWith2Values('Boucle Odon Godart', 'Bulevar Ivana Crnojevića'),
    }
  },
  turnover: simpleHistoryWith2Values(1e6, 2e6),
}
