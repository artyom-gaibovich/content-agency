import {Module} from "@nestjs/common";
import {CHECK_CHANNEL_ACTION} from "../../constants/di.constants";
import {CheckChannelAction} from "./check-channel.action";

@Module({
    providers : [
        {

            provide : CHECK_CHANNEL_ACTION,
            useFactory : () => {
                return new CheckChannelAction()
            }
        }
    ],
    exports: [CHECK_CHANNEL_ACTION]
})
export class CheckChannelActionModule {

}