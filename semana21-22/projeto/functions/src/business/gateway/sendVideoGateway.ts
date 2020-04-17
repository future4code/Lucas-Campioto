export interface SendVideoGateway {
    sendVideo(url: string, title:string, description:string): Promise<void>
}