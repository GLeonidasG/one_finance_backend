import { Request, Response } from "express";
import { RecordPort } from "../ports/records-ports.js";
import { Router } from "express";
import {RecordService} from "../services/record-service.js";
import {PrismaClient} from "@prisma/client";

export class RecordController {
  constructor(private recordService: RecordPort) {}
  create = async (req: Request, res: Response): Promise<Response> => {
    const record = req.body;
    const newRecord = await this.recordService.save(record);
    return res.status(201).send({ data: newRecord });
  }

  list = async (req: Request, res: Response): Promise<Response> => {
    const records = await this.recordService.list();
    return res.status(200).send({ data: records });
  }
}


const recordController = new RecordController(new RecordService(new PrismaClient));
const router = Router();
router.post("/Records", recordController.create);
router.get("/Records", recordController.list)

export const recordRouter = router;
