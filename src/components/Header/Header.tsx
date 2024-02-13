import Image from "next/image"

const Header = () => {
  return (
    <nav className="w-full bg-white h-16 flex items-center justify-center">
      <section className="container flex items-center gap-3">
        <Image
          src="/logo.svg"
          width={48}
          height={48}
          alt="Logo da aplicação"
        />
        <h1 className="font-bold text-2xl antialiased">
          Lista de países
        </h1>
      </section>
    </nav>
  )
}

export default Header