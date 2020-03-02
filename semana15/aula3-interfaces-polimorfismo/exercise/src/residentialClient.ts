import { Residence } from './residence'
import { Client } from './client'

export class ResidentialClient extends Residence implements Client {
  constructor(
  public clientName: string,
  public clientNumber: number,
  public consumedEnergy: number,
  public name: string,
  public cpf: string,
  public cep: string,
  ){
    super(name, cpf, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}