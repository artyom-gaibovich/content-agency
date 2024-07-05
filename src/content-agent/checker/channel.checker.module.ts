import {Module} from "@nestjs/common";
import {ChannelChecker} from "./channel.checker";
import {CHANNEL_CHECKER, FILE_MANAGER} from "../../constants/di.constants";

@Module({
    imports : [FileManagerModule],
    providers : [
        {
            provide : CHANNEL_CHECKER,
            useFactory : (fileManager : FileManagerInterface) => {
                return new ChannelChecker(fileManager)
            },
            inject : [FILE_MANAGER]
        }
    ],
    exports : [CHANNEL_CHECKER]
})
export class ChannelCheckerModule {

}