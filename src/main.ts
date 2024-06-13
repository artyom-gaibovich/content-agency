import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Config} from "./config/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new Config()
  await app.listen(parseInt(config.get('PORT')));



}
bootstrap();
