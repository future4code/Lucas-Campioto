import { Employee } from './employee';

export class Chef extends Employee{
    constructor(name:string, salary:number){
        super(name,salary)
    }

    public sayJob():void{
        console.log("Chefe")
    }

  
}