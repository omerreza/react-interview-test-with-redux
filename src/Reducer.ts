import { combineReducers } from "redux";
import { Company } from "./App";

export interface CompaniesState {
  readonly companies: Company[];
}

const companies = [
  {
    name: "Facebook",
    domain: "facebook.com",
    logo: "https://logo.clearbit.com/facebook.com"
  },
  {
    name: "FANDOM",
    domain: "fandom.com",
    logo: "https://logo.clearbit.com/fandom.com"
  }
];

export const companyReducer = (state = { companies: companies }) => {
  return state;
};

export const rootReducer = combineReducers({
  companies: companyReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;
