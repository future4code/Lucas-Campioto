import {Request,Response} from 'express'
import { JWTAuthentication } from '../../../utils/JWTAuthentication'
import { FriendshipUserUC } from '../../../business/usecase/user/friendshipUserUC'
import { UserDB } from '../../../data/userDataBase'

export const friendshipUserEndPoint = async(req:Request, res: Response) => {
    try{
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const friendshipUserUC = new FriendshipUserUC(new UserDB())

        const result = await friendshipUserUC.execute({
            userId,
            userFriendId: req.body.userFriendId
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}