export interface SendVideoGateway {
    sendVideo(url: string, title:string, description:string, userId:string, idVideo:string): Promise<void>
}