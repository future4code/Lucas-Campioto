export class Post {
    constructor(
        private id: string,
        private userId: string,
        private photo: string,
        private description: string,
        private postDate: Date,
        private type: string
    ){}

    getId(): string{
        return this.id
    }

    getUserId(): string{
        return this.userId
    }

    getPhoto():string{
        return this.photo
    }

    getDescription():string{
        return this.description
    }

    getPostDate():Date{
        return this.postDate
    }

    getType():string{
        return this.type
    }
}