import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {Injectable} from "@nestjs/common";
import {
    CheckChannelsRequestModel
} from "../../../customer-manager/model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "../../../customer-manager/model/response/check-channels.response.model";
import {CheckChannelsInterfaceAction} from "../../action/check/check-channels/check-channels.interface.action";
import {RewritePostsResponseModel} from "../../../customer-manager/model/response/rewrite-posts.response.model";
import {GetChannelsWithPostsAction} from "../../action/get/get-channels-with-posts.action";
import {RewritePostsRequestModel} from "../../../customer-manager/model/request/get-posts/rewrite-posts.request.model";

@Injectable()
export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {

    constructor(
        private getChannelsWithPostsAction: GetChannelsWithPostsAction,
        private checkChannelsAction : CheckChannelsInterfaceAction,
    ) {

    }

    async checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel> {
        return await this.checkChannelsAction.checkChannels(request)
    }
    async getChannelsWithPosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel> {
        return await this.getChannelsWithPostsAction.getChannelsWithPosts(request)
    }

}