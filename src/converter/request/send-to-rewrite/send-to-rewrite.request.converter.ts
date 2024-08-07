import {SendToRewriteRequestConverterInterface} from "./send-to-rewrite.request.converter.interface";
import {RewriteContentRequestInterface} from "../../../client/rewriter/model/req/rewrite-content.request.interface";
import {LinkInterface} from "../../../model/link/link.interface";
import {PromptInterface} from "../../../model/prompt/prompt.interface";
import {ChannelsWithPostsInterface} from "../../../content-agent/model/channel-with-posts.interface";

export class SendToRewriteRequestConverter implements SendToRewriteRequestConverterInterface{
    convert(link : LinkInterface, channelsWithPosts: ChannelsWithPostsInterface, prompt : PromptInterface): RewriteContentRequestInterface {
        return {
            url : link,
            body : {
                request_texts : channelsWithPosts.channelsWithPosts.filter(chn=>chn.posts).map(chn => {
                        return chn.posts.toString().replace(/\s+/g, ' ').trim().slice(0,4096)
                }),
                mode_gen : prompt.prompt,
            }
        }
    }
}
