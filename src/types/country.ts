export type Country = {
  capital: string,
  name: {
    common: string,
    official: string
  }
  translations: {
    por: {
      common: string,
      official: string
    }
  },
  region: string,
  subregion: string,
  flags: {
    svg: string,
    alt: string
  },
  population: number,
  languages: {
    [key: string]: string
  },
}