import { Country } from "@/app/types/country"
import axios from "axios"
import { useEffect, useState } from "react"

const useCoutries = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const getCountries = async () => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(res => setCountries(res.data))
  }

  const sortCountriesByName = (countries: Country[]) => {
    countries.sort((a, b) => {
      if (a.translations.por.common > b.translations.por.common) {
        return 1
      } else if (a.translations.por.common < b.translations.por.common) {
        return -1
      } else {
        return 0
      }
    })
  }

  return {
    countries,
    getCountries,
    sortCountriesByName
  }
}

export default useCoutries