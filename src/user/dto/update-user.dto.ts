import {ApiPropertyOptional, ApiExtraModels} from "@nestjs/swagger";
import {CreateCardDto} from '../../card/dto/create-card.dto'
import {ConnectCardDto} from '../../card/dto/connect-card.dto'

export class UpdateUserCardsRelationInputDto {
  create?: CreateCardDto[];
  connect?: ConnectCardDto[];
}

@ApiExtraModels(CreateCardDto, ConnectCardDto, UpdateUserCardsRelationInputDto)
export class UpdateUserDto {
  @ApiPropertyOptional()
  username?: string;
  @ApiPropertyOptional()
  email?: string;
  @ApiPropertyOptional()
  password?: string;
  @ApiPropertyOptional()
  balance?: number;
  @ApiPropertyOptional()
  cards?: UpdateUserCardsRelationInputDto;
}
