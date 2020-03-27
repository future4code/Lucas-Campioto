import {Request,Response} from 'express'
import { JWTAuthentication } from '../../../utils/JWTAuthentication'
import { DeleteFriendshipUC } from '../../../business/usecase/user/deleteFriendshipUC'
import { UserDB } from '../../../data/userDataBase'

export const deleteFriendshipEndPoint = async(req: Request, res: Response) => {
    try{
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const deleteFriendshipUC = new DeleteFriendshipUC(new UserDB())
        const result = await deleteFriendshipUC.execute({
            userId,
            friendId: req.body.friendId
        })
        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}