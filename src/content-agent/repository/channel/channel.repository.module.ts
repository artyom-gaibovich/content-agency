import {Module} from "@nestjs/common";
import {ChannelRepository} from "./channel.repository";
import {FileManagerInterface} from "../../../file-executor/file-manager.interface";
import {FileManagerModule} from "../../../file-executor/file-manager.module";

@Module({
    imports : [FileManagerModule],
    providers : [
        {
            provide : 'CHANNEL_REPOSITORY',
            useFactory: (fileManager : FileManagerInterface) => {
                return new ChannelRepository(fileManager)
            },
            inject : ['FILE_MANAGER']
        }
    ],
    exports : ['CHANNEL_REPOSITORY']
})
export class ChannelRepositoryModule {

}