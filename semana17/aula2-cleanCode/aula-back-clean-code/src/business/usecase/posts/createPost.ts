import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}

// RESPOSTA:

// 1) - Os tipos possiveis a serem criados são: normal e event. E eles são representados por uma entitie post
// onde guarda todos os dados de um post.

// 2) - Verifica se o post é do tipo event se for atribui a variável TYPE um post do tipo event.
// Se input.type for diferente de normal ela retorna um erro. O erro e tratado em um arquivo separado que fica
// dentro da pasta error em business.

// 3) - Essa classe é abstatra para poder dar as ourtas classes os dados base que ela guarda. Ela guarda os dados
// da conexão do banco de dados

// 4) - Ela está criando um novo post chamando a função CreatePostUC e guardando um novo post.

// 5) - É necessário criar essa instancia de post para que possamos criar um novo post pegando os dados necessários
// da classe post.

// 6) - 

// 7) - Vem da classe post das entities.

// 8) - Existe um ternário para verificar se o tipo do post e normal. E usamos isso para trazer um erro.
