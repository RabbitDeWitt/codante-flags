import { Country } from "@/app/types/country"
import Image from "next/image"

type Props = {
  country: Country
}

const Card = ({ country }: Props) => {
  const { translations, flags, name } = country
  return (
    <article className="h-60 min-w-full p-2 bg-white  rounded-xl hover:ring-indigo-200 hover:ring-2 hover:shadow-lg transition-all duration-200 cursor-pointer">
      <div className="relative h-40 p-2 overflow-hidden rounded-xl ring-2 ring-indigo-100">
        <Image
          src={flags.svg}
          alt={`Flag from ${name.common}`}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl text-center mt-1">{translations.por.common}</h2>
      </div>
    </article>
  )
}

export default Card