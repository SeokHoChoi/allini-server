import { Request, Response } from "express";
import * as treatsRepository from "../data/treats";

export async function getTreats(req: Request, res: Response): Promise<void> {
  const treats = await treatsRepository.getAll();
  res.status(200).json(treats);
}
