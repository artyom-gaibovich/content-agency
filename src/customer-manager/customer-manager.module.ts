import { Module } from '@nestjs/common';
import { CustomerManagerController } from './customer-manager.controller';
import { CustomerManager } from './customer-manager';
import {
  RunCheckTelegramChannelFileConfigAction
} from "../content-agent/action/run/run.check.telegram.channel.file.config.action";
import {TelegramChannelRepository} from "../content-agent/repository/channel/telegram.channel.repository";
import {RunCheckTelegramChannelFileAction} from "../content-agent/action/run/run.check.telegram.channel.file.action";
import {CheckChannelResponseModel} from "./model/check.channel.response.model";
import * as path from 'path';

@Module({
  providers: [{
    useFactory : () => {
      return new TelegramChannelRepository(
          new RunCheckTelegramChannelFileAction(
              new RunCheckTelegramChannelFileConfigAction(
                  {
                      pathToFile: {
                          pathToFile: path.join(__dirname, '..', 'file', 'check.telegram.channel.file.js')
                    },

                  }
              )));
    },
    provide : 'TELEGRAM_CHANNEL_REPOSITORY'
  },
  {provide : CustomerManager,
      useFactory: (telegramChannelRepository: TelegramChannelRepository) => {
          return new CustomerManager(telegramChannelRepository);
      },
      inject : ['TELEGRAM_CHANNEL_REPOSITORY']
  }
  ],
  controllers: [CustomerManagerController]
})
export class CustomerManagerModule {

}
