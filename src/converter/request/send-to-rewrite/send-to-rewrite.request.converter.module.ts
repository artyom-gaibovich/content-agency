import {Module} from "@nestjs/common";
import {SendToRewriteRequestConverter} from "./send-to-rewrite.request.converter";
import {SEND_TO_REWRITE_REQUEST_CONVERTER} from "../../../constants/di.constants";

@Module({
    providers : [
        {
            provide : SEND_TO_REWRITE_REQUEST_CONVERTER,
            useFactory : () => {
                return new SendToRewriteRequestConverter()
            }
        }
    ],
    exports : [SEND_TO_REWRITE_REQUEST_CONVERTER]
})
export class SendToRewriteRequestConverterModule {

}