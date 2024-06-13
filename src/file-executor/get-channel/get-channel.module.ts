import {Module} from "@nestjs/common";
import {GET_CHANNEL} from "../../constants/di.constants";
import {GetChannel} from "./get-channel";

@Module({
    providers : [{
        provide : GET_CHANNEL,
        useFactory : () => {
            return new GetChannel()
        }
    }],
    exports : [GET_CHANNEL]
})
export class GetChannelModule {

}