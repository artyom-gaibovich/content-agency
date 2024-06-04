import { Module } from '@nestjs/common';
import {ChannelCheckerModule} from "./checker/channel-checker.module";
import {ChannelCheckerInterface} from "./checker/channel.checker.interface";
import {ContentAgent} from "./content-agent";






@Module({
    imports : [ChannelCheckerModule],
    providers : [
        {
            provide : 'CONTENT_AGENT',
            useFactory: (channelChecker : ChannelCheckerInterface) => {
                return new ContentAgent(channelChecker)
            },
            inject : ['CHANNEL_CHECKER']
        }
    ],
    exports : ['CONTENT_AGENT']
})
export class ContentAgentModule {

}
