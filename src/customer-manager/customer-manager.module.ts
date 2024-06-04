import {Module} from '@nestjs/common';
import {ContentAgentModule} from "../content-agent/content-agent.module";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {CustomerManager} from "./customer-manager";
import {CustomerManagerController} from "./customer-manager.controller";
import {CheckChannelsRequestConverter} from "../request-converter/check-channels-request-converter";

@Module({
    imports : [ContentAgentModule],
    providers : [
        {
            provide : 'REQUEST_CONVERTER',
            useFactory: () => {
                return new CheckChannelsRequestConverter()
            }
        },
        {
            provide : 'CUSTOMER_MANAGER',
            useFactory : (contentAgent : ContentAgentInterface) => {
                return new CustomerManager(contentAgent)
            },
            inject : ['CONTENT_AGENT']
        }
    ],
    controllers : [CustomerManagerController]
})
export class CustomerManagerModule {

}
