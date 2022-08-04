import { CovidApiType } from "../types/types";
import { baseUrl } from "./api";
export const fetchCountryData = async (
  country: string,
  setCovidData: React.Dispatch<React.SetStateAction<CovidApiType>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const res = await fetch(`${baseUrl}/countries/${country}`);
    const data = await res.json();
    setCovidData(data);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};
