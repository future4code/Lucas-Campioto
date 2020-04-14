import {SendVideoGateway} from '../gateway/sendVideoGateway';


export class SendVideoUC {
        constructor(
        private sendVideoGateway: SendVideoGateway
    ){}

    async execute(input: SendVideoUCInput){
        await this.sendVideoGateway.sendVideo(input.url, input.title, input.description, input.userId, input.videoId)
    }
}


export interface SendVideoUCInput {
    url: string,
    title: string,
    description: string,
    userId: string,
    videoId: string
}