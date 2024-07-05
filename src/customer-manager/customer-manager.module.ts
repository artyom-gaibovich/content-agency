import {Module} from '@nestjs/common';
import {ContentAgentModule} from "../content-agent/content-agent.module";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {CustomerManager} from "./customer-manager";
import {CustomerManagerController} from "./customer-manager.controller";
import {
    RewriteContentRequestConverterModule
} from "../converter/request/rewrite-content/rewrite-content.request-converter.module";
import {
    CheckChannelsRequestConverterModule
} from "../converter/request/check-channels/check-channels.request-converter.module";
import {
    CONFIG,
    CONTENT_AGENT,
    CUSTOMER_MANAGER,
    REWRITER_CLIENT,
    SEND_TO_REWRITE_REQUEST_CONVERTER
} from "../constants/di.constants";
import {
    SendToRewriteRequestConverterModule
} from "../converter/request/send-to-rewrite/send-to-rewrite.request.converter.module";
import {
    SendToRewriteRequestConverterInterface
} from "../converter/request/send-to-rewrite/send-to-rewrite.request.converter.interface";
import {RewriterClientInterface} from "../client/rewriter/rewriter.client.interface";
import {RewriterClientModule} from "../client/rewriter/rewriter.client.module";
import {ConfigInterface} from "../config/config.interface";
import {ConfigModule} from "../config/config.module";
import {PromptConverterModule} from "../converter/prompt/prompt.converter.module";

@Module({
    imports : [PromptConverterModule, ConfigModule, RewriterClientModule, SendToRewriteRequestConverterModule, ContentAgentModule, RewriteContentRequestConverterModule, CheckChannelsRequestConverterModule],
    providers : [
        {
            provide : CUSTOMER_MANAGER,
            useFactory : (
                sendToRewriteConverter : SendToRewriteRequestConverterInterface,
                rewriterClient : RewriterClientInterface,
                contentAgent : ContentAgentInterface,
                config : ConfigInterface,
            ) => {
                return new CustomerManager(sendToRewriteConverter, rewriterClient, contentAgent, config)
            },
            inject : [SEND_TO_REWRITE_REQUEST_CONVERTER, REWRITER_CLIENT,  CONTENT_AGENT, CONFIG]
        }
    ],
    controllers : [CustomerManagerController]
})
export class CustomerManagerModule {

}
