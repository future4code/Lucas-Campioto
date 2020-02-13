import * as moment from "moment";
import { readFile, writeFile } from 'fs'


moment.locale("pt-br")

const jsonFileName: string = '../calendar.json'

type event = {
    startDate: moment.Moment,
    endDate: moment.Moment,
    eventName: string,
    description: string,
}

type eventsFile = {
    events: event[]
}

const newEvent: event = {
    eventName: process.argv[2],
    description: process.argv[3],
    startDate:  moment(process.argv[4], 'DD/MM/YYYY HH:mm'),
    endDate: moment(process.argv[5], 'DD/MM/YYYY HH:mm'),
}

const getEvents = async () => {
    const readEventPromises: Promise<string> = new Promise((resolve, reject) =>{
        readFile(jsonFileName,(err: Error, data: Buffer) => {
            if(err){
                reject(err);
                return;
            }
            console.log(data);
            resolve(data.toString());
        });
    });

    const jsonContent:string = await readEventPromises;
    const eventsObject = JSON.parse(jsonContent);
    return eventsObject;
}

