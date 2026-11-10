import { HttpResponse } from './../models/httpResponseModel';
import { Request, Response } from "express"
import * as service from "../services/clubsService"

export const getClub = async (req: Request, res: Response) => {
  const response = await service.getClubService()

  res.status(response.statusCode).json(response.body)
}