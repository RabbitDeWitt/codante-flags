import { Country } from "@/app/types/country"
import axios from "axios"
import { useEffect, useState } from "react"

const useCoutries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const getCountries = async () => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => setCountries(res.data))
  }

  const countriesSortedByName = countries.sort((a, b) => {
    const removerAcentos = (str: string) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const countryA = removerAcentos(a.translations.por.common).toLowerCase();
    const countryB = removerAcentos(b.translations.por.common).toLowerCase();

    if (countryA > countryB) {
      return 1
    } else if (countryA < countryB) {
      return -1
    } else {
      return 0
    }
  })

  return {
    countries,
    getCountries,
    countriesSortedByName
  }
}

export default useCoutries