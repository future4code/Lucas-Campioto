import express, { Request, Response } from "express";
import { signUpEndPoint } from "./endpoints/user/singUpEndPoint";
import { loginEndpoint } from "./endpoints/user/loginEndPoint";
import { friendshipUserEndPoint } from "./endpoints/user/friendshipUserEndPoint";
import { deleteFriendshipEndPoint } from "./endpoints/user/deleteFriendShipEndPoint";
import { createPostEndPoint } from "./endpoints/post/createPostEndPoint";
import { GetPostFeedEndPoint } from "./endpoints/post/getPostsFeedEndPoint";





const app = express();
app.use(express.json());

app.post("/signup", signUpEndPoint)
app.post("/login", loginEndpoint)
app.post("/user/friendship", friendshipUserEndPoint)
app.post("/user/delete/friendship", deleteFriendshipEndPoint)
app.post("/posts", createPostEndPoint)
app.get("/posts/getPosts", GetPostFeedEndPoint)


export default app;