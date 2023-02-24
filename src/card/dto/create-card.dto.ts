import {
  ApiExtraModels,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { CreateRecordDto } from '../../record/dto/create-record.dto';
import { ConnectRecordDto } from '../../record/dto/connect-record.dto';

export class CreateCardRecordsRelationInputDto {
  create?: CreateRecordDto[];
  connect?: ConnectRecordDto[];
}

@ApiExtraModels(
  CreateRecordDto,
  ConnectRecordDto,
  CreateCardRecordsRelationInputDto,
)
export class CreateCardDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  cardID: string;
  @ApiProperty()
  validFrom: Date;
  @ApiProperty()
  validThru: Date;
  @ApiPropertyOptional()
  records?: CreateCardRecordsRelationInputDto;
}
