'use client'

import { Card } from "@/components"
import { useCountries } from "@/hooks"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

type Params = {
  params: {
    name: string
  }
}

const Country = ({ params: { name } }: Params) => {
  const { getCountryByName, country, borders, getCountries } = useCountries()

  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  useEffect(() => {
    getCountries()
    getCountryByName(name)
  }, [])

  return (
    <section className="flex flex-col container">
      {country.length === 0 ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <h1 className="text-gray-800 text-5xl text-center font-bold my-16">{country[0].name.common}</h1>
          <Link
            href={'/'}
            className="flex gap-1 py-2"
          >
            <Image
              src="/back-arrow.svg"
              alt="Icone de seta de voltar"
              width={24}
              height={24}
            />
            Voltar
          </Link>
          <article className="flex justify-between min-w-full p-10 bg-white rounded-xl">

            <section>
              {country[0].capital && <h2 className="text-xl text-gray-800"><b>Capital:</b> {country[0].capital[0]}</h2>}
              <h2 className="text-xl text-gray-800"><b>Continente:</b> {country[0].region} {country[0].subregion && ` - ${country[0].subregion}`}</h2>
              <h2 className="text-xl text-gray-800"><b>População:</b> {formatter.format(country[0].population)} </h2>
              {country[0].languages && <h2 className="text-xl text-gray-800"><b>Línguas faladas:</b>
                <div className="flex gap-1 mt-1">
                  {Object.values(country[0].languages).map((language, i) => (
                    <span
                      key={i}
                      className="inline-block px-1 bg-indigo-700 rounded-full text-white text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </h2>}
            </section>
            <div className="relative h-[275px] w-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={country[0].flags.svg}
                alt={"Bandeira"}
                fill
                className="object-cover"
              />
            </div>
          </article>
          <section>
            <h3 className="mt-12 text-2xl font-semibold text-gray-800">Países que fazem fronteira</h3>
            <div className="container w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {!borders.length ? (
                <h2>Esse pais não faz fronteira com outro pais.</h2>
              ) : (
                borders.map((country, i) => (
                  country !== null &&
                  <Card
                    key={i}
                    country={country}
                  />
                ))
              )}
            </div>
          </section>
        </>

      )}
    </section>
  )
}

export default Country