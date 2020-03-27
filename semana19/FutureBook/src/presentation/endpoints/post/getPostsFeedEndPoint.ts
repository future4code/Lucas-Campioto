import {Request,Response} from 'express'
import { JWTAuthentication } from "../../../utils/JWTAuthentication"
import { GetPostFeedUC} from '../../../business/usecase/post/getPostFeedUC'
import { PostDB } from '../../../data/postDataBase'


export const GetPostFeedEndPoint = async(req: Request, res: Response) =>{
    try{
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const getPostFeedUC = new GetPostFeedUC(new PostDB())

        const result = await getPostFeedUC.execute({
            userId
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}