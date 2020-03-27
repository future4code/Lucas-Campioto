import {Request,Response} from 'express'
import { JWTAuthentication } from '../../../utils/JWTAuthentication'
import { CreatePostUC } from '../../../business/usecase/post/createPostUC'
import { PostDB } from '../../../data/postDataBase'


export const createPostEndPoint = async(req:Request, res:Response) => {
    try{
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const createPostUC = new CreatePostUC(new PostDB())

        const input = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            postDate: req.body.postDate,
            userId,
        }

        const result = await createPostUC.execute(input)
        res.status(200).send(result)

    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })  
    }
}