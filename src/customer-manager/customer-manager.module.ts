import {Module} from '@nestjs/common';
import {ContentAgentModule} from "../content-agent/content-agent.module";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {CustomerManager} from "./customer-manager";

@Module({
    imports : [ContentAgentModule],
    providers : [
        {
            provide : 'CUSTOMER_MANAGER',
            useFactory : (contentAgent : ContentAgentInterface) => {
                return new CustomerManager(contentAgent)
            },
            inject : ['CONTENT_AGENT']
        }
    ]
})
export class CustomerManagerModule {

}
