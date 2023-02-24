import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [UserModule, CardModule, RecordModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
