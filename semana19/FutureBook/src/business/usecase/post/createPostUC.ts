import { v4 } from 'uuid'
import { PostDB } from '../../../data/postDataBase';
import { Post } from '../../entities/post';


export class CreatePostUC{
    constructor(private db: PostDB){}

    public async execute(input: CreatePostInput): Promise<CreatePostOutput>{

        try{
            const postId = v4()

            const postDateGenerated = new Date()

            const newPost = new Post(
                postId,
                input.userId,
                input.photo,
                input.description,
                postDateGenerated,
                input.type
            )

            await this.db.createPost(newPost)
            return{ message: "post successfully created" }
        }catch(err){
            console.log(err)
            return { message: "error" }
        }
        
    }
}

export interface CreatePostInput{
    photo: string,
    userId: string,
    description: string,
    postDate:Date,
    type:string
}

export interface CreatePostOutput{
    message: string
}