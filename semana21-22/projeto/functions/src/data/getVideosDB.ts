import * as admin from "firebase-admin";


export class GetVideosDB {
    async getVideos(): Promise<any> {
        const videoRef = admin.firestore().collection('sendVideo');
        const snapshot = await videoRef.get();
        return snapshot.docs.map(doc => {
            return doc.data();
        })
    }
}



