import {Inject, Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {ChannelsToCheckModel} from "./model/channels-to-check.model";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(@Inject('CONTENT_AGENT') private contentAgent : ContentAgentInterface) {
    }

    async checkChannels(channelsToCheck : ChannelsToCheckModel): Promise<CheckedChannelsModel> {
        return await this.contentAgent.checkChannels(channelsToCheck.channelsToCheck)
    }
    /*async rewritePosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel> {
        return await this.contentAgent.getChannelsWithPosts(request)
    }*/
}
