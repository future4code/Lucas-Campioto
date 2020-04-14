import {DeleteVideoGateway} from '../gateway/deleteVideoGateway';

export class DeleteVideoUC {
    constructor(
        private deleteVideGateway: DeleteVideoGateway
    ){}

    async execute(input: DeleteVideoInput){
        await this.deleteVideGateway.deleteVideo(input.idVideo)
    }
}

export interface DeleteVideoInput{
    idVideo: string,
}