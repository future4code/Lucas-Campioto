  
import express, { Request, Response } from "express";
import { AddressInfo } from 'net';
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
    client: 'mysql',
    connection: {
      host : ' ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
      user : 'lucas',
      password : 'xaVrFcL05KN8B$uF0%Ev',
      database : 'bouman-lucas'
    }
  });

  app.get('/', (req: Request, res: Response) => {
      
      
  })