import {Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {CheckChannelsRequestModel} from "./model/request/check-channels.request.model";
import {CheckChannelsResponseModel} from "./model/response/check-channels.response.model";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(private contentAgent : ContentAgentInterface) {
    }
    async checkChannel(request : CheckChannelsRequestModel): Promise<CheckChannelsResponseModel> {
        return await this.contentAgent.checkChannels(request)
    }
}
