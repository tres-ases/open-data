import { Genero } from "./core.model";

export interface Figura {
  slug: string
  nombres: string
  apellidoPaterno: string
  apellidoMaterno: string
  nacimiento?: string
  genero: Genero
}
