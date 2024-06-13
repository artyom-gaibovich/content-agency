import {Module} from "@nestjs/common";
import {CHECK_CHANNELS_REQUEST_CONVERTER, REWRITE_CONTENT_REQUEST_CONVERTER} from "../../constants/di.constants";
import {CheckChannelsRequestConverter} from "../check-channels/check-channels.request-converter";
import {RewriteContentRequestConverter} from "./rewrite-content.request-converter";

@Module({
    providers : [
        {
            provide: REWRITE_CONTENT_REQUEST_CONVERTER,
            useFactory : () => {
                return new RewriteContentRequestConverter()
            }
        }
    ],
    exports : [REWRITE_CONTENT_REQUEST_CONVERTER]
})
export class RewriteContentRequestConverterModule{

}