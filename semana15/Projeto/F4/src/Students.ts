import { User } from "./user";
import { JSONFileManager } from './JSONFileManager'


export class Students extends User{
   constructor(
       name:string,
       email:string,
       birthDate:string,
   ) {
       super(name,email,birthDate)
   }

    createStudent(){
        const JSONfileManager = new JSONFileManager("./dataClass.json")
        let students = JSONfileManager.readFile()
        const newStudent: any = {name: this.name, email: this.email, birthDate: this.birthDate}
    }

}