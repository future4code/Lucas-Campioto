import { Post } from "./post";


export class FeedPost extends Post{
    constructor(
        id: string,
        photo: string,  
        description: string,
        postDate: Date,
        type: string

    ){
        super(
            id,
            photo,
            description,
            postDate,
            type
        )
    }
}