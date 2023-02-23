import {ApiProperty} from "@nestjs/swagger";

export class CreateCardDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  cardID: string;
  @ApiProperty()
  validFrom: Date;
  @ApiProperty()
  validThru: Date;
}
