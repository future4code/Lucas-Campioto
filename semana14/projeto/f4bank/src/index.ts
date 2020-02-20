import * as moment from "moment";
import { readFile, writeFile } from 'fs';

moment.locale('pt-br')

const filePath: string = "../acounts.json"

type acount = {
    name: string,
    cpf: string,
    dateOfBirth: moment.Moment,
    balance: number
}

type userExpense = {
    value: number,
    description: string, 
    date: moment.Moment,
}

type userExpensesArray = {
    userExpenses: userExpense[]
}

const newAcount: acount = {
    name: process.argv[2],
    cpf: process.argv[3],
    dateOfBirth: moment(process.argv[4], 'DD/MM/YYYY HH:mm'),
    balance: 0,
}


const getAcount = async () =>{
    const readAcountsPromises: Promise<string> = new Promise((resolve,reject) => {
        readFile(filePath,(err: Error, data: Buffer) => {
            if(err){
                reject(err)
                return
            }
            resolve(data.toString())
        })
    })

    const jsonContent: string = await readAcountsPromises
    const acountsObject: userExpensesArray = JSON.parse(jsonContent)
    return acountsObject
}

const createAcount = async () =>{
    const file = await getAcount()    
    const createAcountPromise: Promise<void> = new Promise((resolve,reject) =>{
        file.users.push(newAcount);
        const dataCounts = JSON.stringify(file);

        writeFile(filePath, dataCounts, 'utf8', (err) => {
            if(err){
                reject(err)
                return
            }
            resolve(console.log("conta cadastrada com sucesso"))
        })
    })
}





