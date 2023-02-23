
import {Card} from '../../card/entities/card.entity'


export class User {
  ID: number ;
username: string ;
email: string ;
password: string ;
balance: number ;
createdAt: Date ;
updatedAt: Date ;
cards?: Card[] ;
}
