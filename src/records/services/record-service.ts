import {PrismaClient, Record} from "@prisma/client";
import { RecordModel, RecordType } from "../models/record-model.js";
import { RecordPort } from "../ports/records-ports.js"

function initRecord (record: Record): RecordModel {
  return new RecordModel({ ID: record.ID, description: record.description, value: record.value, type: RecordType[record.type], tag: [] });
}

function spreadRecordModel (data: RecordModel): Record {
  return { ID: data.ID, description: data.description, value: data.value, type: RecordType[data.type] as string };
}

export class RecordService implements RecordPort {
  constructor(private prisma: PrismaClient) {}
  async save(data: RecordModel): Promise<RecordModel> {
    const record = await this.prisma.record.create({ data: spreadRecordModel(data) })
    return initRecord(record);
  }

  async list(): Promise<RecordModel[]> {
    const recordList = await this.prisma.record.findMany();
    return recordList.map(initRecord);
  }

  async findByID(ID: string): Promise<RecordModel> {
    const record = await this.prisma.record.findFirst({ where: { ID }});
    return initRecord(record);
  }

  async delete(ID: string): Promise<void> {
    await this.prisma.record.delete({ where: { ID } });
  }
}
