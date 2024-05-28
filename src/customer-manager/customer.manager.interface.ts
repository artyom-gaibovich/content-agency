import {CheckChannelsRequestModel} from "./model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "./model/response/check-channels.response.model";
import {RewritePostsRequestModel} from "./model/request/get-posts/rewrite-posts.request.model";
import {RewritePostsResponseModel} from "./model/response/rewrite-posts.response.model";

export interface CustomerManagerInterface {

    checkChannel(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
    rewritePosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel>
}