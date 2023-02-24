import { ApiExtraModels, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateRecordDto } from '../../record/dto/create-record.dto';
import { ConnectRecordDto } from '../../record/dto/connect-record.dto';

export class UpdateCardRecordsRelationInputDto {
  create?: CreateRecordDto[];
  connect?: ConnectRecordDto[];
}

@ApiExtraModels(
  CreateRecordDto,
  ConnectRecordDto,
  UpdateCardRecordsRelationInputDto,
)
export class UpdateCardDto {
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  cardID?: string;
  @ApiPropertyOptional()
  validFrom?: Date;
  @ApiPropertyOptional()
  validThru?: Date;
  @ApiPropertyOptional()
  records?: UpdateCardRecordsRelationInputDto;
}
