import { UserDB } from "../../../data/userDataBase";


export class FriendshipUserUC {
    constructor(private db: UserDB){}

    public async execute (input: FriendshipUserInput ): Promise<FriendshipUserOutput>{
        try{
            await this.db.createFriendship(input.userId, input.userFriendId)
            await this.db.createFriendship(input.userFriendId, input.userId)
            return { message: "friendship followed successfully"}
        }catch(err){
            return { message: "user not found" }
        }
    }
}


export interface FriendshipUserInput {
    userId: string,
    userFriendId: string,
}

export interface FriendshipUserOutput {
    message: string
}