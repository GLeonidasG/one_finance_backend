import { TagModel } from "../../tag/model/tag-model.js"

export enum RecordType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME"
}

export class RecordModel {
  public ID?: string
  public description: string
  public type: RecordType
  public value: number
  public tag: TagModel[]

  constructor(model: RecordModel){
    Object.assign(this, model);
  }

}
