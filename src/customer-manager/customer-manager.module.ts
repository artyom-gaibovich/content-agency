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
import {GetChannelsWithPostsAction} from "../content-agent/action/get/get-channels-with-posts.action";
import {ContentAgent} from "../content-agent/content-agent";
import {CheckChannelsAction} from "../content-agent/action/check/check-channels/check-channels.action";
import {
    RunGetPostsFromTelegramChannelFileConfigAction
} from "../content-agent/action/run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.config.action";

@Module({
  providers: [{
    useFactory : () => {

        return new ContentAgent(new TelegramChannelRepository(
            new GetChannelsWithPostsAction(
                new RunGetPostsFromTelegramChannelFileAction(
                    new RunGetPostsFromTelegramChannelFileConfigAction(
                        {
                            pathToFile: {
                                pathToFile: path.join(__dirname, '..', 'file', 'get-posts-from-telegram-channel.file.js')
                            },
                        }
                    )
                )
            ),
            new CheckChannelsAction(
                new RunCheckTelegramChannelFileAction(
                    new RunCheckTelegramChannelFileConfigAction(
                        {
                            pathToFile: {
                                pathToFile: path.join(__dirname, '..', 'file', 'check.telegram.channel.file.js')
                            },
                        }
                    ))),
        )
      );
    },
    provide : 'CustomerManager'
  },
  {provide : CustomerManager,
      useFactory: (contentAgent: ContentAgent) => {
          return new CustomerManager(contentAgent);
      },
      inject : ['CustomerManager']
  }
  ],
  controllers: [CustomerManagerController]
})
export class CustomerManagerModule {

}
