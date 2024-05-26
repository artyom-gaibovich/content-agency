import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RunCheckTelegramChannelFileAction} from "./content-agent/action/run/run.check.telegram.channel.file.action";
import * as path from "path";
import {CheckTelegramChannelInputModel} from "./file/model/input/check-telegram-channel.input.model";
import {TelegramChannelLinkInterface} from "./model/link/telegram.channel.link.interface";
import {TelegramChannelRepository} from "./content-agent/repository/channel/telegram.channel.repository";
import {
  RunCheckTelegramChannelFileConfigAction
} from "./content-agent/action/run/run.check.telegram.channel.file.config.action";
import {
  RunCheckTelegramChannelFileConfigModel
} from "./content-agent/action/run/run.check.telegram.channel.file.config.model";

async function bootstrap() {
  /*const app = await NestFactory.create(AppModule);
  await app.listen(3000);*/
  /*let result = await runCheckTelegramChannelFileAction
      .run({path : path.join(__dirname, 'file', 'check.telegram.channel.file.js')}
          , {channelLink : {url : 'https://t.me/habr_media'}})
  console.log(result)*/


  const result = await new TelegramChannelRepository(
      new RunCheckTelegramChannelFileAction(
          new RunCheckTelegramChannelFileConfigAction(
      {
        path : {
          path : path.join(__dirname, 'file', 'check.telegram.channel.file.js')
        },

      }
  ))).checkOneByChannelLink(
      {
        channelLink : {
          url : 'habr_media'
        }
      }
  )
  await new Promise(resolve => setTimeout(resolve, 3000))

}
bootstrap();
