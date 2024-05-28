import {Module} from '@nestjs/common';
import {CustomerManagerController} from './customer-manager.controller';
import {CustomerManager} from './customer-manager';
import {
    RunCheckTelegramChannelFileConfigAction
} from "../content-agent/action/run/check-telegram-channel-file/run.check.telegram.channel.file.config.action";
import {TelegramChannelRepository} from "../content-agent/repository/channel/telegram.channel.repository";
import {
    RunCheckTelegramChannelFileAction
} from "../content-agent/action/run/check-telegram-channel-file/run.check.telegram.channel.file.action";
import * as path from 'path';
import {
    RunGetPostsFromTelegramChannelFileAction
} from "../content-agent/action/run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.action";
import {
    RunGetPostsFromTelegramChannelFileConfigAction
} from "../content-agent/action/run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.config.action";
import {GetPostsManyChannelsAction} from "../content-agent/action/get/get-posts-many-channels.action";
import {ContentAgent} from "../content-agent/content-agent";
import {CheckChannelsAction} from "../content-agent/action/check/check-channels/check-channels.action";

@Module({
  providers: [{
    useFactory : () => {

        return new ContentAgent(new TelegramChannelRepository(
            new CheckChannelsAction(
                new RunCheckTelegramChannelFileAction(
                    new RunCheckTelegramChannelFileConfigAction(
                        {
                            pathToFile: {
                                pathToFile: path.join(__dirname, '..', 'file', 'check.telegram.channel.file.js')
                            },
                        }
                    ))),
            new RunCheckTelegramChannelFileAction(
                new RunCheckTelegramChannelFileConfigAction(
                    {
                        pathToFile: {
                            pathToFile: path.join(__dirname, '..', 'file', 'check.telegram.channel.file.js')
                        },

                    }
                )),
            new RunGetPostsFromTelegramChannelFileAction(
                new RunGetPostsFromTelegramChannelFileConfigAction(
                    {
                        pathToFile: {
                            pathToFile: path.join(__dirname, '..', 'file', 'get-posts-from-telegram-channel.file.js')
                        },

                    }
                )
            ),
            new GetPostsManyChannelsAction(
                new RunGetPostsFromTelegramChannelFileAction(
                    new RunGetPostsFromTelegramChannelFileConfigAction(
                        {
                            pathToFile: {
                                pathToFile: path.join(__dirname, '..', 'file', 'get-posts-from-telegram-channel.file.js')
                            },

                        }
                    )
                ),
            ))

      );
    },
    provide : 'CustomerManager'
  },
  {provide : CustomerManager,
      useFactory: (telegramChannelRepository: TelegramChannelRepository) => {
          return new CustomerManager(telegramChannelRepository);
      },
      inject : ['CustomerManager']
  }
  ],
  controllers: [CustomerManagerController]
})
export class CustomerManagerModule {

}
