'use client'

import { useCoutries } from "@/hooks"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

type Params = {
  params: {
    name: string
  }
}

const Country = ({ params: { name } }: Params) => {
  const { getCountryByName, country } = useCoutries()

  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  useEffect(() => {
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
              <h2 className="text-xl text-gray-800"><b>Capital:</b> {country[0].capital[0]}</h2>
              <h2 className="text-xl text-gray-800"><b>Continente:</b> {country[0].region} - {country[0].subregion}</h2>
              <h2 className="text-xl text-gray-800"><b>População:</b> {formatter.format(country[0].population)} </h2>
              <h2 className="text-xl text-gray-800"><b>Línguas faladas:</b>
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
              </h2>
            </section>
            <div className="relative h-[275px] w-96 rounded-xl overflow-hidden">
              <Image
                src={country[0].flags.svg}
                alt={"Bandeira"}
                fill
                className="object-cover"
              />
            </div>
          </article>
        </>

      )}
    </section>
  )
}

export default Country