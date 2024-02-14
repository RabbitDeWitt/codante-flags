'use client'

import { Card } from "@/components";
import { useCountries } from "@/hooks";
import { useEffect } from "react";

export default function Home() {
  const { getCountries, countriesSortedByName } = useCountries()
  useEffect(() => {
    getCountries()
  }, [])

  return (
    <section className="container w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-16">
      {countriesSortedByName.map((country, i) => (
        <Card
          key={i}
          country={country}
        />
      ))}
    </section>
  );
}
