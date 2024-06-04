import {Module} from "@nestjs/common";
import {PathModel} from "../../model/path/path.model";
import * as path from "path";
import {ChannelChecker} from "./channel.checker";
import {FileManager} from "../../file-manager/file-manager";
import {CheckChannelAction} from "../../file-manager/actions/check-channel/check-channel.action";

@Module({
    imports : [],
    providers : [{
        provide : 'CHANNEL_CHECKER',
        useFactory: () => {
            return new ChannelChecker(
                {
                    pathToFile : path.join(__dirname, '..', '..', 'file-manager', 'files', 'check.telegram.channel.file.js')
                },
                new FileManager(new CheckChannelAction())
            )
        }
    }],
    exports : ['CHANNEL_CHECKER']
})
export class ChannelCheckerModule {

}