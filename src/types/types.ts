export interface CovidApiType {
  confirmed: { value: number };
  recovered: { value: number };
  deaths: { value: number };
}

export interface CountriesType {
  name: string;
  iso3: string;
}
