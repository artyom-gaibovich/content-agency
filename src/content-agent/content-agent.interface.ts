import {CheckChannelsRequestModel} from "../customer-manager/model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "../customer-manager/model/response/check-channels.response.model";
import {RewritePostsRequestModel} from "../customer-manager/model/request/get-posts/rewrite-posts.request.model";
import {RewritePostsResponseModel} from "../customer-manager/model/response/rewrite-posts.response.model";

export interface ContentAgentInterface {
    checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
    getChannelsWithPosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel>
}