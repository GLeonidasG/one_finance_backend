import {ApiPropertyOptional} from "@nestjs/swagger";
export class UpdateCardDto {
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  cardID?: string;
  @ApiPropertyOptional()
  validFrom?: Date;
  @ApiPropertyOptional()
  validThru?: Date;
}
