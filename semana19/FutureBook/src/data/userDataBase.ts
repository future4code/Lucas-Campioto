import { BaseDB } from "./baseDataBase";
import { User } from "../business/entities/user";


export class UserDB extends BaseDB {
    private usersTableName = "users_futurebook"
    private usersFriendship = "users_friendship"
    

    public async createUser(user: User): Promise<void>{
        await this.connection.insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }).into(this.usersTableName)
    }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.connection.select('*')
            .from(this.usersTableName)
            .where({ email })

        if (!user[0]) {
            return undefined
        }

        return new User(
            user[0].id,
            user[0].name,
            user[0].email,
            user[0].password,
        )
    }

    public async createFriendship(followerId: string, followedId: string): Promise<void | undefined>{
        await this.connection.insert({
            followerId,
            followedId
        }).into(this.usersFriendship)
    }

    public async deleteFriendship(followerId: string, followedId: string): Promise<void | undefined> {
        await this.connection(this.usersFriendship)
            .where({ followerId })
            .where({ followedId })
            .del()
    }

}