import { Module } from '@nestjs/common';
import {ChannelCheckerModule} from "./checker/channel-checker.module";
import {ChannelCheckerInterface} from "./checker/channel.checker.interface";
import {ContentAgent} from "./content-agent";
import {ChannelRepositoryInterface} from "./repository/channel/channel.repository.interface";
import {ChannelRepositoryModule} from "./repository/channel/channel.repository.module";






@Module({
    imports : [ChannelCheckerModule, ChannelRepositoryModule],
    providers : [
        {
            provide : 'CONTENT_AGENT',
            useFactory: (repository : ChannelRepositoryInterface, channelChecker : ChannelCheckerInterface) => {
                return new ContentAgent(repository ,channelChecker)
            },
            inject : ['CHANNEL_REPOSITORY', 'CHANNEL_CHECKER']
        }
    ],
    exports : ['CONTENT_AGENT']
})
export class ContentAgentModule {

}
