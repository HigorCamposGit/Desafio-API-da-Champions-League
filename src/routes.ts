import { Router } from "express";
import * as PlayerController from "./controllers/playersController";
import * as ClubController from './controllers/clubsController';

const router = Router();

// Rotas de Players
router.get('/players', PlayerController.getPlayer);
router.post('/players', PlayerController.createPlayer);
router.get('/players/:id', PlayerController.getPlayerById);
router.delete('/players/:id', PlayerController.deletePlayer);
router.patch('/players/:id', PlayerController.updatePlayer);

// Rotas de Clubs
router.get('/clubs', ClubController.getClub);

export default router;