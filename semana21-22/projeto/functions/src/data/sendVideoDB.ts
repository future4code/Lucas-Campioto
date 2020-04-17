import {SendVideoGateway} from '../business/gateway/sendVideoGateway'
import * as admin from "firebase-admin";

export class SendVideoDB implements SendVideoGateway {
    
    async sendVideo(url:string, title:string, description:string):Promise<void>{
        
        await admin.firestore().collection('sendVideo').add({
            url,
            title,
            description,
           
        })
    }
}