import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RunGetTelegramChannelFileAction} from "./content-agent/action/run/run.get.telegram.channel.file.action";
import * as path from "path";

async function bootstrap() {
  /*const app = await NestFactory.create(AppModule);
  await app.listen(3000);*/
  const runGetTelegramChannelFileAction = new RunGetTelegramChannelFileAction()
  const result = await runGetTelegramChannelFileAction.run(path.join(__dirname, 'file', 'get.telegram.channel.file.js'), {channelLink : 'habr_media'})
  console.log(result)
}
bootstrap();
