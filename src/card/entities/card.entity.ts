
import {User} from '../../user/entities/user.entity'


export class Card {
  ID: number ;
name: string ;
cardID: string ;
validFrom: Date ;
validThru: Date ;
belongsToUserID: number ;
belongsToUser?: User ;
}
