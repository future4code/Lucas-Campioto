import {DeleteVideoGateway} from '../business/gateway/deleteVideoGateway';
import * as admin from "firebase-admin";

export class DeleteVideoDB implements DeleteVideoGateway{
    async deleteVideo(idVideo:string):Promise<void>{
        await admin.firestore().collection('sendVideo').doc(idVideo).delete()
    }
}