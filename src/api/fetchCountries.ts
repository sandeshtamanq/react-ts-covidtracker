import { baseUrl } from "./api";
import { CountriesType } from "../types/types";
export const fetchCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<CountriesType[]>>
) => {
  try {
    const res = await fetch(`${baseUrl}/countries`);
    const countries = await res.json();
    setCountries(countries.countries);
  } catch (err) {
    console.log(err);
  }
};
