import {PrismaClient} from "@prisma/client";
import { RecordModel } from "../models/report-model.js";

export interface RecordPort {
  save(data: RecordModel): Promise<RecordModel>
  list(): Promise<RecordModel[]>
  delete(ID: string): Promise<void>
  findByID(ID: string): Promise<RecordModel>
}
