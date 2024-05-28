import {Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {CheckChannelsRequestModel} from "./model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "./model/response/check-channels.response.model";
import {RewritePostsRequestModel} from "./model/request/get-posts/rewrite-posts.request.model";
import {ChannelWithPostsModel, RewritePostsResponseModel} from "./model/response/rewrite-posts.response.model";
import {ContentAgent} from "../content-agent/content-agent";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(private contentAgent : ContentAgent) {
    }

    private async mockRewriter(channelsWithPosts : ChannelWithPostsModel[]) {
        await new Promise(resolve => setTimeout(resolve, 5000))
        console.log('Идёт имитация переписывания постов')
        return channelsWithPosts
    }
    async checkChannel(request : CheckChannelsRequestModel): Promise<CheckChannelsResponseModel> {
        return await this.contentAgent.checkChannels(request)
    }
    async rewritePosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel> {
        return await this.contentAgent.getChannelsWithPosts(request)
    }
}
