import * as functions from 'firebase-functions';
import admin from 'firebase-admin'  ;
import express,{Request,Response} from 'express';
import  cors from 'cors';
import { SendVideoDB } from './data/sendVideoDB';
import { SendVideoUC, SendVideoUCInput } from './business/usecase/sendVideoUC';

import { ChangeVideoDB } from './data/changeVideoDB';
import { ChangeVideoUC, ChangeVideoInput } from './business/usecase/changeVideoUC'
import { GetVideosDB } from './data/getVideosDB';
import { GetVideosUC } from './business/usecase/getVideosUC';




admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));



app.get('/getVideos', async(req: Request, res: Response) => {
    try{
        const getvideoDB = new GetVideosDB();
        const getVideoUC = new GetVideosUC(getvideoDB);
        const videos = await  getVideoUC.execute();
        
        res.status(200).send({
            message:"sucesso",
            videos,
        })
    }catch(err){
        res.status(400).send(err.message)
    }
})

app.post('/sendVideos', async(req:Request , res: Response) =>{
   try{
        
        
        const sendVideosDB = new SendVideoDB();
        const sendVideoUC =  new SendVideoUC(sendVideosDB);
        
        
        const input: SendVideoUCInput ={
            url: req.body.url,
            title: req.body.title,
            description: req.body.description,
           
        }
        
        await sendVideoUC.execute(input);
        res.status(200).send("video enviado com sucesso")

   }catch(err){
       res.status(400).send(err.message)
   }
});

app.put('/changeVideos/:videoId', async(req:Request , res: Response) =>{
    try{
         const changeVideoDB = new ChangeVideoDB();
         const sendVideoUC =  new ChangeVideoUC(changeVideoDB);
         const videoId =  await admin.firestore().collection("sendVideo").doc().get().then(doc => doc.id);
         const input: ChangeVideoInput ={
             title: req.body.title,
             description: req.body.description,
             videoId
         }
         
         await sendVideoUC.execute(input);
         res.status(200).send("video enviado com sucesso")
 
    }catch(err){
        res.status(400).send(err.message)
    }
 });

app.delete('/deleteVideo/:videoId', async(req:Request, res:Response) => {
    try{ 
        const document = admin.firestore().collection('sendVideo').doc(req.params.idVideo);
        await document.delete() 
        
        res.status(200).send("deletado com sucesso")
    }catch(err){
        res.status(400).send(err.message)
    }
})

exports.futureTube = functions.https.onRequest(app)