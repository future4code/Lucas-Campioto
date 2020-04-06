import { UserDB } from "../../../data/userDataBase";
import { v4 } from "uuid"
import { User } from "../../entities/user";
import * as bcrypt from "bcrypt"
import { JWTAuthentication } from "../../../utils/JWTAuthentication";

export class SignUpUC {
    constructor(private db: UserDB){}

    public async execute (input: SignUpInput): Promise<SignUpOutput> {
        try{
            const id = v4()
            const hashPassword = await bcrypt.hash(input.password, 10)

            const newUser = new User(
                id,
                input.name,
                input.email,
                hashPassword
            )

            await this.db.createUser(newUser)

            const jwtAuth = new JWTAuthentication()
            const token = jwtAuth.generateToken(newUser.getId())

            return ({message: "User created successfully", token})
            

        }catch(err){
            console.log(err)
            throw new Error("There was a problem creating a user!")
        }
    }



}

interface SignUpInput{
    name: string
    email: string
    password: string
}

export interface SignUpOutput {
    message: string
    token:string
}

