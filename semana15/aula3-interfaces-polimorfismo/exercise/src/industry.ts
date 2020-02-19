// Uma classe que estende de place e pega seus atributos e adiciona novos
//industryName e industryNumber

import { Place } from "./place";

export class Industry extends Place {
  constructor(
    public industryName: string,
    // Refere-se ao nome da indústria

    public industryNumber: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
