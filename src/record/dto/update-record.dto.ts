import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRecordDto {
  @ApiPropertyOptional()
  title?: string;
  @ApiPropertyOptional()
  description?: string;
  @ApiPropertyOptional()
  type?: string;
  @ApiPropertyOptional()
  value?: number;
  @ApiPropertyOptional()
  entryDate?: Date;
}
