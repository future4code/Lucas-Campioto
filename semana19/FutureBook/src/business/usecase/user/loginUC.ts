import * as bcrypt from 'bcrypt';
import { UserDB } from '../../../data/userDataBase';
import { JWTAuthentication } from '../../../utils/JWTAuthentication';


export class LoginUseCase {
    constructor(private db: UserDB){}

    public async execute (input:LoginInput): Promise<LoginOutput>{
        const user = await this.db.getUserByEmail(input.email)

        if(!user){
            throw new Error('incorret email')
        }

        const isPasswordCorrect =  await bcrypt.compare(input.password, user.getPassword())

        if(!isPasswordCorrect){
            throw new Error('incorrect password')
        }

        
        

        return({message: 'User sucessfully loged in'})
    }
}

interface LoginInput{
    email:string
    password: String
}

interface LoginOutput{
    message: string
    
}