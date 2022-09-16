import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
.setTitle('MindHealthy')
.setDescription('Manter a mente saudável para uma vida saudável')
.setContact('MindHealthy LTDA.',
 'mindhealthy.org.br',
  'contato@mindhealthy.com')
.setVersion('v0.0.1')
.build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap()//check