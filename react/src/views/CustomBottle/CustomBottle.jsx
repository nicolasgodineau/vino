import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function CustomBottle() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const handleYearChange = (event) => {
    const yearValue = parseInt(event.target.value);
    if (yearValue >= 1900 && yearValue <= currentYear) {
      setYear(yearValue);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <h1>Ajouter une bouteille custom</h1>
      <form action="" className="flex flex-col gap-3 items-start">
        <div>
          <label htmlFor="bottle-name" className="mt-vh-5 ml-2 xs-h:mt-vh-2">
            Nom de la bouteille
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="Domaine de la Galinette"
            className="rounded-lg bg-white h-8 pl-2 shadow-shadow-tiny-inset"
          />
        </div>
        <div>
          <select name="bottle-type" id="">
            <option value="" selected>
              Type de vin
            </option>
            <option value="">Rouge</option>
            <option value="">Blanc</option>
          </select>
        </div>
        <div>
          <label htmlFor="bottle-year" className="mt-vh-5 ml-2 xs-h:mt-vh-2">
            Année
          </label>
          <input
            type="number"
            name=""
            id=""
            min="1000"
            max={currentYear}
            step="1"
            placeholder={currentYear}
          />
        </div>
        <div>
          <label htmlFor="bottle-country" className="mt-vh-5 ml-2 xs-h:mt-vh-2">
            Pays
          </label>
          <input
            id="Country"
            type="text"
            placeholder="France"
            className="rounded-lg bg-white h-8 pl-2 shadow-shadow-tiny-inset"
          />
        </div>
        <div>
          <label htmlFor="bottle-region" className="mt-vh-5 ml-2 xs-h:mt-vh-2">
            Region
          </label>
          <input
            id="Region"
            type="text"
            placeholder="Bordeaux"
            className="rounded-lg bg-white h-8 pl-2 shadow-shadow-tiny-inset"
          />
        </div>
      </form>
    </div>
  );
}
