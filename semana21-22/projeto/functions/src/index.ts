import * as functions from 'firebase-functions';
import admin from 'firebase-admin'  ;
import express,{Request,Response} from 'express';
import  cors from 'cors';
import { SendVideoDB } from './data/sendVideoDB';
import { SendVideoUC, SendVideoUCInput } from './business/usecase/sendVideoUC';
import {AuthenticationService} from "./services/authenticationServices";
import { DeleteVideoDB } from './data/deleteVideoDB';
import { DeleteVideoUC, DeleteVideoInput } from './business/usecase/deleteVideoUC';



admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

app.post('/sendVideos', async(req:Request , res: Response) =>{
   try{
        
        
        const sendVideosDB = new SendVideoDB();
        const sendVideoUC =  new SendVideoUC(sendVideosDB);
        const videoId =  await admin.firestore().collection("sendVideo").doc().get().then(doc => doc.id);
        const authenticationService = new AuthenticationService();
        const token = req.headers.auth as string;
        const userId = await authenticationService.authenticate(token);
        const input: SendVideoUCInput ={
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
            userId,
            videoId
        }
        
        await sendVideoUC.execute(input);
        res.status(200).send("video enviado com sucesso")

   }catch(err){
       res.status(400).send(err.message)
   }
});

app.delete('/deleteVideo?videoId:'), async(req:Request, res:Response) => {
    try{
        const deleteVideoDB = new DeleteVideoDB();
        const deleteVideoUC = new DeleteVideoUC(deleteVideoDB);
        const input: DeleteVideoInput = {
            idVideo: req.params.idVideo
        }
        await deleteVideoUC.execute(input);
        res.status(200).send("deletado com sucesso")
    }catch(err){
        res.status(400).send(err.message)
    }
})

exports.futureTube = functions.https.onRequest(app)