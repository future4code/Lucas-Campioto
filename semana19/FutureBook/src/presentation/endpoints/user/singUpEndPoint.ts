import { Request, Response } from "express";
import { SignUpUC } from "../../../business/usecase/user/signUpUC";
import { UserDB } from "../../../data/userDataBase";

export const signUpEndPoint = async (req: Request, res: Response) =>{
    try{
        const signUpUC = new SignUpUC(new UserDB())
        const result = await signUpUC.execute({
            name: req.body.name,
            email: req.body.email,
            password:req.body.password
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}
