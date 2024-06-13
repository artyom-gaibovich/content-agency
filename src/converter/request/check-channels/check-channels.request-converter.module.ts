import {Module} from "@nestjs/common";
import {CheckChannelsRequestConverter} from "./check-channels.request-converter";
import {CHECK_CHANNELS_REQUEST_CONVERTER} from "../../../constants/di.constants";

@Module({
    providers : [
        {
            provide: CHECK_CHANNELS_REQUEST_CONVERTER,
            useFactory : () => {
                return new CheckChannelsRequestConverter()
            }
        }
    ],
    exports : [CHECK_CHANNELS_REQUEST_CONVERTER]
})
export class CheckChannelsRequestConverterModule{

}