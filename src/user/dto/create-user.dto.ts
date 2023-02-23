import { ApiProperty, ApiExtraModels, ApiPropertyOptional } from "@nestjs/swagger"
import {CreateCardDto} from '../../card/dto/create-card.dto'
import {ConnectCardDto} from '../../card/dto/connect-card.dto'

@ApiExtraModels(CreateCardDto, ConnectCardDto)
export class CreateUserCardsRelationInputDto {
  @ApiPropertyOptional()
  create?: CreateCardDto[];
  @ApiPropertyOptional()
  connect?: ConnectCardDto[];
}

@ApiExtraModels(CreateUserCardsRelationInputDto)
export class CreateUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  balance: number;
  @ApiPropertyOptional()
  cards?: CreateUserCardsRelationInputDto;
}
