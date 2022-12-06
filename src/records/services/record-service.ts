import {PrismaClient, Record} from "@prisma/client";
import { RecordModel, RecordType } from "../models/record-model.js";
import { RecordPort } from "../ports/records-ports.js"

export class RecordService {
  constructor(private prisma: PrismaClient, private recordPort: RecordPort) {}
  async create(data: RecordModel): Promise<RecordModel> {
    try{
      const record = await this.recordPort.save(data);
      return record;
    } catch(error) {
      throw error;
    }
  }

}
