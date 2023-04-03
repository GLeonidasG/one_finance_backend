import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordService {
  constructor(private prismaService: PrismaService) {}
  async create(createRecordDto: CreateRecordDto) {
    return await this.prismaService.record.create({ data: createRecordDto });
  }

  async findAll() {
    return await this.prismaService.record.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.record.findFirst({ where: { ID: id } });
  }

  async findManyFromCardId(id: number) {
    return await this.prismaService.record.findMany({
      where: {
        recordsFromCardId: id,
      },
    });
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    return await this.prismaService.record.update({
      data: updateRecordDto,
      where: { ID: id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.record.delete({ where: { ID: id } });
  }
}
