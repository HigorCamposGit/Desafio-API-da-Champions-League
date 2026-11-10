import { ClubModel } from "../models/clubModel"
import fs from 'fs/promises'

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const db = await fs.readFile("./src/data/clubs.json", "utf8")
  const clubs: ClubModel[] = JSON.parse(db)
  return clubs
}