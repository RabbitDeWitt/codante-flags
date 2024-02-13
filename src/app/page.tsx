'use client'

import { Card } from "@/components";
import { useCoutries } from "@/hooks";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  const { countries, getCountries, sortCountriesByName } = useCoutries()
  useEffect(() => {
    getCountries()
  }, [])

  /*   useEffect(() => {
      sortCountriesByName(countries)
    }, [countries]) */

  return (
    <section className="container w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-16">
      {countries.map((country, i) => (
        <Card
          key={i}
          country={country}
        />
      ))}
    </section>
  );
}
