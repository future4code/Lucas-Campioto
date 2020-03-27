import { UserDB } from "../../../data/userDataBase";


export class DeleteFriendshipUC {
    constructor(private db: UserDB){}

    public async execute(input: DeleteFriendshipInput): Promise<DeleteFriendshipOutput>{
        try{
            await this.db.deleteFriendship(input.userId, input.friendId)
            await this.db.deleteFriendship(input.friendId, input.userId)
            return { message: "broken friendship"}
        }catch(err){
            console.log(err)
            return { message: "user not found" }
        }
    }
}

export interface DeleteFriendshipInput{
    userId:string,
    friendId:string
}

export interface DeleteFriendshipOutput{
    message:string
}