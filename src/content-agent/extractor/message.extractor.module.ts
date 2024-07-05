import {Module} from "@nestjs/common";
import {CHECK_CHANNELS_REQUEST_CONVERTER, MESSAGE_EXTRACTOR} from "../../constants/di.constants";
import {CheckChannelsRequestConverter} from "../../converter/request/check-channels/check-channels.request-converter";
import {MessageExtractor} from "./message.extractor";

@Module({
    providers : [
        {
            provide: MESSAGE_EXTRACTOR,
            useFactory : () => {
                return new MessageExtractor()
            }
        }
    ],
    exports : [MESSAGE_EXTRACTOR]
})
export class MessageExtractorModule {

}