
export class Video{
    constructor(
        private url: string,
        private title: string,
        private description: string,
    ){}

    getUrl(): string{
        return this.url
    }
    
    getTitle() : string{
        return this.title
    }

    getDescription() : string{
        return this.description
    }
   
}


