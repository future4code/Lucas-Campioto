import { readFile, readdir, writeFile } from 'fs';
 
const path:string = "../textos"


const lendoArquivosTexto = new Promise((resolve, reject) => {
    readdir(path, (err: Error, folder: string[]) => {
        folder.forEach( file => {   
            readFile(`${path}/${file}`, (err: Error, data: Buffer) => {
                if(err){
                    reject(err)
                    return
                }

                console.log(data.toString())
                resolve(data.toString())
            })
        })
    });
})


const init = async () => { 
    try{
        const todosOsTextos = await lendoArquivosTexto;
        console.log(todosOsTextos)
    } catch(error){
        console.error("Erro nas promises", error)
    }
}

init();