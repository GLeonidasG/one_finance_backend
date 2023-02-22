import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma/prisma.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({data: createUserDto});
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.user.findFirst({where: {ID: id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({data: updateUserDto, where: {ID: id}})
  }

  async remove(id: number) {
    await this.prismaService.user.delete({where: {ID: id}});
  }
}
