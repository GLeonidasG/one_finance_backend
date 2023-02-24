
import {Card} from '../../card/entities/card.entity'


export class Record {
  ID: number ;
title: string ;
description: string ;
type: string ;
value: number ;
entryDate: Date ;
recordsFromCardId: number ;
recordsFromCard?: Card ;
}
