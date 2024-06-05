import {RewritePostsRequestModel} from "../../customer-manager/model/request/get-posts/rewrite-posts.request.model";
import {ChannelsToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";

export interface RewriteContentRequestConverterInterface {
    convert(request : RewritePostsRequestModel) :  ChannelsToRewriteModel
}