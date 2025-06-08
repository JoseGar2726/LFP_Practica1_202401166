import { Router, Request, Response } from "express";
import { analyze, inicio, reporte, pokemones } from "../controllers/analyze.controller";

const analyzeRouter = Router();

analyzeRouter.get('/', inicio)
analyzeRouter.post('/analyze', analyze);
analyzeRouter.get('/report', reporte);
analyzeRouter.get('/jugadores/:nombre', pokemones);

export default analyzeRouter;