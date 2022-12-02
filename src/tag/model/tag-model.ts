import { RecordModel } from "../../reports/models/report-model.js";

export class TagModel {
  public ID?: string
  public description: string
  public records: RecordModel[]
}
