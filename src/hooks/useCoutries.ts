import { Country } from "@/types/country"
import axios from "axios"
import { useState } from "react"

const useCoutries = () => {
  const BASE_URL = 'https://restcountries.com/v3.1'

  const [countries, setCountries] = useState<Country[]>([])

  const [country, setCountry] = useState<Country[]>([])


  const getCountries = async () => {
    axios.get(`${BASE_URL}/all`)
      .then(res => setCountries(res.data))
  }

  const getCountryByName = async (country: string) => {
    axios.get(`${BASE_URL}/name/${country}`)
      .then(res => setCountry([...res.data]))
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
    country,
    getCountries,
    getCountryByName,
    countriesSortedByName
  }
}

export default useCoutries