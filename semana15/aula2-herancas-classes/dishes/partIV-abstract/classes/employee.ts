export abstract class Employee {
    protected name: string;
    protected salario: number;

    constructor(
        name: string,
        salario: number,
    ){
        this.name = name;
        this.salario = salario
    }

    public abstract sayJob(): void 
    
}