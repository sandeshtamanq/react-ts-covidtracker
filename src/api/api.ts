import { CovidApiType } from "../types/types";

export const baseUrl = "https://covid19.mathdro.id/api";
export const apiFetch = async (
  setCovidData: React.Dispatch<React.SetStateAction<CovidApiType>>
) => {
  try {
    const response = await fetch("https://covid19.mathdro.id/api");
    const cases = await response.json();
    setCovidData(cases);
    return cases;
  } catch (err) {
    console.log(err);
  }
};
