import { PrismaClient } from "@prisma/client";
import { Record } from "@prisma/client";
import { RecordModel, RecordType } from "../models/record-model.js";
import { RecordPort } from "../ports/records-ports.js";

export class RecordsRepository implements RecordPort {

  private initRecord (record: Record): RecordModel {
  return new RecordModel({ ID: record.ID, description: record.description, value: record.value, type: RecordType[record.type], tag: [] });
  }

  private spreadRecordModel (data: RecordModel): Record {
    return { ID: data.ID, description: data.description, value: data.value, type: RecordType[data.type] as string };
  }

  constructor(private prisma: PrismaClient){}
  
  async save(data: RecordModel): Promise<RecordModel> {
    try{
      const record = await this.prisma.record.create({ data: this.spreadRecordModel(data) })
      return this.initRecord(record);
    } catch(error) {
      throw error;
    }
  }

  async list(): Promise<RecordModel[]> {
    try {
      const recordList = await this.prisma.record.findMany();
      return recordList.map(this.initRecord);
    } catch(error) {
      throw error;
    }
  }

  async findByID(ID: string): Promise<RecordModel> {
    try {
      const record = await this.prisma.record.findFirst({ where: { ID }});
      return this.initRecord(record);
    } catch(error) {
      throw error;
    }
  }

  async delete(ID: string): Promise<void> {
    try {
      await this.prisma.record.delete({ where: { ID } });
    } catch(error){
      throw error;
    }
  }

}
