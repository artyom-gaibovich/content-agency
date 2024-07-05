import {RewriteContentRequestInterface} from "../../../client/rewriter/model/req/rewrite-content.request.interface";
import {LinkInterface} from "../../../model/link/link.interface";
import {PromptInterface} from "../../../model/prompt/prompt.interface";
import {ChannelsWithPostsInterface} from "../../../content-agent/model/channel-with-posts.interface";

export interface SendToRewriteRequestConverterInterface {
    convert(link : LinkInterface, channelsWithPosts : ChannelsWithPostsInterface, prompt : PromptInterface) : RewriteContentRequestInterface
}