import {ChannelsWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {RewriteContentResponseInterface} from "../../../client/rewriter/model/res/rewrite-content.response.interface";
import {RewriteContentRequestInterface} from "../../../client/rewriter/model/req/rewrite-content.request.interface";
import {LinkInterface} from "../../../model/link/link.interface";

export interface SendToRewriteRequestConverterInterface {
    convert(link : LinkInterface, channelsWithPosts : ChannelsWithPostsModel, modeGen : string) : RewriteContentRequestInterface
}