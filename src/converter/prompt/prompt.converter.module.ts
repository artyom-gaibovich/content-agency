import {Module} from "@nestjs/common";
import {CHECK_CHANNELS_REQUEST_CONVERTER, PROMPT_CONVERTER} from "../../constants/di.constants";
import {CheckChannelsRequestConverter} from "../request/check-channels/check-channels.request-converter";
import {PromptConverter} from "./prompt.converter";


@Module({
    providers : [
        {
            provide: PROMPT_CONVERTER,
            useFactory : () => {
                return new PromptConverter()
            }
        }
    ],
    exports : [PROMPT_CONVERTER]
})

export class PromptConverterModule {

}

