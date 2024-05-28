import {RewritePostsResponseModel} from "../../../customer-manager/model/response/rewrite-posts.response.model";
import {RewritePostsRequestModel} from "../../../customer-manager/model/request/get-posts/rewrite-posts.request.model";


export interface GetChannelsWithPostsInterfaceAction {
    getChannelsWithPosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel>
}