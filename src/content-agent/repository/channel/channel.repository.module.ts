import {Module} from "@nestjs/common";
import {FileManagerInterface} from "../../../file-manager/file-manager.interface";
import {ChannelRepository} from "./channel.repository";
import {FileManagerModule} from "../../../file-manager/file-manager.module";

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