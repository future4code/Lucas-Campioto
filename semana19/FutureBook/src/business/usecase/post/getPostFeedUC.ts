import { PostDB } from "../../../data/postDataBase";
import { FeedPost } from "../../entities/feedPost";


export class GetPostFeedUC{
    constructor(private db: PostDB){}

    private POST_PET_PAGE = 10;

        public async execute(input: GetPostFeedInput): Promise<GetPostFeedOutput>{
            return { posts: await this.db.getPosts(input.userId)}
        } 
}

export interface GetPostFeedInput{
    userId:string
}

export interface GetPostFeedOutput{
    posts: FeedPost[]
}