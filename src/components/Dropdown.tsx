import React, { useState } from "react";
import { CountriesType } from "../types/types";
import { fetchCountryData } from "../api/fetchCovidData";
import { CovidApiType } from "../types/types";
interface CountryList {
  countries: CountriesType[];
  setCovidData: React.Dispatch<React.SetStateAction<CovidApiType>>;
  setCounty: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Dropdown: React.FC<CountryList> = ({
  countries,
  setCovidData,
  setCounty,
  setLoading,
}) => {
  const [selectedCountry, setSelectedCountry] =
    useState<string>("Select a Country");
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (name: string, countryName: string) => {
    fetchCountryData(name, setCovidData, setLoading);
    setCounty(countryName);
    setSelectedCountry(countryName);
    setOpen((open) => false);
  };
  return (
    <div className="w-1/2 m-auto  text-center">
      {open && (
        <div
          className="h-screen w-screen absolute top-0 left-0 "
          onClick={() => setOpen((open) => !open)}
        ></div>
      )}
      <div
        className="relative flex items-center w-[200px] m-auto justify-between cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        {selectedCountry}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 animation transform ${
            open ? "-rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {open && (
        <div className="h-52 w-[200px] scrollbar left-[50%] bg-white -translate-x-1/2 absolute z-1 overflow-y-scroll">
          {countries.map((country, index) => {
            return (
              <div key={index}>
                <div
                  className="cursor-pointer"
                  onClick={() => handleClick(country.iso3, country.name)}
                >
                  {country.name}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
