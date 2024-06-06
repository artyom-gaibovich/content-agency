import {Module} from "@nestjs/common";
import {PathInterface} from "../../model/path/path.interface";
import * as path from "path";
import {ChannelChecker} from "./channel.checker";
import {FileManagerModule} from "../../file-executor/file-manager.module";
import {FileManagerInterface} from "../../file-executor/file-manager.interface";

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