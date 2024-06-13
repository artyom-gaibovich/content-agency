import {Module} from "@nestjs/common";
import {CHECK_CHANNEL} from "../../constants/di.constants";
import {CheckChannel} from "./check-channel";

@Module({
    providers : [
        {

            provide : CHECK_CHANNEL,
            useFactory : () => {
                return new CheckChannel()
            }
        }
    ],
    exports: [CHECK_CHANNEL]
})
export class CheckChannelModule {

}