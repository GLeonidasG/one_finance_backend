import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(private prismaService: PrismaService) {}
  async create(createCardDto: CreateCardDto) {
    return await this.prismaService.card.create({ data: createCardDto });
  }

  async findAll() {
    return await this.prismaService.card.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.card.findFirst({ where: { ID: id } });
  }

  async findFromUserId(id: number) {
    return await this.prismaService.card.findMany({
      include: { belongsToUser: true },
      where: {
        belongsToUserID: id
      }
    })
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    return await this.prismaService.card.update({
      data: updateCardDto,
      where: { ID: id },
    });
  }

  async remove(id: number) {
    await this.prismaService.card.delete({ where: { ID: id } });
  }
}
