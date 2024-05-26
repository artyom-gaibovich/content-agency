import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RunCheckTelegramChannelFileAction} from "./content-agent/action/run/run.check.telegram.channel.file.action";
import * as path from "path";
import {CheckTelegramChannelInputModel} from "./file/model/input/check-telegram-channel.input.model";
import {TelegramChannelLinkInterface} from "./model/link/telegram.channel.link.interface";

async function bootstrap() {
  /*const app = await NestFactory.create(AppModule);
  await app.listen(3000);*/
  const runCheckTelegramChannelFileAction = new RunCheckTelegramChannelFileAction()
  let result =
  console.log(result)
  await new Promise(resolve => setTimeout(resolve, 3000))

}
bootstrap();
