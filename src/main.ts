import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
require('dotenv').config({ path: 'C:/Users/DELL/Desktop/SSD/Transport-Management-System/.env' });

 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('ticketing');
  const port = process.env.PORT || 3000;

  //swagger
  const config = new DocumentBuilder()
    .setTitle('Ticketing')
    .setDescription('The Ticketing API description')
    .setVersion('1.0')
    .addTag('ticketing')
    .build();
    SwaggerModule.setup('ticketing/swagger', app, SwaggerModule.createDocument(app, config));


    //start app
  await app.listen(3000);

  Logger.log(`Server running on http://localhost:${port}/ticketing/swagger`, 'Bootstrap APIs');
}
bootstrap();
