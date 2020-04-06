import { BaseDB } from "./baseDataBase";
import { Post } from '../business/entities/post'
import { FeedPost } from "../business/entities/feedPost";


    export class PostDB extends BaseDB {
        private postTableName = "posts_futurebook"
        private usersFriendship = "users_friendship"
        private usersTableName = "users_futurebook"

        public async createPost(post:Post): Promise<void>{
            await this.connection.insert({
                id:post.getId(),
                userId: post.getUserId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                postDate: post.getPostDate(),
                type: post.getType()
            }).into(this.postTableName)
        }

        public async getPosts(userId: string): Promise<FeedPost[]>{

            const posts = await this.connection
                .select('*')
                .from(this.usersFriendship)
                .innerJoin(this.postTableName, 'posts_futurebook.userId', 'users_friendship.followedId')
                .innerJoin(this.usersTableName, 'users_futurebook.id', 'users_friendship.followedId')
                .where({ userId })
                
            return posts.map((post:any) =>{
                return new FeedPost(
                    post.id,
                    post.photo,
                    post.description,
                    post.postDate,
                    post.type
                )
            })
        }

        public async getPostsByType (userId: string, type:string, offset:number): Promise<FeedPost[]>{

            const posts = await this.connection
                .select('*')
                .from(this.usersFriendship)
                .innerJoin(this.postTableName, 'posts_futurebook.userId', 'users_friendship.followedId')
                .innerJoin(this.usersTableName, 'users_futurebook.id', 'users_friendship.followedId')
                .where({ userId,type })
                
            return posts.map((post:any) =>{
                return new FeedPost(
                    post.id,
                    post.photo,
                    post.description,
                    post.postDate,
                    post.type
                )
            })
        }
    }