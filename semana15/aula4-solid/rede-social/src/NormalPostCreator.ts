import { PostCreator } from "./PostCreator";
import { Post } from './Post'
import{ JSONFileManager } from './JSONFileManager'

export class NormalPostCreator implements PostCreator{
     create(author:string, text:string){
        this.validateInput(text,author);
        this.savePost(new Post(text,author,new Date()));
     }

     protected savePost(post: Post){
         const fileManager = new JSONFileManager(
             "/Users/l_cam/Desktop/Lucas-Campioto/semana15/aula4-solid/rede-social/post.json"
         );
         const data = fileManager.readFile();
         data.posts.push(post)
         fileManager.writeFile(data)
     }

     protected validateInput(text:string, author:string){
         if(!text || !author){
             throw new Error("erro ao criar post")
         }
     }
      
}