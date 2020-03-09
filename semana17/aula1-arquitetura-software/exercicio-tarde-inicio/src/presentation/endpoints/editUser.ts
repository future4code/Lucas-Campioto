import { Request, Response } from "express";
import { EditUserUC } from "../../business/usecase/editUser";
import { UserDB } from "../../data/userDataBase";

export const editUser = async (req: Request, res: Response) => {
  try {
    const editUserUC = new EditUserUC( new UserDB())
    const result = await editUserUC.execute({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email
    })
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
