import React, { useEffect, useState } from "react";
import "./App.css";
import { apiFetch } from "./api/api";
import { fetchCountries } from "./api/fetchCountries";
import Card from "./components/Card";
import { CovidApiType, CountriesType } from "./types/types";
import Dropdown from "./components/Dropdown";
import { ReactComponent as Loader } from "./assets/loading.svg";
function App() {
  const [covidData, setCovidData] = useState<CovidApiType>({} as CovidApiType);
  const [countries, setCountries] = useState<CountriesType[]>([]);
  const [country, setCounty] = useState<string>("World Data");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    apiFetch(setCovidData);
    fetchCountries(setCountries);
    return () => {};
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute h-full w-full z-[2] bg-gray-400 bg-opacity-70">
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        </div>
      )}
      <div className="scrollbar">
        <div className="text-center text-3xl font-bold">{country}</div>
        <div className="flex items-center gap-4 p-4">
          <Card
            type="Confirmed"
            number={covidData?.confirmed?.value}
            card_css="bg-orange-500"
          />
          <Card
            type="Recovered"
            number={covidData?.recovered?.value}
            card_css="bg-green-500"
          />
          <Card
            type="Deaths"
            number={covidData?.deaths?.value}
            card_css="bg-red-500"
          />
        </div>
        <Dropdown
          countries={countries}
          setCovidData={setCovidData}
          setCounty={setCounty}
          setLoading={setLoading}
        />
      </div>
    </>
  );
}

export default App;
