import {TelegramChannelRepository} from "./repository/channel/telegram.channel.repository";
import {Injectable} from "@nestjs/common";
import {CheckChannelsRequestModel} from "../customer-manager/model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "../customer-manager/model/response/check-channels.response.model";
import {ContentAgentInterface} from "./content-agent.interface";
import {RewritePostsRequestModel} from "../customer-manager/model/request/get-posts/rewrite-posts.request.model";
import {RewritePostsResponseModel} from "../customer-manager/model/response/rewrite-posts.response.model";


@Injectable()
export class ContentAgent implements ContentAgentInterface{
    constructor(private telegramChannelRepository : TelegramChannelRepository) {
    }
    async checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel> {
        return await this.telegramChannelRepository.checkChannels(request)
    }
    async getChannelsWithPosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel> {
        return await this.telegramChannelRepository.getChannelsWithPosts(request)
    }

}