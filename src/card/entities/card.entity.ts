import { Record } from '../../record/entities/record.entity'
import { User } from '../../user/entities/user.entity'


export class Card {
  ID: number;
  name: string;
  cardID: string;
  validFrom: Date;
  validThru: Date;
  records?: Record[];
  belongsToUserID: number;
  belongsToUser?: User;
}
