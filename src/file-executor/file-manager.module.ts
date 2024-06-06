import {Module} from "@nestjs/common";
import {FileManager} from "./file-manager";
import * as path from "path";
import {GetChannelAction} from "./actions/run-get-channel/get-channel.action";
import {CheckChannelAction} from "./actions/check-channel/check-channel.action";

@Module({
    providers: [
        {
            provide : 'FILE_MANAGER',
            useFactory: () => {
                return new FileManager(
                    {
                        checkChannel : {pathToFile : path.join(__dirname, 'files', 'check.telegram.channel.file.js')},
                        getChannelsPath : {pathToFile : path.join(__dirname, 'files', 'get-posts-from-telegram-channel.file.js')}
                    },
                    new CheckChannelAction(),
                    new GetChannelAction(),
                )
            }
        }
    ],
    exports: ['FILE_MANAGER']
})
export class FileManagerModule {

}