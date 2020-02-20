
export class ErrorPrinter {
    public mensage: string;
    public dateTime: string;

    public onError(mensage:string ,dateTime:string):void{
        return console.log("<",mensage,">", " - ", "<",dateTime,">")
    }
}