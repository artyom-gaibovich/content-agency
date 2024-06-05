import {Module} from "@nestjs/common";
import {PathModel} from "../../model/path/path.model";
import * as path from "path";
import {ChannelChecker} from "./channel.checker";
import {FileManager} from "../../file-manager/file-manager";
import {CheckChannelAction} from "../../file-manager/actions/check-channel/check-channel.action";
import {GetChannelAction} from "../../file-manager/actions/run-get-channel/get-channel.action";
import {FileManagerInterface} from "../../file-manager/file-manager.interface";
import {FileManagerModule} from "../../file-manager/file-manager.module";

@Module({
    imports : [FileManagerModule],
    providers : [{
        provide : 'CHANNEL_CHECKER',
        useFactory : (fileManager : FileManagerInterface) => {
            return new ChannelChecker(fileManager)
        },
        inject : ['FILE_MANAGER']
    }],
    exports : ['CHANNEL_CHECKER']
})
export class ChannelCheckerModule {

}