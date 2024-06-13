import {Module} from "@nestjs/common";
import {FileManager} from "./file-manager";
import * as path from "path";
import {CheckChannel} from "./check-channel/check-channel";
import {GetChannel} from "./get-channel/get-channel";
import {CheckChannelModule} from "./check-channel/check-channel.module";
import {GetChannelModule} from "./get-channel/get-channel.module";
import {CHECK_CHANNEL, FILE_MANAGER, FILE_MANAGER_CONFIG, GET_CHANNEL} from "../constants/di.constants";
import {FileManagerConfigInterface} from "./file-manager.config.interface";
import {CheckChannelInterface} from "./check-channel/check-channel.interface";
import {GetChannelInterface} from "./get-channel/get-channel.interface";

@Module({
    imports : [CheckChannelModule, GetChannelModule],
    providers: [
        {
            provide : FILE_MANAGER_CONFIG,
            useFactory : () => {
                return {
                    checkChannel : {pathToFile : path.join(__dirname, 'files', 'check.telegram.channel.file.js')},
                    getChannelsPath : {pathToFile : path.join(__dirname, 'files', 'get-posts-from-telegram-channel.file.js')}

                } as FileManagerConfigInterface
            }
        },
        {
            provide : FILE_MANAGER,
            useFactory : (config : FileManagerConfigInterface, checkChannel : CheckChannelInterface, getChannel  : GetChannelInterface) => {
                return new FileManager(config, checkChannel, getChannel)
            },
            inject : [FILE_MANAGER_CONFIG, CHECK_CHANNEL, GET_CHANNEL]
        }
    ],
    exports: [FILE_MANAGER]
})
export class FileManagerModule {

}