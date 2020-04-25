import * as admin from "firebase-admin";
import {Request,Response} from 'express';
import {ChangeVideoGateway} from '../business/gateway/changeVideoGateway';

export class ChangeVideoDB implements ChangeVideoGateway {
    async changeVideo(videoId:string, title:string, description:string): Promise<void> {
        async(req:Request, res:Response) => {
            await admin.firestore().collection('sendVideo').doc(req.params.videoId).update({
                videoId,
                title,
                description
            })

        }
        
    }
}