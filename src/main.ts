import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {PrismaService} from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('One finance')
    .setDescription('One finance is a expense tracker to plan your finances and ')
    .setVersion('1.0')
    .addTag('user', 'Use this API to manage users')
    .addTag('card', 'Use this API to manage cards for users')
    .addTag('record', 'Use this API to manage record for cards')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
}
bootstrap();
