import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  value: number;
  @ApiProperty()
  entryDate: Date;
}
