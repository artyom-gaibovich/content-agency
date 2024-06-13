import {Module} from '@nestjs/common';
import {ContentAgentModule} from "../content-agent/content-agent.module";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {CustomerManager} from "./customer-manager";
import {CustomerManagerController} from "./customer-manager.controller";
import {RewriteContentRequestConverter} from "../request-converter/rewrite-content/rewrite-content.request-converter";
import {CheckChannelsRequestConverter} from "../request-converter/check-channels/check-channels.request-converter";
import {
    RewriteContentRequestConverterModule
} from "../request-converter/rewrite-content/rewrite-content.request-converter.module";
import {
    CheckChannelsRequestConverterModule
} from "../request-converter/check-channels/check-channels.request-converter.module";
import {CONTENT_AGENT, CUSTOMER_MANAGER} from "../constants/di.constants";

@Module({
    imports : [ContentAgentModule, RewriteContentRequestConverterModule, CheckChannelsRequestConverterModule],
    providers : [
        {
            provide : CUSTOMER_MANAGER,
            useFactory : (contentAgent : ContentAgentInterface) => {
                return new CustomerManager(contentAgent)
            },
            inject : [CONTENT_AGENT]
        }
    ],
    controllers : [CustomerManagerController]
})
export class CustomerManagerModule {

}
